import style from "../style/DailyInfoCard.module.css";
import data from "../data/dailyCard.json";

const DailyInfoCard = () => {
  return (
    <div className={style.dailyCard}>
      {data.map((item, index) => (
        <div key={index}>
          <span className={style.time}>{item.time}</span>
          <div key={index}>
            <span className={style.title}>{item.title}</span>
            <p className={style.description}>{item.description || ""}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DailyInfoCard;
