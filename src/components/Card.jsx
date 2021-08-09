import "./Card.css";
const Card = ({ data, addItem }) => {
  return (
    <div className="card">
      <img src={data.url} alt="Cat" />
      <div className="bottom-row">
        <p>
          <b>{data.name}</b>
        </p>
        <button className="add-btn" onClick={addItem}>
          <img src={plusIcon} alt="Add" />
        </button>
      </div>
    </div>
  );
};

export default Card;
