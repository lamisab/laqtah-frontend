import { useState } from "react";
import ContactModal from "./components/ContactModal/ContactModal";
import Navbar from "./components/Navbar/Navbar";

interface Props {
  children: any;
}

const Layout = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Navbar setIsOpen={setIsOpen} />
      {children}
      {isOpen && <ContactModal setIsOpen={setIsOpen} />}
    </>
  );
};

export default Layout;
