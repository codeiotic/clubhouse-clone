import style from "../style/Profile.module.css";
import exploreStyle from "../style/Explore.module.css";
import { Link } from "react-router-dom";
import { BsAt, BsUpload } from "react-icons/bs";
import { AiOutlineSetting } from "react-icons/ai";

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
      </div>
    </>
  );
};

export default Profile;
