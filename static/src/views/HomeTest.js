import Axios from '../utils/axiosInstance';
import {useState, useEffect} from 'react';

const HomeTest = () => {
    
    const [books, setBooks] = useState([]);
    
    useEffect(() => {
        Axios().get('/api/books').then((res) => {
          setBooks(res.data);
        }).catch(err => console.log(err))
      }, [])

    return ( 
        <div className="container-fluid">
              <div className="row">
                <div className="col">
                  Ave!
                </div>
                { books &&
                <div className="col">
                {books.map(item => <div key={item.id}>{item.title} - {item.content} by {item.author} <ul>{item.Chapters.map(cha => <li key={cha.id}>{cha.contents}</li>)} </ul></div> )}
                </div>
                }
              </div>
            </div>
    )
};

export default HomeTest