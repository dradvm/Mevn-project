import createAxios from "@/utils/axios"
const axios = createAxios("/voucher")
const VoucherService = {
    getAll: () => axios.get(""),
    getVoucher: (code) => axios.get(`/find/${code}`),
    showOne: (id) => axios.get(`/findById/${id}`),
    getByPage: (page, search, check, sort, shopId) => axios.get(`/`, {
        params: {
            page,
            search,
            check,
            sort,
            shopId
        }
    }),
    getPages: (search, check, shopId) => axios.get(`/pages`, {
        params: {
            search,
            check,
            shopId
        }
    }),
    getTypes: () => axios.get("/type"),
    deleteItem: (id) => axios.delete(`/${id}`),
    getRandomCode: () => axios.get("/randomcode"),
    createVoucher: (data) => axios.post("/create", data),
    updateVoucher: (code, data) => axios.post(`/update/${code}`, data),
    getVoucherListByProduct: (id, idUser) => axios.get(`/voucherListByProduct/${id}`, {
        params: {
            idUser
        }
    }),
    saveVoucher: (id, idUser) => axios.post(`/saveVoucher/${id}`, {
        idUser
    })
}

export default VoucherService
