import { Link } from "react-router-dom";
import "./PortressCard.css";

interface Props {
  item: {
    portress_id: string;
    username: string;
    email: string;
    phone: string;
    image: string;
    url: string;
    price: string;
  };
}

const PortressCard = ({ item }: Props) => {
  return (
    <Link to={`/portress/${item.portress_id}`} className="portressCard">
      <img src={item.image} alt="someImg" />
      <div className="portressCard__text">
        <p>{item.username}</p>
        <h3>@{item.username.split(" ")[0]}</h3>
      </div>
    </Link>
  );
};

export default PortressCard;
