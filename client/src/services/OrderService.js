import createAxios from "@/utils/axios"
const axios = createAxios("/order")
const OrderService = {
    getAll: () => axios.get("/"),
    findOfUser: (userId) => axios.post(`/find`, {
        userId
    }),
    // showOne: (name_product) => axios.post(`/detail`, {
    //     name_product
    // }),
}
    

export default OrderService