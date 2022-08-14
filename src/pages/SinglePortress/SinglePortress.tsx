import { Link, useParams } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import "./SinglePortress.css";

const SinglePortress = () => {
  const { portress } = useAppSelector((state) => state.portress);
  const { id } = useParams();
  const data = portress.find((item) => item.portress_id === id);

  return (
    <div className="singlePortress">
      <h1>Photographer information</h1>
      <div className="singlePortress__container">
        <div className="singlePortress__left">
          <div className="singlePortress__info">
            <div className="singlePortress__infoRow">
              <p>username:</p>
              <h3>{data.username}</h3>
            </div>
            <div className="singlePortress__infoRow">
              <p>email:</p>
              <h3>{data.email}</h3>
            </div>
            <div className="singlePortress__infoRow">
              <p>phone:</p>
              <h3>{data.phone}</h3>
            </div>
            <div className="singlePortress__infoRow">
              <p>URL_Social:</p>
              <h3>{data.url}</h3>
            </div>
            <div className="singlePortress__infoRow">
              <p>price:</p>
              <h3>{data.price} $</h3>
            </div>
          </div>
          <div className="singlePortress__btns">
            <Link to="/reservation">reservation</Link>
            <Link to="/portress">go back</Link>
          </div>
        </div>
        <div className="singlePortress__right">
          <img src={data.image} alt="randomImage" />
        </div>
      </div>
    </div>
  );
};

export default SinglePortress;
