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
    getAll: ({}) => axios.get(`/`),
    getOne: ({}) => axios.get(`/:id`)

}
export default UsersService