import createAxios from "@/utils/axios"
const axios = createAxios("/user")
const UsersService = {
    register: (name, address, birthday, email, gender, password, phone) => axios.post(`/register`, {
        name,
        address,
        birthday,
        email,
        gender,
        password,
        phone
    }),

    login: (email, password) => axios.post(`/login`, {
        email,
        password
    }),
    checkAccount: (email) => axios.post(`/checkAccount`, {
        email
    }),
    getAll: ({}) => axios.get(`/`),

}
export default UsersService