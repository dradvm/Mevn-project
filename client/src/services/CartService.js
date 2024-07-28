import createAxios from "@/utils/axios"
const axios = createAxios("/cart")
const CardService = {
    getAll: () => axios.get("/"),
    findOne: (userId) => axios.post(`/checkCart`, {
        userId
    }),
    // showOne: (name_product) => axios.post(`/detail`, {
    //     name_product
    // }),
    addToCart: (productId,properties,quantity) => axios.post(`/addProduct`, {
        productId,
        properties,
        quantity
    }),
}
    

export default CardService