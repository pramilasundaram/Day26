import { Table, Container, Button } from "reactstrap";
import Product from "./Product";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function User() {
  const [data, setData] = useState([]);
  const nav = useNavigate();
  useEffect(() => {
    getdelete();
  }, []);

  const getdelete = () => {
    fetch("https://64288469ebb1476fcc3a0e87.mockapi.io/User")
      .then((response) => response.json())
      .then((json) => setData(json));
  };

  const handledelete = (id) => {
    fetch("https://64288469ebb1476fcc3a0e87.mockapi.io/User/" + id, {
      method: "DELETE"
    })
      .then((res) => res.json())
      .then((jsn) => getdelete());
  };

  return (
    <Container>
      <h1>USERS</h1>
      <Button onClick={() => nav("/action")}>CREATE USER</Button>
      <Table bordered>
        <thead>
          <tr>
            <th>S.no</th>
            <th>FullName</th>
            <th>Email</th>
            <th>Username</th>
            <th>Actions</th>
            <th>profile</th>
          </tr>
        </thead>
        <tbody>
          {data.map((value, index) => {
            return (
              <Product
                index={index}
                id={value.id}
                name={value.name}
                username={value.username}
                email={value.email}
                img={value.image}
                city={value.city}
                companyname={value.companyname}
                handledelete={handledelete}
              />
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}
