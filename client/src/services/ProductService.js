import createAxios from "@/utils/axios"
const axios = createAxios("/product")
const ProductService = {
    getAll: () => axios.get("/"),
    findOne: (name_product) => axios.post(`/detail`, {
        name_product
    }),
    showOne: (name_product) => axios.post(`/detail`, {
        name_product
    }),
}
    

export default ProductService