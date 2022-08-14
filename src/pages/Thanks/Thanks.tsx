import "./Thanks.css";
import { Link } from "react-router-dom";

const Thanks = () => {
  return (
    <div className="thanks">
      <h1>Thank you.!</h1>
      <h2>
        The payment has been sent seccesfully
        <br />
        We will contact you soon..
      </h2>
      <Link to="/">Home page</Link>
    </div>
  );
};

export default Thanks;
