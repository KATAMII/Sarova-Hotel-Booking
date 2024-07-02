import React from "react";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import { MdOutlinePool } from "react-icons/md";
import { MdLocalDining } from "react-icons/md";
import { BiSolidMoviePlay } from "react-icons/bi";
import { FcConferenceCall } from "react-icons/fc";
import "./Amenities.css";
import swimming from '../../assets/swim.jpeg'
import cinema from '../../assets/cinema.jpeg'

function Amenities() {
  return (
    <div className="amenities">
      <Banner mainTitle="OUR AMENITIES" subTitle="View our facilities"/>
      <div className="amenities-container">
        <div className="amenities-description">
          <h2>Our Amenities</h2>
          <p>
            Our stay at Sarova Hotel was truly exceptional, from the warmly greeted arrival to the elegantly appointed rooms and impeccable service. The dining experience surpassed expectations with a delightful .
          </p>
          <div className="icons-container">
            <div className="icon-item">
              <p className="icon">  <MdOutlinePool /> swimming pool</p>
            </div>
            <div className="icon-item">
              <p className="icon"> <MdLocalDining />dinning area</p>
            </div>
            <div className="icon-item">
             
              <p className="icon"><BiSolidMoviePlay />cinema</p>
            </div>
            <div className="icon-item">
            
              <p className="icon"><FcConferenceCall />conference hall</p>
            </div>
          </div>
        </div>
        <div className="amenities-images">
          <div className="image-item">
            <img src={swimming} alt="Swimming Pool" />
            <p>Our stay at Sarova Hotel was truly exceptional</p>
          </div>
          <div className="image-item">
            <img src={cinema} alt="Cinema" />
            <p>Our stay at Sarova Hotel was truly exceptional</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Amenities;
