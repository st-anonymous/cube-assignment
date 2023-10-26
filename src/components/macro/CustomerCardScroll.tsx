import { useSelector } from "react-redux";
import { customerDetails } from "../../data/customerDetails";
import { currentCustomerReducerType } from "../../types/customer";
import { CustomerCard } from "./CustomerCard";

export const CustomerCardScroll = () => {
  const currentCustomer = useSelector(
    (state: currentCustomerReducerType) => state.currentCustomer
  );
  return (
    <div style={styles.scrollContainer}>
      {customerDetails.details.map((item) => {
        return (
          <CustomerCard
            key={item.customer_id}
            customer_id={item.customer_id}
            name={item.name}
            details={item.details}
            is_selected={item.customer_id === currentCustomer.customer_id}
          />
        );
      })}
    </div>
  );
};

export const styles: { [key: string]: React.CSSProperties } = {
  scrollContainer: {
    height: "90vh",
    width: "30vw",
    overflowY: "scroll",
    border: "0.5px solid #DCDCDC",
    borderLeft: 0,
    borderRight: 0,
  },
};
