import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import "./Adcard.css";
import { useState, useEffect } from "react";
import Dropdown from "../dropdown/Dropdown";

//random pastelcolor
import {
  generateRandomPastelColor,
  getfullMonthname,
  getdifftime,
} from "../../../Services/Globalservices";
const Adcard = ({ post }) => {
  const [isOpen, setOpen] = useState(false);
  const [color, setColor] = useState("");

  const postUTC = new Date(post.publishedAt);
  const timediff = new Date() - postUTC;

  //calculate difftime when create a blog and current
  const ago = getdifftime(timediff);

  //get time
  const year = postUTC.getFullYear();
  const day = postUTC.getDate();
  const monthname = getfullMonthname(postUTC.getMonth());

  //setbgcolor of card
  useEffect(() => {
    setColor(generateRandomPastelColor());
  }, []);
  const cardstyle = {
    backgroundColor: color,
    borderRadius: 10,
  };
  const toggledropdown = () => {
    setOpen(!isOpen);
  };
  const other = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* status detail */}
      <div className="ad-details" style={cardstyle}>
        {/* fetch data card */}

        {isOpen ? <Dropdown toggledropdown={toggledropdown} isOpen={isOpen} id={post.id} /> : null}

        <div className="ad-details-data">
          <div className="ad-card-date">
            <p>
              {monthname} {day}, {year}
            </p>
            {/* Dropdown symbol*/}
            {isOpen ? null : (
              <div className="carddropdownstore" onClick={toggledropdown}>
                <BsThreeDotsVertical className="carddropdown"/>
              </div>
            )}
          </div>

          <div className="ad-card-title">
            <h4>{post.title}</h4>
            <h5>{post.catagory}</h5>
          </div>

          <hr />
          <div className="ad-card-detail">
            <div className="ad-card-detail-img">
              <img
                src="https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg"
                alt={post.author}
              />
            </div>
            <div className="caldate">
              <p>{ago}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adcard;
