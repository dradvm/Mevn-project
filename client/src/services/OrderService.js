import createAxios from "@/utils/axios"
const axios = createAxios("/order")
const OrderService = {
    getAll: () => axios.get("/"),
    findOfUser: (userId) => axios.post(`/findOrders`, {
        userId
    }),
    
}
    

export default OrderService