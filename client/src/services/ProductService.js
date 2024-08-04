import createAxios from "@/utils/axios";

const axios = createAxios("/product");

const ProductService = {
    getAll: () => axios.get("/"),
    showOne: (id) => axios.get(`/detail/${id}`),
    deleteItem: (id) => axios.delete(`/delete/${id}`),
    createProduct: (product) => axios.post("/create", product),
    updateProduct: (id, product) => axios.put(`/update/${id}`, product),
    getProductsByUserId: (userId) => axios.get(`/user/${userId}`),


};

export default ProductService;
