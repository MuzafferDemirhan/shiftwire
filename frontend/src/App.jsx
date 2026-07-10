import { useEffect } from "react";
import { useAuth } from "@clerk/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { setGetToken } from "./lib/axios.js";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import HomePage from "./pages/HomePage.jsx";
import ChatPage from "./pages/ChatPage.jsx";
import SettingsPage from "./pages/SettingsPage.jsx";

function App() {
  const { getToken } = useAuth();

  useEffect(() => {
    setGetToken(() => getToken());
  }, [getToken]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/chat"
          element={
            <ProtectedRoute>
              <ChatPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <SettingsPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
