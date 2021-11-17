import AuthContext from '../../context/AuthContext';
import { useState, useContext } from "react";
import Axios from '../../utils/axiosInstance';
import Button from '../UI/Button';

const LoginForm = () => {

    const authCtx = useContext(AuthContext);
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        
        Axios().post('/auth/login', {
            email: formData.email,
            password: formData.password
        }).then((res) =>{
            const data = res.data

            authCtx.setUser(data.user)
            authCtx.setToken(data.token)

        }).catch(err => console.log(err))
    }

    const inputHandler = e => {
        const { name, value } = e.target;

        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    };
    
    return (
        <form className="d-flex" onSubmit={(e) => handleSubmit(e, formData)}>
            <input type="email" name="email" value={formData.email} onChange={inputHandler} className="form-control mr-1" placeholder="Email..." />
            <input type="password" name="password" value={formData.password} onChange={inputHandler} className="form-control mr-1" placeholder="Password..." />
            <Button onClick={handleSubmit} type="submit" btnLabel="Log In" btnCss="btn-primary" />
        </form>
    )
};

export default LoginForm