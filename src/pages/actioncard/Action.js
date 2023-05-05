import {
  Container,
  Button,
  Form,
  FormGroup,
  Label,
  Col,
  Input
} from "reactstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Action() {
  const nav = useNavigate();
  const { id } = useParams();
  console.log(id);
  let initialvalue = {
    name: "",
    username: "",
    email: "",
    street: "",
    city: "",
    zipcode: "",
    phone: "",
    website: "",
    companyname: "",
    image: ""
  };
  const [formdata, setformdata] = useState(initialvalue);
  const handlechange = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    if (id) {
      fetch("https://64288469ebb1476fcc3a0e87.mockapi.io/User/" + id)
        .then((data) => data.json())
        .then((response) => setformdata(response));
    }
  }, [id]);
  const handlesubmit = () => {
    if (id) {
      fetch("https://64288469ebb1476fcc3a0e87.mockapi.io/User/" + id, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formdata)
      })
        .then((data) => data.json())
        .then((response) => setformdata(initialvalue));
    } else {
      fetch("https://64288469ebb1476fcc3a0e87.mockapi.io/User", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formdata)
      })
        .then((data) => data.json())
        .then((response) => setformdata(initialvalue));
    }
  };

  return (
    <Container>
      {id ? <h1>Update</h1> : <h1>Create</h1>}
      <Button color="warning" onClick={() => nav("/")}>
        BACK
      </Button>
      <Form>
        <FormGroup row>
          <Label for="name" sm={2}>
            Fullname
          </Label>
          <Col sm={10}>
            <Input
              id="name"
              name="name"
              placeholder="Enter the name"
              type="text"
              onChange={handlechange}
              value={formdata.name}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="email" sm={2}>
            Email
          </Label>
          <Col sm={10}>
            <Input
              id="email"
              name="email"
              placeholder="Enter the product email"
              type="email"
              onChange={handlechange}
              value={formdata.email}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="username" sm={2}>
            Username
          </Label>
          <Col sm={10}>
            <Input
              id="username"
              name="username"
              placeholder="Enter the username"
              type="text"
              onChange={handlechange}
              value={formdata.username}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="image" sm={2}>
            image
          </Label>
          <Col sm={10}>
            <Input
              id="image"
              name="image"
              placeholder="Enter the  image"
              type="text"
              onChange={handlechange}
              value={formdata.image}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="website" sm={2}>
            website
          </Label>
          <Col sm={10}>
            <Input
              id="website"
              name="website"
              placeholder="Enter the website"
              type="text"
              onChange={handlechange}
              value={formdata.website}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="companyname" sm={2}>
            companyname
          </Label>
          <Col sm={10}>
            <Input
              id="companyname"
              name="companyname"
              placeholder="Enter the companyname"
              type="text"
              onChange={handlechange}
              value={formdata.companyname}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="address" sm={10}>
            Address
          </Label>
        </FormGroup>

        <FormGroup row>
          <Label for="city" sm={2}>
            city
          </Label>
          <Col sm={10}>
            <Input
              id="city"
              name="city"
              placeholder="Enter the city"
              type="text"
              onChange={handlechange}
              value={formdata.city}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="street" sm={2}>
            street
          </Label>
          <Col sm={10}>
            <Input
              id="street"
              name="street"
              placeholder="Enter the street"
              type="text"
              onChange={handlechange}
              value={formdata.street}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="zipcode" sm={2}>
            zipcode
          </Label>
          <Col sm={10}>
            <Input
              id="zipcode"
              name="zipcode"
              placeholder="Enter the zipcode"
              type="text"
              onChange={handlechange}
              value={formdata.zipcode}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="phone" sm={2}>
            phone
          </Label>
          <Col sm={10}>
            <Input
              id="Phone"
              name="phone"
              placeholder="Enter the phone number"
              type="text"
              onChange={handlechange}
              value={formdata.phone}
            />
          </Col>
        </FormGroup>
      </Form>
      <Button color="info" onClick={handlesubmit}>
        submit
      </Button>
    </Container>
  );
}
