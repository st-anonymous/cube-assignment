import React from "react";
import { setCurrentCustomer } from "../../store/actions/currentCustomer";
import { Typography } from "../micro/Typography";
import { useDispatch } from "react-redux";

export type CustomerCardProps = {
  customer_id: string;
  name: string;
  details: string;
  is_selected: boolean;
};

const CustomerCard = (props: CustomerCardProps) => {
  const { customer_id, name, details, is_selected } = props;

  const dispatch = useDispatch();

  const onCustomerCardClick = () => {
    dispatch(setCurrentCustomer(customer_id));
  };

  const detailsShown =
    details.length > 175 ? details.substring(0, 175) + "..." : details;

  return (
    <div
      style={{
        ...styles.cardContainer,
        backgroundColor: is_selected ? "#DCDCDC" : "white",
      }}
      onClick={onCustomerCardClick}
    >
      <Typography
        text={name}
        size="small"
        textAlign="left"
        styleProps={{ paddingBottom: 16, margin: 0 }}
      />
      <Typography text={detailsShown} size="extra-small" textAlign="left" />
    </div>
  );
};

export const styles: { [key: string]: React.CSSProperties } = {
  cardContainer: {
    display: "flex",
    flexDirection: "column",
    padding: 16,
    border: "0.5px solid #DCDCDC",
    borderLeft: 0,
    borderRight: 0,
    cursor: "pointer",
  },
};

export default React.memo(CustomerCard);
