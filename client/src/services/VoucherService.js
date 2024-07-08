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
    })
}

export default VoucherService
