import { useState } from "react";
import style from "../../style/BottomSheet.module.css";
import { FcGlobe } from "react-icons/fc";

const StartRoom = ({ setSheetCreateRoom, setSheetVisible }) => {
  const [room, setRoom] = useState("open");

  return (
    <>
      <div className={style.switch_Line}></div>
      <div className="text-right">
        <button className={style.addTopicBtn}>+ Add a Topic</button>
      </div>
      <div className={style.selectRoom}>
        <button
          className={room === "open" ? style.active : ""}
          onClick={() => setRoom("open")}
        >
          <div>
            <FcGlobe />
          </div>
          <span className={style.title}>Open</span>
        </button>
        <button
          className={room === "social" ? style.active : ""}
          onClick={() => setRoom("social")}
        >
          <div>
            <FcGlobe />
          </div>
          <span className={style.title}>Social</span>
        </button>
        <button
          className={room === "closed" ? style.active : ""}
          onClick={() => setRoom("closed")}
        >
          <div>
            <FcGlobe />
          </div>
          <span className={style.title}>Closed</span>
        </button>
      </div>
      <p>
        Start a Room{" "}
        <span>
          {room === "closed"
            ? "For People I choose"
            : room === "social"
            ? "With People I follow"
            : "Open to Everyone"}
        </span>
      </p>
      <div className="text-center">
        <button
          className={style.letGoBtn}
          onClick={() => {
            setSheetCreateRoom(true);
            setSheetVisible(true);
          }}
        >
          🎉 Let's Go!
        </button>
      </div>
    </>
  );
};

export default StartRoom;
