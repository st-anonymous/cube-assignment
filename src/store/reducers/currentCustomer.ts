import { AnyAction } from "@reduxjs/toolkit";
import { customerDetails } from "../../data/customerDetails";

const customerData = customerDetails.details
const initialState = customerData[0];

const currenCustomerReducer = (state = initialState, action: AnyAction) => {
  switch(action.type) {
    case 'SET_CURRENT_CUSTOMER':
      return customerData[parseInt(action.payload.customer_id)]
    default:
      return state

  }
}
export default currenCustomerReducer