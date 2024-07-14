import createAxios from "@/utils/axios"
const axios = createAxios("/voucher")
const VoucherService = {
    getAll: () => axios.get(""),
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
    createVoucher: (code, startDate, expiredDate, state, type,
        condition, discount, maxDiscount, conditionDiscount, quantity,
        usedQuantity, limitEachUser, applicableProducts) => axios.post("/create", {
            code,
            startDate,
            expiredDate,
            state,
            type,
            condition,
            discount,
            maxDiscount,
            conditionDiscount,
            quantity,
            usedQuantity,
            limitEachUser,
            applicableProducts
        })
}

export default VoucherService
