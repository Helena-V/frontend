import axios from 'axios'

const baseUrl = '/api/message'

const postMessage = async (message) => {
    const response = await axios.post(baseUrl, message)
    return response.data
}



export default {
    postMessage
}