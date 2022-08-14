import { useRef } from "react";
import "./ContactModal.css";

interface Props {
  setIsOpen: (value: boolean) => void;
}

const ContactModal = ({ setIsOpen }: Props) => {
  const bgRef = useRef(null);

  window.addEventListener("click", (e) => {
    if (e.target === bgRef.current) {
      setIsOpen(false);
    }
  });

  return (
    <div ref={bgRef} className="contactModal">
      <div className="contactModal__box">
        <h1>What's on your mind?</h1>
        <h2>Contact with us</h2>
        <form className="contactModal__form">
          <input required type="email" placeholder="Your Email" />
          <textarea required cols={30} rows={10} placeholder="Your Message.." />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
