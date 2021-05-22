import { Link } from "react-router-dom";
import style from "../style/Header.module.css";

const Header = () => {
  return (
    <div className={style.Header}>
      <Link to="/explore">
        <img src="/images/search.png" alt="Search" />
      </Link>
      <input type="text" className={style.input} placeholder="Search" />
      <div className={style.nav_items}>
        <Link to="/friends_invite">
          <img src="/images/invite.png" alt="Invite" />
        </Link>
        <Link to="/upcoming">
          <img src="/images/calendar.png" alt="Invite" />
        </Link>
        <Link to="/activity">
          <img src="/images/noti.png" alt="Invite" />
        </Link>
        <Link to="/profile">
          <img src="/images/b1.png" alt="Invite" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
