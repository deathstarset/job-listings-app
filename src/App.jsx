import { Header } from "./components/Header";
import { SearchPlace } from "./components/SearchPlace";
import { Route, Routes } from "react-router-dom";
import { Job } from "./components/Job";
function App() {
  return (
    <div className="App bg-very-light-blue">
      <Header />
      <Routes>
        <Route path="/" element={<SearchPlace />} />
        <Route path="/jobs/:id" element={<Job />} />
      </Routes>
    </div>
  );
}

export default App;
