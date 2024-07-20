import createAxios from "@/utils/axios"
const axios = createAxios("/order")
const OrderService = {
    getAll: () => axios.get("/"),
    findOne: (name_product) => axios.post(`/detail`, {
        name_product
    }),
    showOne: (name_product) => axios.post(`/detail`, {
        name_product
    }),
}
    

export default OrderService