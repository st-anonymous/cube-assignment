import { useSelector } from "react-redux";
import { currentCustomerReducerType } from "../../types/customer";
import { Typography } from "../micro/Typography";
import { CustomerImages } from "./CustomerImages";

export const CustomerDetails = () => {
  const currentCustomer = useSelector(
    (state: currentCustomerReducerType) => state.currentCustomer
  );
  return (
    <div style={{ overflow: "scroll", height: "90vh" }}>
      <div style={styles.detailsContainer}>
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
        <CustomerImages
          customer_id={currentCustomer.customer_id}
          // Give number of rows and Columns to show grid of that dimension...
          numberOfColumns={3}
          numberOfRows={3}
        />
      </div>
    </div>
  );
};

export const styles: { [key: string]: React.CSSProperties } = {
  detailsContainer: {
    backgroundColor: "#F5F5F5",
    border: "0.5px solid #DCDCDC",
    borderLeft: 0,
    borderRight: 0,
    display: "flex",
    flexDirection: "column",
    width: "60vw",
    padding: 36,
    alignItems: "center",
  },
};
