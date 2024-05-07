import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Posts from './views/posts/posts.page';
import Dashboard from "./views/dashboard/dashboard.page";
import LoginPage from "./views/login/login.page";
import RegisterPage from "./views/register/register.page";
import IsAuthenticated from './component/forms/misc/is-authenticated';
import DashboardLayout from "./component/layout/dashboard.login";
import AuthLayout from "./component/layout/auth.layout";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
    <IsAuthenticated>
      <DashboardLayout>
      <Dashboard/>
      </DashboardLayout>
    </IsAuthenticated>
    )
  },
  {
    path: "/posts",
    element: <DashboardLayout>
      <Posts/>
    </DashboardLayout> 
  },
  {
    path: "/login",
    element: <AuthLayout>
      <LoginPage/> 
    </AuthLayout>
  },
  {
    path: "/register",
    element: <AuthLayout>
      <RegisterPage/> 
    </AuthLayout>
  },
]);
function App() {
  return (
    <div>   
    <RouterProvider router={router} />
    </div>
  )
}

export default App

