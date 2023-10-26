import { useSelector } from "react-redux";
import { currentCustomerReducerType } from "../../types/customer";
import { Typography } from "../micro/Typography";
import { CustomerImages } from "./CustomerImages";

export const CustomerDetails = () => {
  const currentCustomer = useSelector(
    (state: currentCustomerReducerType) => state.currentCustomer
  );
  return (
    <div style={{ overflow: "hidden", height: "90vh" }}>
      <div
        style={{
          height: "90vh",
          overflowY: "scroll",
          backgroundColor: "#F5F5F5",
          border: "0.5px solid #DCDCDC",
          borderLeft: 0,
          borderRight: 0,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "60vw",
            padding: 36,
            alignItems: "center",
          }}
        >
          <Typography
            text={currentCustomer.name + " details here"}
            size="small"
            textAlign="left"
            styleProps={{ paddingBottom: 16 }}
          />
          <Typography
            text={currentCustomer.details}
            size="extra-small"
            textAlign="left"
            styleProps={{ width: "80%" }}
          />
          <CustomerImages customer_id={currentCustomer.customer_id} />
        </div>
      </div>
    </div>
  );
};
