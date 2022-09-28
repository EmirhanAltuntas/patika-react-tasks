import { useState } from 'react';
import {
  Card, CardBody, CardHeader, Col, ListGroup, ListGroupItem,
  Row, InputGroup, InputGroupText, Input, Button, Alert
} from 'reactstrap'
import app from "./app.css"

const initTodo = { title: "", done: true }
function App() {

  const [todos, setTodos] = useState([
    { title: "ekmek al", done: true },
    { title: "ders çalış", done: false },
  ])
  const [todo, setTodo] = useState(initTodo)
  const [active, setActive] = useState("");
  const [status, setStatus] = useState("all")


  const handeInputChange = (e) => {

    setTodo({ ...todo, [e.target.name]: e.target.value })
  }

  const handleClick = (event) => {
    setActive(event.target.id);
    setStatus(event.target.name)
  }


  const filtered = todos.filter(item => {
    if (status === "all") {
      return todos
    } else if (status === "active") {
      return item.done === true
    }
    else if (status === "completed") {
      return item.done === false
    }
  })

  function removeTodo(param) {

    var removedArray = todos.filter(item => {

      return param.title !== item.title
    })

    setTodos(removedArray)

  }



  const saveTodo = () => {
    if (todo.title) {
      setTodos([...todos, todo])
      setTodo(initTodo)
    } else {
      alert("please enter any to-do")
    }

  }

  const checkedInput = (e) => {
    console.log(e.target.value);
    setTodos(prev => {
      const newState = prev.map(obj => {
        if (obj.title == e.target.value) {
          return { ...obj, done: false }
        }
        return obj;
      })
      return newState
    })
  }

  return (

    <div className="App">
      <Row>
        <Col className='d-flex justify-content-center'>
          <Card
            style={{
              width: '550px',
              marginTop: "10%"
            }}
          >
            <CardHeader>
              <h3>todos</h3>
            </CardHeader>
            <CardBody>
              <Row>
                <Col md="9">
                  <InputGroup>
                    <InputGroupText className='m-auto w-100 p-0 textLine'>
                      <Input
                        addon
                        aria-label="Checkbox for following text input"
                        type="text"
                        placeholder='what needs to be done?'
                        name='title'
                        value={todo.title}
                        onChange={handeInputChange}

                      />
                    </InputGroupText>
                  </InputGroup>
                </Col>
                <Col md="3">
                  <Button className='w-100' color='warning' onClick={() => saveTodo()}>Add</Button>
                </Col>
              </Row>
              <Row className='mt-2'>
                <Col>
                  {
                    todos.length > 0 ?
                      <ul class="list-group">
                        {
                          filtered.map((item, index) => (
                            <li key={index} className={"list-group-item"}>
                              <Row>
                                <Col md="9">
                                  <InputGroup>
                                    {item.done === true ?
                                      <InputGroupText className='checkTodo'>
                                        <Input
                                          addon
                                          aria-label="Checkbox for following text input"
                                          type="checkbox"
                                          onChange={checkedInput}
                                          value={item.title}
                                          name="done"
                                        />
                                      </InputGroupText> : ""}
                                    <Input value={item.title} className={item.done === false ? "completed" : ""} disabled="false" />
                                  </InputGroup>
                                </Col>
                                <Col md="3">
                                  <Button className='btn' color='danger' onClick={() => removeTodo(item)}>Remove</Button>
                                </Col>
                              </Row>
                            </li>
                          ))
                        }
                      </ul>
                      : <Alert>The list is empty, please enter any to-do</Alert>
                  }
                </Col>
              </Row>
              {
                todos.length > 0 ?
                  <Row className='mt-3'>
                    <Col md="3 text-center">
                      <h5 className='mt-1'> {`${todos.length} item left`}</h5>
                    </Col>
                    <Col md="6">
                      <ul className='listed'>
                        <li ><a
                          key={1}
                          className={active === "1" ? "btn active" : "btn"}
                          id={"1"}
                          name="all"
                          onClick={handleClick}>All</a></li>
                        <li ><a
                          key={2}
                          className={active === "2" ? "btn active" : "btn"}
                          id={"2"}
                          name="active"
                          onClick={handleClick}>Active</a></li>
                        <li ><a
                          key={3}
                          className={active === "3" ? "btn active" : "btn"}
                          id={"3"}
                          name="completed"
                          onClick={handleClick}>Completed</a></li>
                      </ul>
                    </Col>
                    <Col md="3">
                      <a className='btn' onClick={() => setTodos([])}>Clear all</a>
                    </Col>
                  </Row>
                  : ""
              }




            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default App;
