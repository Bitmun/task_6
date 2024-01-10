import { React } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Main } from "./routes/main/Main";
import { Edit } from "./routes/edit/Edit";
import { Create } from "./routes/create/Create";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/edit/:cardId" element={<Edit />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </Router>
  );
}

export default App;
