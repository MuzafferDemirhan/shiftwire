import { useEffect } from "react";
import { useAuth } from "@clerk/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { setGetToken } from "./lib/axios.js";
import ThemeProvider from "./components/ThemeProvider.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import HomePage from "./pages/HomePage.jsx";
import ChatPage from "./pages/ChatPage.jsx";
import SettingsPage from "./pages/SettingsPage.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
  const { getToken } = useAuth();

  useEffect(() => {
    setGetToken(() => getToken());
  }, [getToken]);

  return (
    <BrowserRouter>
      <ThemeProvider>
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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
