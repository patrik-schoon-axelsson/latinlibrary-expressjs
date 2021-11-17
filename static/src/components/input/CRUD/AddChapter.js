import Axios from '../../../utils/axiosInstance';
import AuthContext from '../../../context/AuthContext';
import Button from '../../UI/Button'
import { useState, useContext } from "react";

const AddChapter = () => {

    const authCtx = useContext(AuthContext);
    const [formData, setFormData] = useState({

    });

    const inputHandler = e => {
        const { name, value } = e.target;

        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    };
    
    const addNewChapter = (e) => {
        e.preventDefault();
        const token = authCtx.accessToken;

        Axios(token).post('/api/chapters', {

        })
    };

    return (
        <form onSubmit={(e) => addNewChapter(e, formData)}>
            <label className="form-label">Title</label>
            <input type="text" name="title" onChange={inputHandler} value={formData.title} className="form-control" />
            <Button type="submit" btnLabel="Add New Book" btnCss="btn-primary" />
        </form>
    );
};

export default AddChapter