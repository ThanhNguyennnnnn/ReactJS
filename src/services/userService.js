import axios from "../axios";
// LAY API TU SERVER NODDEJS QUA AXIOS
const handleLoginApi = (userEmail, userPassword) => {
    return axios.post('/api/login', { email: userEmail, password: userPassword });
}
const getAllUsers = (inputId) => {
    // template string
    return axios.get(`/api/get-all-user?id=${inputId}`)
}

const createNewUserService = (data) => {
    // console.log('check data from service: ', data)
    return axios.post('/api/create-new-user',data)
}

const deleteUserService = (userId) => {
    // return axios.delete('/api/delete-user', {id: userId})
    return axios.delete('/api/delete-user', {
        data: {id: userId}
    })
}

const editUserService = (inputData) => {
    return axios.put('/api/edit-user', inputData)
}

const getAllCodeService = (inputType) => {
    return axios.get(`/api/allcode?type=${inputType}`)
}

export { handleLoginApi,  getAllUsers, createNewUserService, 
    deleteUserService, editUserService, getAllCodeService}