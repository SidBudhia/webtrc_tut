import React, { useEffect, useState } from 'react'
import { useSocket } from '../context/SocketProvider';
import { useNavigate } from 'react-router-dom';

const Lobby = () => {
  const [email, setEmail] = useState("");
  const [room, setRoom] = useState("");

  const navigate = useNavigate();

  const socket = useSocket();
  // console.log(socket);


  const handleSubmitForm = (e) => {
    // console.log("from submit");
    e.preventDefault();
    socket.emit('room:join', {email, room});
  };

  const handleJoinRoom = (data) => {
    const { email, room } = data;
    // console.log(email, room);
    navigate(`/room/${room}`);
  }



  useEffect(()=> {
    socket.on('room:join', handleJoinRoom);
    return () => {
      socket.off('room:join', handleJoinRoom)
    }
  }, [socket, handleJoinRoom]);

  return (
    <div>
      <h1>Lobby</h1>
      <form onSubmit={handleSubmitForm}>
        <label htmlFor="email">Email ID</label>
        <input type="email" id='email' value={email} onChange={({target}) => setEmail(target.value)} />
        <br />
        <label htmlFor="room">room Number</label>
        <input type="text" id='room' value={room} onChange={({target}) => setRoom(target.value)} />
        <br />
        <button>Join</button>
      </form>
    </div>
  )
}

export default Lobby;