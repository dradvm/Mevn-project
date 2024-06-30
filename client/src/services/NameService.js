import createAxios from "@/utils/axios"
const axios = createAxios("/name")
const NameService = {
    getAll: () => axios.get(""),
    delete: (id) => axios.delete(`/${id}`)
}

export default NameService