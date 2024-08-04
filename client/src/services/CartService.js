import createAxios from "@/utils/axios"
const axios = createAxios("/cart")
const CardService = {
    getAll: () => axios.get("/"),
    findOne: (userId) => axios.post(`/findOne`, {
        userId
    }),
    CartExist: (userId) => axios.get(`/exist/${userId}`),
    addToCart: (productId,properties,quantity,priceAtOrdering,userId) => axios.post(`/addProduct/${userId}`, {
        productId,
        properties,
        quantity,
        priceAtOrdering
    }),
    UpdateCart: (items,userId) => axios.post(`/update/${userId}`, {
        items
    }),
    CartExist: (userId) => axios.get(`/exist/${userId}`),
    createCart: (Cart) => axios.post("/create", Cart)
}
    

export default CardService