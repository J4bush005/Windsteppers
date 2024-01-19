import React from "react";
import Athlete1 from "../../../Athletes/Athlete 1.webp";
import Athlete2 from "../../../Athletes/Athlete 2.webp";

import Athlete5 from "../../../Athletes/Athlete 5.webp";

import Athlete7 from "../../../Athletes/Athlete 7.webp";
import Athlete8 from "../../../Athletes/Athlete 8.webp";
import Athlete9 from "../../../Athletes/Athlete 9.webp";
import Athlete10 from "../../../Athletes/Athlete 10.webp";
import Athlete3 from "../../../Athletes/Athlete 3.5.webp";
import Athlete4 from "../../../Athletes/Athlete 4.webp";
import Athlete6 from "../../../Athletes/Athlete 6.webp";
import Athlete11 from "../../../Athletes/Athlete 11.5.webp";
import Athlete16 from "../../../Athletes/Athlete 16.webp";
import Athlete12 from "../../../Athletes/Athlete 12.webp";
import Athlete13 from "../../../Athletes/Athlete 13.webp";
import Athlete14 from "../../../Athletes/Athlete 14.webp";
import Athlete15 from "../../../Athletes/Athlete 15.webp";

// ... import other athlete images

import { useState, useRef } from "react";

function AthleteCard({
  image,
  name,
  age,
  events,
  event1,
  event2,
  event3,
  best1,
  best2,
  best3,
}) {
  const [showStats, setShowStats] = useState(false);

  const handleMouseEnter = () => {
    setShowStats(true);
  };

  const handleMouseLeave = () => {
    setShowStats(false);
  };

  return (
    <div
      className="card athlete-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {!showStats ? (
        <>
          <img
            src={image}
            className="card-img-top athlete-image"
            alt={name}
            style={{ height: "500px", objectFit: "cover" }}
          />
          <div className="card-body">
            <div className="card-title h5">{name}</div>
            <div className="card-text">{age} years old</div>
            <div className="card-text">Events: {events}</div>
          </div>
        </>
      ) : (
        <div className="card athlete-stats">
          <div className="card-body">
            <h5
              id="stats"
              className="card-title display-3 d-flex justify-content-center"
            >
              Stats:
            </h5>
            <div className="row  mt-3">
              <p id="events" className="card-text h1">
                {event1}
              </p>
            </div>
            <div className="row">
              <div className="col-12">
                <p id="personal-stats" className="card-text">
                  Best: {best1}
                </p>
              </div>
            </div>
            <div className="row  mt-3">
              <p id="events" className="card-text h1">
                E{event2}
              </p>
            </div>
            <div className="row">
              <div className="col-12">
                <p id="personal-stats" className="card-text">
                  Best: {best2}
                </p>
              </div>
            </div>
            <div className="row  mt-3">
              <p id="events" className="card-text h1">
                E{event3}
              </p>
            </div>
            <div className="row">
              <div className="col-12">
                <p id="personal-stats" className="card-text">
                  Best: {best3}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function AthleteDisplay() {
  const menAthletes = [
    {
      image: Athlete1,
      name: "Athlete 1",
      age: 20,
      events: "",
      event1: 1,
      event2: 2,
      event3: 3,
      best1: "1:00",
      first1: "1:00",
      second1: "1:00",
      third1: "1:00",
      best2: "1:00",
      first2: "1:00",
      second2: "1:00",
      third2: "1:00",
      best3: "1:00",
      first3: "1:00",
      second3: "1:00",
      third3: "1:00",
    },
    {
      image: Athlete2,
      name: "Thomas Buckman",
      age: 13,
      events: "Pole Vault",
      event1: "Pole Vault",
      best1: "1:00",
    },
    {
      image: Athlete5,
      name: "Tashaun Turk",
      age: 20,
      events: "",
      event1: 1,
      event2: 2,
      event3: 3,
      best1: "1:00",
      first1: "1:00",
      second1: "1:00",
      third1: "1:00",
      best2: "1:00",
      first2: "1:00",
      second2: "1:00",
      third2: "1:00",
      best3: "1:00",
      first3: "1:00",
      second3: "1:00",
      third3: "1:00",
    },
    {
      image: Athlete7,
      name: "Athlete 7",
      age: 20,
      events: "",
      event1: 1,
      event2: 2,
      event3: 3,
      best1: "1:00",
      first1: "1:00",
      second1: "1:00",
      third1: "1:00",
      best2: "1:00",
      first2: "1:00",
      second2: "1:00",
      third2: "1:00",
      best3: "1:00",
      first3: "1:00",
      second3: "1:00",
      third3: "1:00",
    },
    {
      image: Athlete8,
      name: "Athlete 8",
      age: 20,
      events: "",
      event1: 1,
      event2: 2,
      event3: 3,
      best1: "1:00",
      first1: "1:00",
      second1: "1:00",
      third1: "1:00",
      best2: "1:00",
      first2: "1:00",
      second2: "1:00",
      third2: "1:00",
      best3: "1:00",
      first3: "1:00",
      second3: "1:00",
      third3: "1:00",
    },
    {
      image: Athlete9,
      name: "Athlete 9",
      age: 20,
      events: "",
      event1: 1,
      event2: 2,
      event3: 3,
      best1: "1:00",
      first1: "1:00",
      second1: "1:00",
      third1: "1:00",
      best2: "1:00",
      first2: "1:00",
      second2: "1:00",
      third2: "1:00",
      best3: "1:00",
      first3: "1:00",
      second3: "1:00",
      third3: "1:00",
    },
    {
      image: Athlete10,
      name: "Nosaj Booker",
      age: 20,
      events: "",
      event1: 1,
      event2: 2,
      event3: 3,
      best1: "1:00",
      first1: "1:00",
      second1: "1:00",
      third1: "1:00",
      best2: "1:00",
      first2: "1:00",
      second2: "1:00",
      third2: "1:00",
      best3: "1:00",
      first3: "1:00",
      second3: "1:00",
      third3: "1:00",
    },
    {
      image: Athlete12,
      name: "Jamison Forbush",
      age: 20,
      events: "",
      event1: 1,
      event2: 2,
      event3: 3,
      best1: "1:00",
      first1: "1:00",
      second1: "1:00",
      third1: "1:00",
      best2: "1:00",
      first2: "1:00",
      second2: "1:00",
      third2: "1:00",
      best3: "1:00",
      first3: "1:00",
      second3: "1:00",
      third3: "1:00",
    },
    {
      image: Athlete13,
      name: "Trace Buckman",
      age: 20,
      events: "",
      event1: 1,
      event2: 2,
      event3: 3,
      best1: "1:00",
      first1: "1:00",
      second1: "1:00",
      third1: "1:00",
      best2: "1:00",
      first2: "1:00",
      second2: "1:00",
      third2: "1:00",
      best3: "1:00",
      first3: "1:00",
      second3: "1:00",
      third3: "1:00",
    },
    {
      image: Athlete14,
      name: "Athlete 14",
      age: 20,
      events: "",
      event1: 1,
      event2: 2,
      event3: 3,
      best1: "1:00",
      first1: "1:00",
      second1: "1:00",
      third1: "1:00",
      best2: "1:00",
      first2: "1:00",
      second2: "1:00",
      third2: "1:00",
      best3: "1:00",
      first3: "1:00",
      second3: "1:00",
      third3: "1:00",
    },
    {
      image: Athlete15,
      name: "Athlete 15",
      age: 20,
      events: "",
      event1: 1,
      event2: 2,
      event3: 3,
      best1: "1:00",
      first1: "1:00",
      second1: "1:00",
      third1: "1:00",
      best2: "1:00",
      first2: "1:00",
      second2: "1:00",
      third2: "1:00",
      best3: "1:00",
      first3: "1:00",
      second3: "1:00",
      third3: "1:00",
    },
  ];



  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-md-12">
          {" "}
          <h1 className="display-2" id="championsss">
            Mens Roster:
          </h1>
        </div>
      </div>
      <div className="row">
        {menAthletes.map((athlete, index) => (
          <div className="col-lg-3 col-md-4" key={index} id={athlete.name}>
            <AthleteCard {...athlete} />
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default AthleteDisplay;
