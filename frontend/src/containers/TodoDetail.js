import './TodoDetail.css';
import React,{useEffect,useState} from 'react';
import {useParams,Redirect,useHistory,withRouter,Link} from 'react-router-dom';
import axios from 'axios';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button,Container,Row,Col
  } from 'reactstrap';
function TodoDetail() {
    const history = useHistory();
    const [detailTodo,setDetailTodo] = useState([])
    const { id } = useParams();
    useEffect( async () => {
        await axios.get(`http://127.0.0.1:8000/api/${id}/`)
        .then(res =>{
            setDetailTodo(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }, []);

    const handleDelete= async (e)=>{
        e.preventDefault();
        await axios.delete(`http://127.0.0.1:8000/api/${id}/`);
        setInterval(() => {
            history.push("/");
            window.location.reload(false);
        }, 200);
    }
    console.log(detailTodo)
    return (
        <div>
            <h1 className="display-3 text-center er" color="white">Todo Detail</h1>
         <div className="detail text-center">
        <Card id="cardR">
            <CardBody>
                <h1 className="display-3">{detailTodo.title}</h1>
                <CardText tag="h3">{detailTodo.description}</CardText>
                <Link to={`/${id}/edit`}><Button color="info mr-5" size="lg">Edit</Button></Link>
                <Button onClick={handleDelete} color="danger ml-5" size="lg">Delete</Button>
            </CardBody>
      </Card>
        </div>   
        </div>
        
    )
}

export default withRouter(TodoDetail)
