import axios from 'axios';

const instance=axios.create({
    baseURL:"https://burgerbuilder-e6202.firebaseio.com"
})

export default instance;