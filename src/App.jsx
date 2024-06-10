import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import SalesPerformance from "./pages/SalesPerformance.jsx";
import AgentTree from "./pages/AgentTree.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/sales-performance" element={<SalesPerformance />} />
        <Route path="/agent-tree" element={<AgentTree />} />
      </Routes>
    </Router>
  );
}

export default App;
