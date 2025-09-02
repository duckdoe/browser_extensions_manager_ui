function Card({ data }) {
  console.log(data.logo);
  return (
    <div>
      <div>
        <img src={data.logo} alt={data.name} />
        <div>
          <h4>{data.name}</h4>
          <p>{data.description}</p>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Card;
