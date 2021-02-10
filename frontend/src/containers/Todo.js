import React,{useState,useEffect} from 'react';
import './Todo.css';
import axios from 'axios';
import { Card,
    Button, 
    CardTitle, 
    CardText,
    CardBody, 
    Jumbotron,
Spinner } from 'reactstrap';
import {useHistory,withRouter,Link} from 'react-router-dom';
import {AiOutlinePlus} from 'react-icons/ai';
function Todo() {
    const [todos,setTodos] = useState([]);
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/')
        .then(res =>{
            setTodos(res.data)
        })
        .catch(e =>{
            console.log(e);
            alert(e);
        })
        
    },[])
    console.log(todos);


    const history = useHistory();
    return (
        <div className="todo">
            
            <Jumbotron>
              <h1 className="text-center display-3">Todo</h1>

                {
                    todos.length ? (<div>
                                            <div className="row">
                                                <AiOutlinePlus onClick={()=>{history.push("/new/")}} className="Plus text-right" />
                                            </div>
                                            {todos.map((todo)=>{
                                                return(
                                                 <div id="todo" key={todo.id}>
                                                <Card color="light" light >
                                                    <CardBody>
                                                        <CardTitle tag="h3">{todo.title}</CardTitle>
                                                        <CardText>{todo.description}</CardText>
                                                        <Link to={`/${todo.id}`} ><Button color="info" size='lg' id="todobtn">Read More</Button></Link>
                                                    </CardBody>
                                                    
                                                </Card>
                                                </div>  
                                                )
                                                    
                                                
                                                })}
                                            
                                        </div>)
                    : (
                    <div className=" ifHeader text-center">
                        <h1 className="display-4">No Todos Found</h1>
                        <p>Add More Todo From Below</p>
                        <Button onClick={()=>{history.push('/new')}}>New Todo</Button>    
                    </div>
                    )
                }
              
              
            </Jumbotron>
            
            
        </div>
    )
}

export default withRouter(Todo)
