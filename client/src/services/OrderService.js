import createAxios from "@/utils/axios"
const axios = createAxios("/order")
const OrderService = {
    getAll: () => axios.get("/"),
    findOfUser: (userId) => axios.post(`/findOrders`, {
        userId
    }),
    addToOrder: (cart) => axios.post(`/addOrder`, {
        cart
    }),
    deleteOrder: (id) => axios.get(`/delete/${id}`),
    
}
    

export default OrderService