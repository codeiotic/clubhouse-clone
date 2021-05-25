import style from "../style/Profile.module.css";
import exploreStyle from "../style/Explore.module.css";
import { Link } from "react-router-dom";
import { BsAt, BsPlus, BsUpload } from "react-icons/bs";
import {
  AiOutlineInstagram,
  AiOutlineSetting,
  AiOutlineTwitter,
} from "react-icons/ai";

const Profile = () => {
  return (
    <>
      <div className={style.profileContainer}>
        <div className={exploreStyle.header}>
          <div
            className={`${exploreStyle.head} text-right mb-0`}
            style={{ justifyContent: "space-between" }}
          >
            <Link to="/home">
              <img
                src="/images/arrow.png"
                alt="<-"
                className={exploreStyle.arrow_icon}
                style={{
                  top: "20px",
                  left: "10px",
                }}
              />
            </Link>
            <div className={style.actionBtn}>
              <BsAt />
              <BsUpload />
              <AiOutlineSetting />
            </div>
          </div>
        </div>
        <img
          src="/images/user-img.jpg"
          alt="User"
          className={style.profile_image}
        />
        <h4>Noob Me!</h4>
        <p>@noobme!</p>
        <div className={style.follow}>
          <p>
            <span>0</span> Followers
          </p>
          <p>
            <span>51</span> Following
          </p>
        </div>
        <button>Add a Bio</button>
        <div className="mb-4">
          <button className="mb-0">
            <AiOutlineTwitter /> Add Twitter
          </button>
          <button className="mb-0">
            <AiOutlineInstagram /> Add Instagram
          </button>
        </div>
        <div className={style.nominated}>
          <img src="/images/user-img.jpg" alt="User" />
          <div>
            <p>Joined 14-July-2020</p>
            <p>
              Nominated by <span>Anton Alarcon</span>
            </p>
          </div>
        </div>
        <p>Member of </p>
        <button className={style.addMemberBtn}>
          <BsPlus />
        </button>
      </div>
    </>
  );
};

export default Profile;
