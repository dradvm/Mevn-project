import createAxios from "@/utils/axios";

const axios = createAxios("/product");

const ProductService = {
    getAll: () => axios.get("/"),
    showOne: (id) => axios.get(`/detail/${id}`),
    deleteItem: (id) => axios.delete(`/delete/${id}`),
    createProduct: (product) => axios.post("/create", product),
    getProductByShop: (id) => axios.get(`/productByShop/${id}`),
    getfromShopId: (fromShopId) => axios.get(`/${fromShopId}`),
};

export default ProductService;
