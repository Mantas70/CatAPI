import Header from "./Components/Header";
import Cats from "./Components/Cats";
import About from "./Components/About";
import Footer from "./Components/Footer";
import {Container} from "react-bootstrap";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

const App = () =>{
    return(
        <Container>
            <Router>
            <Header />
            <Container style={{marginTop:"80px"}}>
            <Routes>
                <Route path="/" element={<Cats />}/>
                <Route path="/about" element={<About />}/>
            </Routes>
            </Container>
            </Router>
            <Footer />
        </Container>
    )
}
export default App;
