import createAxios from "@/utils/axios"
const axios = createAxios("/voucher")
const VoucherService = {
    getAll: () => axios.get(""),
    getPages: () => axios.get("/count")
}

export default VoucherService