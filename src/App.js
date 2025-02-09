import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChatRoom from "./components/ChatRoom/ChatRoom";
import AuthProvider from "./Context/AuthProvider";
import AppProvider from "./Context/RoomContext";
import RoomProvider from "./Context/RoomContext";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <RoomProvider>
          <Routes>
            <Route element={<Login />} path="/login"></Route>
            <Route element={<ChatRoom />} path="/"></Route>
          </Routes>
        </RoomProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
