import style from "../style/DailyInfoCard.module.css";
import data from "../data/dailyCard.json";

const DailyInfoCard = () => {
  return (
    <div className={style.dailyCard}>
      {data.map((item, index) => (
        <div key={index}>
          <span className="">{item.time}</span>
          <div key={index}>
            <span>{item.title}</span>
            <p>{item.description || ""}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DailyInfoCard;
