import axios from 'axios';

const Axios = axios.create({

}).interceptors.response.use((res) => {
    console.log(res);
}, (err) => {
    console.log(err)
});

export default Axios