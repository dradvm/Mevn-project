import createAxios from "@/utils/axios"
const axios = createAxios("/product")
const ProductService = {
    getAll: () => axios.get(""),
    // getByPage: () => axios.get(`/`, {
    //     params: {}
    // }),
    // delete: (id) => axios.delete(`/${id}`)
}

export default ProductService