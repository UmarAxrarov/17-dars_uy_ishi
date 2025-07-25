import { BrowserRouter, Routes, Route } from "react-router";
import UserList from "./pages/UserList";
import UserCreate from "./pages/UserCreate";
import UserDetail from "./pages/UserDetail";
import UserEdit from "./pages/UserEdit";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/create" element={<UserCreate />} />
        <Route path="/users/:id" element={<UserDetail />} />
        <Route path="/users/:id/edit" element={<UserEdit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
