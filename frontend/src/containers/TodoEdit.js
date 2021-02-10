import "./TodoEdit.css";
import {useHistory,withRouter,useParams} from 'react-router-dom';
import axios from 'axios';
import React,{useState,useEffect} from 'react';
import {Form,FormGroup,Label,Input,Button} from 'reactstrap'

function TodoEdit() {
    const { id } = useParams();
    const [todos,setTodos] = useState([]);
    const [title,setTitle] = useState(``);
    const [description,setDescription] = useState('');
    const history = useHistory();
    const handleChange=(e)=>{
        [e.target.name] = e.target.value;
    }
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/${id}/`)
        .then(res => {
            setTodos(res.data);
            
        })
        .catch(error =>{
            console.log(error);
            alert(error);
        });
    }, []);
    console.log(todos)
    
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(title,description);

        const config={
            headers:{
                "Content-Type": "application/json"
            }
        }

        const body = JSON.stringify({title,description})

        axios.put(`http://127.0.0.1:8000/api/${id}/`,body,config);

        setInterval(() => {
            history.push(`/${id}`);
            window.location.reload(false);
        }, 200);

    }
    return (
        <div>
            <h1 className="display-3 text-center" id="heading">Edit Todo</h1>
            <Form onSubmit={handleSubmit} className="editForm">
            <FormGroup>
                <Label tag="h4" className="labelP" for="exampleEmail">Title</Label>
                <Input onChange={(e) => setTitle(e.target.value)} value={title}  type="text" name="email" id="exampleEmail" placeholder="New Title" />
            </FormGroup>
            <FormGroup>
                <Label tag="h4" className="labelP" for="examplePassword">Description</Label>
                <Input onChange={(e) => setDescription(e.target.value)} type="textarea"  name="password" id="examplePassword" placeholder="New Description" rows={"7"}  />
            </FormGroup>
            <Button size="lg" id="btn" color="success">Edit Todo</Button>
            </Form>

        </div>
    )
}

export default withRouter(TodoEdit)
