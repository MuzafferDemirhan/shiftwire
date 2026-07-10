import { useEffect } from "react";
import { useAuth } from "@clerk/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { setGetToken } from "./lib/axios.js";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import ChatPage from "./pages/ChatPage.jsx";

function App() {
  const { getToken } = useAuth();

  useEffect(() => {
    setGetToken(() => getToken());
  }, [getToken]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <ChatPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
