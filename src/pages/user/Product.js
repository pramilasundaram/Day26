import { Button } from "reactstrap";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
export default function Product({
  index,
  name,
  email,
  username,
  img,
  id,
  city,
  companyname,
  handledelete
}) {
  const nav = useNavigate();
  return (
    <tr>
      <th scope="row">{index + 1}</th>
      <td>{name}</td>
      <td>{email}</td>
      <td>{username}</td>
      <td>
        <Button color="success" onClick={() => nav("/action/" + id)}>
          <AiFillEdit />
        </Button>
        <Button
          color="danger"
          onClick={() => {
            handledelete(id);
          }}
        >
          <AiFillDelete />
        </Button>
      </td>
      <td>
        <Button color="info" onClick={() => nav("/profile/" + id)}>
          View
        </Button>
      </td>
    </tr>
  );
}
