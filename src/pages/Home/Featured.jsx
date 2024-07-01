import React from 'react';
import roomimg from '../../assets/room1.jpeg';
import { MdLocationPin } from 'react-icons/md';
import './Featured.css';
import { TbHearts } from "react-icons/tb";
import { RiHeartsFill } from "react-icons/ri";


function Featured() {
  const rooms = [
    {
      id: 1,
      image: roomimg,
      title: 'Queens room',
      location: 'Queens plaza',
      price: 6000,
    },
    {
      id: 2,
      image: roomimg,
      title: 'Queens room',
      location: 'Queens plaza',
      price: 6000,
    },
    {
      id: 3,
      image: roomimg,
      title: 'Queens room',
      location: 'Queens plaza',
      price: 6000,
    },
    {
      id: 4,
      image: roomimg,
      title: 'Queens room',
      location: 'Queens plaza',
      price: 6000,
    },
    {
      id: 5,
      image: roomimg,
      title: 'Queens room',
      location: 'Queens plaza',
      price: 6000,
    },
    {
      id: 6,
      image: roomimg,
      title: 'Queens room',
      location: 'Queens plaza',
      price: 6000,
    },
  ];

  return (
    <div className="room-list">
      {rooms.map((room) => (
        <div key={room.id} className="room-card">
          <div className="romimg">
            <img src={room.image} alt="room" />
          </div>
          <div className="info">
            <h3>{room.title}</h3>
            <p className='heart'>
              <MdLocationPin />
              {room.location}
            </p>
            <div className="beds">
              <p className='bed'>1 BED</p>
              <p className='bed'> 1 BATH</p>
              <p className='heart'><RiHeartsFill />
              </p>
            </div>
          </div>
          <div className="price">
            <h3>${room.price}</h3>
            <p>Per Night</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Featured;
