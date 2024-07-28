import createAxios from "@/utils/axios"
const axios = createAxios("/product")
const ProductService = {
    getAll: () => axios.get(""),
<<<<<<< HEAD
    
=======
    showOne: (id) =>axios.get(`/detail/${id}`)
>>>>>>> 5d04ee63a8dff4229572627c2e9fcb741d0b86d4
    // getByPage: () => axios.get(`/`, {
    //     params: {}
    // }),
    // delete: (id) => axios.delete(`/${id}`)
}

export default ProductService