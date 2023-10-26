import { Typography } from "./components/micro/Typography";
import { CustomerCardScroll } from "./components/macro/CustomerCardScroll";
import { CustomerDetails } from "./components/macro/CustomerDetails";

export const App = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Typography
        text={"See all the customer details here"}
        styleProps={{ margin: 16 }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <CustomerCardScroll />
        <CustomerDetails />
      </div>
    </div>
  );
};

export default App;
