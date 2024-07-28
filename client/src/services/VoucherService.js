import createAxios from "@/utils/axios"
const axios = createAxios("/voucher")
const VoucherService = {
    getAll: () => axios.get(""),
    getVoucher: (code) => axios.get(`/find/${code}`),
    getByPage: (page, search, check, sort) => axios.get(`/`, {
        params: {
            page,
            search,
            check,
            sort
        }
    }),
    getPages: (search, check) => axios.get(`/pages`, {
        params: {
            search,
            check
        }
    }),
    getTypes: () => axios.get("/type"),
    deleteItem: (id) => axios.delete(`/${id}`),
    getRandomCode: () => axios.get("/randomcode"),
    createVoucher: (data) => axios.post("/create", data),
    updateVoucher: (code, data) => axios.post(`/update/${code}`, data)
}

export default VoucherService
