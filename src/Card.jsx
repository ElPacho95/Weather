const Card = ({ city }) => {
  return (
    <div>
      {city.map((item) => {
        return (
          <div className="card">
            <div className="about">
              <div className="name">{item.location.name}</div>

              <div className="img">
                <img src={item.current && item.current.condition.icon} alt="" />
              </div>
            </div>
            <div className="local-temp">
              <div className="local">{item.location.region}</div>
              <div className="temp">{item.current.temp_c}ºC</div>
            </div>
            <div className="data-temp">
              <div className="data">{item.location.localtime}</div>
              <div className="temp">{item.current.temp_f}ºF</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
