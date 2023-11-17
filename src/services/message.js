import axios from 'axios'

const baseUrl = 'http://localhost:3001/api/message'

const postMessage = async (message) => {
    const response = await axios.post(baseUrl, message)
    return response.data
}



export default {
    postMessage
}