import { Routes, Route } from "react-router-dom";
import Lobby from './pages/Lobby';
import Room from './pages/Room';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Lobby/>} />
        <Route path='/room/:roomid' element={<Room/>}/>
      </Routes>
    </div>
  );
}

export default App;
