const Cards = ({ data }) => {
  return (
    <div className="card">
      <div className="about">
        <div className="name">{data.location.name}</div>

        <div className="img">
          <img src={data.current && data.current.condition.icon} alt="" />
        </div>
      </div>
      <div className="local-temp">
        <div className="local">{data.location.region}</div>
        <div className="temp">{data.current.temp_c}ºC</div>
      </div>
      <div className="data-temp">
        <div className="data">{data.location.localtime}</div>
        <div className="temp">{data.current.temp_f}ºF</div>
      </div>
    </div>
  );
};

export default Cards;
