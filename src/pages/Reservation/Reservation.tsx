import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Reservation.css";

const Reservation = () => {
  const [isCash, setIsCash] = useState<boolean>(false);
  const navigate = useNavigate();

  const onSubmit = (e: any) => {
    e.preventDefault();
    navigate("/payment/success");
  };

  return (
    <div className="reservation">
      <h1>reservation</h1>
      <div className="reservation__container">
        <h2>payment details</h2>
        <form onSubmit={onSubmit} className="reservation__from">
          <div className="reservation__btns">
            <button type="button" onClick={() => setIsCash(true)}>
              Cash
            </button>
            <button type="button" onClick={() => setIsCash(false)}>
              Card
            </button>
          </div>
          <input required type="text" placeholder="Full Name" />
          <input required type="text" placeholder="Your Address" />
          <input required type="text" placeholder="Phone Number" />
          {!isCash && (
            <>
              <input required type="text" placeholder="Card Number" />
              <div className="reservation__card">
                <input required type="text" placeholder="CVV" />
                <input required type="text" placeholder="Valid date" />
              </div>
            </>
          )}
          <button type="submit" className="reservation__btn">
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
};

export default Reservation;
