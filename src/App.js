import { Routes, Route } from "react-router-dom";
import Lobby from './pages/Lobby';
import Room from './pages/Room';
import Jitsimeet from "./pages/Jitsimeet";
import Zegocloud from "./pages/Zegocloud";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Lobby/>} />
        <Route path='/room/:roomid' element={<Room/>}/>
        <Route path='/jitsimeet' element={<Jitsimeet/>}/>
        <Route path="/zegomeet/:roomid" element={<Zegocloud/>}/>
      </Routes>
    </div>
  );
}

export default App;
