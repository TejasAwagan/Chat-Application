// import socketIo, { connect } from "socket.io-client";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Join from "./components/Join/Join";
import Chat from "./components/Chat/Chat";


function App() {
  // socket.on(connect, () => {});

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" Component={Join} />
          <Route path="/chat" Component={Chat} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
