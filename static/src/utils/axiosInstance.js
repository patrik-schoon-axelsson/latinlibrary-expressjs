import axios from 'axios';

/* 
    Axios instance with associated interceptors.
    Usage pattern for authenticated API calls:
    Axios(token).then(etc => console.log(etc))
*/

const Axios = (token) => {
    const AxiosInstance = axios.create()
    
    AxiosInstance.interceptors.request.use(config => {
            
        config.headers['Authorization'] = `Bearer ${token}`;
        return config
    })

    AxiosInstance.interceptors.response.use((res) => {
        console.log(res);
        return res
    }, (err) => {
        console.log(err)
        return err.message
    });

    return AxiosInstance
}

export default Axios