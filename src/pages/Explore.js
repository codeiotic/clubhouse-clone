import style from "../style/Explore.module.css";
import { DownOutlined, FireOutlined } from "@ant-design/icons";
import data from "../data/Explore.json";
import { Input } from "antd";
import SubHeader from "../components/SubHeader";

const Explore = () => {
  const { conversation, people } = data;

  return (
    <div className={style.exploreContainer}>
      <div className={style.header}>
        <SubHeader pageTitle="Explore" />
        <Input
          style={{
            backgroundColor: "#f4f4f4",
            borderRadius: "0.8em",
            padding: "0.3em 1.5em",
            border: "none",
            boxShadow: "none",
            marginBottom: "-10px",
          }}
          size="large"
          placeholder="Find People and Clubs"
          prefix={<img src="/images/search.png" alt="Search" width="15px" />}
        ></Input>
      </div>
      <h6>PEOPLE TO FOLLOW</h6>
      <div className={style.peopleContainer}>
        {people.map((item, index) => (
          <div key={index}>
            <div className="d-flex align-items-center">
              <img src="/images/user-img.jpg" alt={`User ${index}`} />
              <div className="ml-2">
                <h5>{item.title}</h5>
                <p className={style.desc}>{item.description}</p>
              </div>
            </div>
            <button>Follow</button>
          </div>
        ))}
        <button className={style.showMore}>
          Show More People <DownOutlined />
        </button>
      </div>
      <h6>FIND CONVERSATIONS ABOUT...</h6>
      <div className="row mx-0">
        {conversation.map((item, index) => (
          <div className="col-6 px-2 mb-3" key={index}>
            <div className={style.conversationCard}>
              <h6>
                <FireOutlined />
                {item.title}
              </h6>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
