import Settings from "../models/settings.model.js";

const defaults = {
  theme: "system",
  fontSize: "md",
  bubbleStyle: "rounded",
  notifications: { messages: true, sound: true, preview: true },
  privacy: {
    onlineStatus: "everyone",
    readReceipts: true,
    typingIndicator: true,
  },
  media: { autoDownload: "wifi", imageQuality: "standard" },
  language: "en",
};

export async function getSettings(req, res) {
  try {
    let settings = await Settings.findOne({ userId: req.user._id });
    if (!settings) {
      settings = await Settings.create({ userId: req.user._id, ...defaults });
    }
    res.status(200).json(settings);
  } catch (error) {
    console.error("Error in getSettings:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
}

const allowedFields = [
  "theme", "fontSize", "bubbleStyle",
  "notifications", "privacy", "media", "language",
];

export async function updateSettings(req, res) {
  try {
    const updates = {};
    for (const key of allowedFields) {
      if (req.body[key] !== undefined) updates[key] = req.body[key];
    }
    const settings = await Settings.findOneAndUpdate(
      { userId: req.user._id },
      { $set: updates },
      { new: true, upsert: true, runValidators: true },
    );
    res.status(200).json(settings);
  } catch (error) {
    console.error("Error in updateSettings:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
}
