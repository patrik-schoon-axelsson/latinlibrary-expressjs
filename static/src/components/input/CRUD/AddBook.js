import Axios from '../../../utils/axiosInstance';
import AuthContext from '../../../context/AuthContext';
import Button from '../../UI/Button'
import { useState, useContext } from "react";

const AddBook = () => {
    const authCtx = useContext(AuthContext);
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        author: '',
        yearOfPublicationCE: ''
    });

    const inputHandler = e => {
        const { name, value } = e.target;

        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    };
    
    const addNewBook = (e) => {
        e.preventDefault();
        const token = authCtx.accessToken;

        Axios(token).post('/api/books', {
            title: formData.title,
            content: formData.content,
            author: formData.author,
            yearOfPublicationCE: formData.yearOfPublicationCE
        })
    };

    return (
        <form onSubmit={(e) => addNewBook(e, formData)}>
        <div class="modal-body">
        <label htmlFor="title" className="form-label">Title</label>
            <input type="text" name="title" onChange={inputHandler} value={formData.title} className="form-control" />
            <label htmlFor="content" className="form-label">Content</label>
            <input name="content" onChange={inputHandler} value={formData.content} className="form-control" />
            <label htmlFor="author" className="form-label">Author</label>
            <input type="text" onChange={inputHandler} value={formData.author} name="author" className="form-control" />
            <label htmlFor="yearOfPublicationCE" className="form-label">Year of Publication (BCE/CE): </label>
            <input type="text" onChange={inputHandler} value={formData.yearOfPublicationCE} name="yearOfPublicationCE" className="form-control" />
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <Button type="submit" btnLabel="Add New Book" btnCss="btn-primary" />
        </div>
        </form>


        
    );
};

export default AddBook