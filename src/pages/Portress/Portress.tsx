import { useEffect } from "react";
import PortressCard from "../../components/PortressCard/PortressCard";
import "./Portress.css";
import { getPortress, reset } from "../../app/redux/portress/portress";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

const Portress = () => {
  const { isSuccess, portress } = useAppSelector((state) => state.portress);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isSuccess) {
      dispatch(reset());
    }
  }, [dispatch, isSuccess]);

  useEffect(() => {
    dispatch(getPortress());
  }, [dispatch]);

  return (
    <div className="portress">
      <h1>View all the portress here</h1>
      <div className="portress__container">
        {portress.map((item) => (
          <PortressCard item={item} key={item.portress_id} />
        ))}
      </div>
    </div>
  );
};

export default Portress;
