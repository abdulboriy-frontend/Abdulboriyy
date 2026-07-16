import "./card.css";

function Card({ rasm, nomi, narxi, buyurtma, holat, chegirma }) {
  return (
    <div className="card">
      {chegirma && <span className="discount">{chegirma}</span>}

      <img src={rasm} alt={nomi} />

      <div className="info">
        <h4>{nomi}</h4>

        <h2>{narxi}</h2>

        <p>{buyurtma}</p>

        <div className="status">{holat}</div>
      </div>
    </div>
  );
}

export default Card;