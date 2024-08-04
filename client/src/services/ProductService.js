import createAxios from "@/utils/axios";

const axios = createAxios("/product");

const ProductService = {
    getAll: () => axios.get("/"),
    showOne: (id) => axios.get(`/detail/${id}`),
    deleteItem: (id) => axios.delete(`/delete/${id}`),
    createProduct: (product) => axios.post("/create", product),
<<<<<<< HEAD
    updateProduct: (id, product) => axios.put(`/update/${id}`, product),
    getProductsByUserId: (userId) => axios.get(`/user/${userId}`),


=======
    getProductByShop: (id) => axios.get(`/productByShop/${id}`)
    // getfromShopId: (fromShopId) => axios.get(`/${fromShopId}`),
>>>>>>> fc2e1c5ad11dddf5a591dfb36d780e345834ceba
};

export default ProductService;
