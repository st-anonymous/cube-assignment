export const setCurrentCustomer = (customer_id: string) => ({
  type: 'SET_CURRENT_CUSTOMER',
  payload: {
    customer_id: customer_id
  }
})