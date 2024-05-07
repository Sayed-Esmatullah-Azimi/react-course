
import { Link } from "react-router-dom";
import useAuthStore from "../../store/auth.store";
import { Button } from "react-bootstrap";
function Dashboard() {
  const {  token ,logout} = useAuthStore();
//   console.log({isLoggedIn,user,token});
  return (
    <div>
      {token ? (
          <>
          <h1>Dashboard</h1>
          <Link to="/posts">post</Link>
          <br />
          <Button onClick={logout}>logout</Button>
          </>
      )
      : (
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos tenetur temporibus laboriosam quos, molestiae nam doloribus perspiciatis! Repudiandae rem earum voluptatem corrupti repellat temporibus, minima incidunt, nobis pariatur perferendis quas!
          </div>
      )
    }
    </div>
  )
}

export default Dashboard
