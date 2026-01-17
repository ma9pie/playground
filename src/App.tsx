import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "@/pages/Home";
import TableTest from "@/pages/TableTest";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/table-test" element={<TableTest />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
