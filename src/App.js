import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import About from "./pages/About";
import Services from "./pages/Services";
import { AnimatePresence } from 'framer-motion'
import GlobalStyle from "./GlobalStyle";


function App() {
  return (
    <div>
      <Router>
        <GlobalStyle/>
        <AnimatePresence exitBeforeEnter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/services" element={<Services />}/>
        </Routes>
        </AnimatePresence>
        
      
      </Router>
     
    </div>
  );
}

export default App;
