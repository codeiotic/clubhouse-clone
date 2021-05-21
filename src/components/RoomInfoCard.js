import { useEffect, useState } from "react";
import style from "../style/RoomCard.module.css";
import data from "../data/roomCard.json";
import { BsChatDots, BsChatDotsFill, BsFillPersonFill } from "react-icons/bs";

const RoomInfoCard = () => {
  return (
    <>
      {data.map((item, index) => (
        <div key={index}>
          <div>
            <div className={style.roomCardContainer}>
              <h6>{item.title}</h6>
              <h2>{item.sub_title}</h2>
              <div className={style.roomMembers}>
                <div>
                  <img src="/images/user-img.jpg" alt="User 1" />
                  <img src="/images/user-img2.jpg" alt="User 2" />
                </div>
                <div>
                  {item.members.map((item, index) => (
                    <p key={index}>
                      {item.first_name} {item.last_name} <BsChatDots />
                    </p>
                  ))}
                  <p className="d-flex align-items-center">
                    <span className="mr-2">1.8</span>
                    <BsFillPersonFill />
                    <span className="mx-2"></span>
                    <span className="mr-2">5</span> <BsChatDotsFill />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default RoomInfoCard;
