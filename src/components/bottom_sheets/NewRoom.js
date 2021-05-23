import { useState } from "react";
import style from "../../style/RoomDetail.module.css";
import { AiOutlineFile, AiOutlinePlus } from "react-icons/ai";
import { BsMicMuteFill, BsMicFill } from "react-icons/bs";

const NewRoom = ({ cardDetail, setSheetVisible }) => {
  const [micMuteVisible, setMicMuteVisible] = useState(false);
  const [itemsVisible, setItemsVisible] = useState(true);

  return (
    <>
      <div className={style.roomDetailContainer}>
        <div className={style.head}>
          <div className="d-flex align-items-center">
            <a href="#" onClick={() => setSheetVisible(false)}>
              <img
                src="/images/arrow.png"
                alt="<-"
                className={style.arrow_icon}
              />
            </a>
            <span>Hallway</span>
          </div>
          <div>
            <AiOutlineFile />
            <img
              src="/images/user-img.jpg"
              alt="User"
              className={style.profile_img}
            />
          </div>
        </div>
        <div className={style.roomDetailCard}>
          <div
            className="d-flex align-items-center justify-content-between flex-wrap"
            style={{ padding: "0.5em 1em" }}
          >
            {cardDetail.members.map((item, index) => (
              <div className={style.memberContainer} key={index}>
                {micMuteVisible ? (
                  <div className={style.audioIcon}>
                    <BsMicMuteFill />
                  </div>
                ) : (
                  <></>
                )}
                <img src="images/user-img.jpg" alt="User" />
                <p>
                  <span></span>
                  {item.first_name}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className={style.footer}>
          <button
            onClick={() => {
              setSheetVisible(false);
            }}
          >
            <img src="/images/hand-peace.png" alt="/\" />
            Leave Quietly
          </button>
          <div>
            <button>
              <AiOutlinePlus />
            </button>
            <button>
              <img src="/images/stopHandIcon.png" alt="Stop" />
            </button>
            <button
              onClick={() => {
                setMicMuteVisible(!micMuteVisible);
              }}
            >
              {micMuteVisible ? <BsMicMuteFill /> : <BsMicFill />}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewRoom;
