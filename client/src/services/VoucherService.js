import createAxios from "@/utils/axios"
const axios = createAxios("/voucher")
const VoucherService = {
    getAll: () => axios.get(""),
}

export default VoucherService