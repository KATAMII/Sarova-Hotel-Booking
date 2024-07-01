import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="heroall">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="herowelcome">SAROVA WHITESAND</h1>
          <h3 className="herowelcome2">BEACH RESORT AND SPA</h3>
          <div className="herotext">
            <p className="heropara">Home Away From Home</p>
          </div>
        </div>
        <div className="hero-link">
          <button className="herobtn">
            <Link to="/">Sign Up</Link>
          </button>
          <button className="herobtn">
            <Link to="/">Sign In </Link>
          </button>
        </div>
      </div>
      <div className="book">
        <form class="booking-form">
          <div class="form-group">
            <label>CHECK IN</label>
            <input type="date" required />
          </div>
          <div class="form-group">
            <label>CHECK OUT</label>
            <input type="date" required />
          </div>
          <div class="form-group">
            <label>Adults</label>
            <input type="number" required />
          </div>
          <div class="form-group">
            <label>KIDS</label>
            <input type="number" />
          </div>
          <div class="form-group">
            <label>ROOM</label>
            <select required>
              <option value="">Select Room</option>
              <option value="single">Single</option>
              <option value="double">Double</option>
              <option value="suite">Suite</option>
            </select>
          </div>
          <button type="submit">BOOK NOW</button>
        </form>
      </div>
    </div>
  );
}

export default Hero;
