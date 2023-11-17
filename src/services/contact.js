import axios from 'axios'

const baseUrl = 'http://localhost:3001/api/data/contact'

const getAll = () => {
    console.log('get all')
    return axios.get(baseUrl)
}



export default {
    getAll,
    
}