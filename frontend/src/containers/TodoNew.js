import React,{useState} from 'react';
import './TodoNew.css';
import axios from 'axios';
import {useHistory,withRouter} from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, Jumbotron } from 'reactstrap';
function TodoNew() {

    // set States for title and description
    const [title,setTitle] = useState('');
    const [description,setDescription]=useState('');

    const history = useHistory();

    //handles the form submission
    const handleSubmit=async (e)=>{
        //prevents event from refreshing the page
        e.preventDefault();
        console.log(title,description);
        
        // sets the acceptance form for details to fill
        const config={
            headers:{
                "Content-Type": "application/json"
            }
        }

        const body=JSON.stringify({title,description});
        await axios.post('http://127.0.0.1:8000/api/',body,config)
        setInterval(() => {
            history.push("/");
            window.location.reload(false);
        }, 200); 
        
    }
    return (
        <div className="container-fluid">
            <Jumbotron>
            <h2 className="text-center display-4">New Todo Form</h2>
            <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label for="exampleEmail">Title</Label>
                <Input onChange={e=>{[e.target.name]=e.target.value;setTitle(e.target.value)}} type="text" name="email" id="exampleEmail" />
            </FormGroup>
            <FormGroup>
                <Label for="examplePassword">Description</Label>
                <Input onChange={e=>{[e.target.name]=e.target.value;setDescription(e.target.value)}} type="text" name="password" id="examplePassword" />
            </FormGroup>
            <Button className="btn" color="success">Add Todo</Button>
            </Form>
            
            </Jumbotron>
            
        </div>
    )
}

export default withRouter(TodoNew)
