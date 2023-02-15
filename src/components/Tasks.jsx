import {
  Button,
  Input,
  ListItem,
  OrderedList,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import axios, { Axios } from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Tasks = () => {
  const [todo, setTodo] = useState({});
  const navigate = useNavigate();
  const [task, setTask] = useState("");
  let token = JSON.parse(localStorage.getItem("token"));

  const { id } = useParams();
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  function handleAdd(t) {
    let tasks = [...todo.tasks, { title: t }];
    axios
      .patch(`https://mockjson-0nv3.onrender.com/signup/${id}`, {
        tasks,
      })
      .then((res) => getTodo());
  }

  function getTodo() {
    axios.get(`https://mockjson-0nv3.onrender.com/signup/${id}`).then((res) => {
      console.log(res.data);
      setTodo(res.data);
    });
  }

  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/login");
  }

  function handleDel(title) {
    // axios.delete(`http://localhost:8080/signup/${id}`).then((res)=>getTodo())
    let tasks = todo.tasks.filter((e) => {
      return e.title !== title;
    });
    axios
      .patch(`https://mockjson-0nv3.onrender.com/signup/${id}`, {
        tasks,
      })
      .then((res) => getTodo());
  }

  useEffect(() => {
    getTodo();
  }, []);
  return (
    <div id="taskDiv">
      <div id="logout">
        <p>Hello</p>
        <Button
          bg={"black"}
          color={"white"}
          _hover={{ bg: "gray.700" }}
          onClick={handleLogout}
        >
          Logout
        </Button>
      </div>

      <Text as="b" fontSize={"3xl"} color="teal">
        {token.fname} {token.lname}
      </Text>

      <p>Good to See you</p>
      <p>Your Total Tasks for Today-{todo.length}</p>

      {/* <strong><p>Tasks for {`${year}${" "}${month<10?`0${month}`:`${month}`}${" "}${date}`}</p></strong> */}
      <strong>
        <p>
          Tasks for{" "}
          {`${date}${"th "}${
            month < 10 ? `0${month}` : `${month}`
          }${", "}${year}`}
        </p>
      </strong>

      {/* map the Tasks */}
      <TableContainer id="taskTable">
        <Table variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              <Th>Task Name</Th>
              <Th>Delete</Th>
            </Tr>
          </Thead>
          <Tbody>
            {todo.tasks?.map((e, i) => (
              <Tr key={i}>
                <Td>
                  {" "}
                  <Text fontSize={"lg"}>{e.title}</Text>{" "}
                </Td>
                <Td>
                  <Button
                    bg={"red.400"}
                    color={"white"}
                    _hover={{ bg: "red.500" }}
                    onClick={() => handleDel(e.title)}
                  >
                    Delete
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      {/* <div id="allTasks">
        <OrderedList>
          {todo.tasks?.map((e, i) => (
            <ListItem key={i}>
              {e.title}
              <Button bg={'red.400'} color={'white'} _hover={{bg: 'red.500'}} onClick={() => handleDel(e.title)}>Delete</Button>
            </ListItem>
          ))}
        </OrderedList>
      </div> */}

      <div id="taskInput">
        <Input
          size="md"
          type="text"
          placeholder="Add Task Here"
          onChange={(e) => setTask(e.target.value)}
        />
        <Button
          bg={"blue.600"}
          color={"white"}
          _hover={{ bg: "blue.700" }}
          onClick={() => handleAdd(task)}
        >
          Add New Task
        </Button>
      </div>
    </div>
  );
};

export default Tasks;
