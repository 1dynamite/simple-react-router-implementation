import "./App.css";
import { RouterProvider } from "./my-react-router/my-react-router";
import Home from "./components/home";
import MainPage from "./components/mainpage";
import Profile from "./components/profile";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/main",
    element: <MainPage />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
];

function App() {
  return (
    <div className="app">
      <h1>React Router</h1>
      <RouterProvider routes={routes} />
    </div>
  );
}

export default App;
