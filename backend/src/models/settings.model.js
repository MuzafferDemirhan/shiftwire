import mongoose from "mongoose";

const settingsSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    theme: {
      type: String,
      enum: ["light", "dark", "system"],
      default: "system",
    },
    fontSize: {
      type: String,
      enum: ["sm", "md", "lg"],
      default: "md",
    },
    bubbleStyle: {
      type: String,
      enum: ["rounded", "compact"],
      default: "rounded",
    },
    notifications: {
      messages: { type: Boolean, default: true },
      sound: { type: Boolean, default: true },
      preview: { type: Boolean, default: true },
    },
    privacy: {
      onlineStatus: {
        type: String,
        enum: ["everyone", "contacts", "nobody"],
        default: "everyone",
      },
      readReceipts: { type: Boolean, default: true },
      typingIndicator: { type: Boolean, default: true },
    },
    media: {
      autoDownload: {
        type: String,
        enum: ["wifi", "always", "never"],
        default: "wifi",
      },
      imageQuality: {
        type: String,
        enum: ["standard", "high"],
        default: "standard",
      },
    },
    language: {
      type: String,
      default: "en",
    },
  },
  { timestamps: true },
);

const Settings = mongoose.model("Settings", settingsSchema);

export default Settings;
