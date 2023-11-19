import axios from 'axios'

const baseUrl = '/api/data/content'

const getAll = () => {
    console.log('get all')
    return axios.get(baseUrl)
}

const getEnglishQuiz = () => {
    console.log('get English Quiz')
    return axios.get(`${baseUrl}/englishquiz`)
}

const getFinnishQuiz = () => {
    console.log('get Finnish Quiz')
    return axios.get(`${baseUrl}/finnishquiz`)
}

const getFinnishBoxes = () => {
    console.log('get Finnish Boxes')
    return axios.get(`${baseUrl}/finnishboxes`)
}

const getEnglishBoxes = () => {
    console.log('english boxes')
    return axios.get(`${baseUrl}/englishboxes`)
}

export default {
    getAll,
    getEnglishQuiz,
    getFinnishQuiz,
    getFinnishBoxes,
    getEnglishBoxes
}