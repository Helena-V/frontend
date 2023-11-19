import axios from 'axios'

const baseUrl = '/api/data/contact'

const getAll = () => {
    console.log('get all')
    return axios.get(baseUrl)
}



export default {
    getAll,
    
}