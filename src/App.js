import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  LoginPage,
  SignUpPage,
  FilterPage,
  Friends,
  HomePage,
  Map,
  NewPost,
  Notifications,
  ListOfFriends,
  UserInfo,
  Layout,
} from "./components/index";

function App() {
  return (
    <div>
        <BrowserRouter>
      <Layout>
          <Routes>
            <Route path="/" exact element={<LoginPage />}></Route>
            <Route path="/SignUpPage" exact element={<SignUpPage />}></Route>

            <Route path="/HomePage" exact element={<HomePage />}></Route>
            <Route
              path="/HomePage/FilterPage"
              exact
              element={<FilterPage />}
            ></Route>
            <Route path="/HomePage/Friends" exact element={<Friends />}></Route>
            <Route path="/HomePage/Map" exact element={<Map />}></Route>
            <Route path="/HomePage/NewPost" exact element={<NewPost />}></Route>
            <Route
              path="/HomePage/Notifications"
              exact
              element={<Notifications />}
            ></Route>

            <Route
              path="/Profile/ListOfFriends"
              exact
              element={<ListOfFriends />}
            ></Route>
            <Route path="/Profile" exact element={<UserInfo />}></Route>
          </Routes>
      </Layout>
        </BrowserRouter>
    </div>
  );
}

export default App;
