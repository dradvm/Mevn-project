import createAxios from "@/utils/axios"
const axios = createAxios("/voucher")
const VoucherService = {
    getAll: () => axios.get(""),
    getByPage: (page, search) => axios.get(`/page/${page}/${search}`),
    getPages: (search) => axios.get(`/pages/${search}`)
}

export default VoucherService
