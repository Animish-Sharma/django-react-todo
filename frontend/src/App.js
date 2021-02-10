import './App.css';
import 'semantic-ui-css/semantic.min.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Todo from './containers/Todo';
import TodoNew from './containers/TodoNew';
import TodoDetail from './containers/TodoDetail';
import TodoEdit from './containers/TodoEdit';
import { Card,
  Button, 
  CardTitle, 
  CardText,
  CardBody, 
  Jumbotron,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
Spinner } from 'reactstrap';
import {useState} from 'react';
function App() {
  const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="App">
      <Navbar color="dark" dark expand="md">
                <NavbarBrand href="/">Todo Django-React</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                    <NavLink href="/new/">New Todo</NavLink>
                    </NavItem>
                </Nav>
                </Collapse>
            </Navbar>
      <Router>
        <Switch>
          <Route exact path="/" component={Todo} />
          <Route exact path="/new" component={TodoNew} />
          <Route exact path="/:id" component={TodoDetail}/>
          <Route exact path="/:id/edit" component={TodoEdit} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
