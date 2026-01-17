import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import TableTest from "@/pages/TableTest";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/table-test" element={<TableTest />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
