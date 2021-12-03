import {Navbar} from "react-bootstrap";
import {Container} from "react-bootstrap";
import Navigation from "./Navigation";
const Header = ()=>{
    return(
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand>Cats app</Navbar.Brand>
                <Navigation />
            </Container>
        </Navbar>
    )
}
export default Header