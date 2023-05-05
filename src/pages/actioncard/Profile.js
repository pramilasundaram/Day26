import { Container, Card, Table, Row, Col, Button } from "reactstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
export default function Profile() {
  const nav = useNavigate();
  const { id } = useParams();
  const [formdata, setformdata] = useState({});
  useEffect(() => {
    if (id) {
      fetch("https://64288469ebb1476fcc3a0e87.mockapi.io/User/" + id)
        .then((data) => data.json())
        .then((response) => setformdata(response));
    }
  }, [id]);
  return (
    <Container className="style">
      <h4>Profile of {formdata.name}</h4>
      <Row xs="2">
        <Col className="bg-light border">
          <Card
            style={{
              width: "35rem"
            }}
          >
            <img alt="Card" src="https://picsum.photos/300/200" />
          </Card>
        </Col>
        <Col className="bg-light border">
          <Button color="warning" onClick={() => nav("/")}>
            BACK
          </Button>
          <Table>
            <tr>
              <th>Fullname</th>
              <td>{formdata.name}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{formdata.email}</td>
            </tr>
            <tr>
              <th>Username</th>
              <td>{formdata.username}</td>
            </tr>
            <tr>
              <th>address</th>
            </tr>

            <tr>
              <th>street</th> <td>{formdata.street}</td>
            </tr>
            <tr>
              <th>city</th>
              <td>{formdata.city}</td>
            </tr>
            <tr>
              <th>zipcode</th> <td>{formdata.zipcode}</td>
            </tr>

            <tr>
              <th>phonenumber</th>
              <td>{formdata.phone}</td>
            </tr>
            <tr>
              <th>companyname</th>
              <td>{formdata.companyname}</td>
            </tr>
            <tr>
              <th>website</th>
              <td>{formdata.website}</td>
            </tr>
          </Table>
          <Button color="success" onClick={() => nav("/action/" + id)}>
            EDIT
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
