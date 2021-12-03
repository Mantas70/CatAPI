import {Card} from "react-bootstrap";
import {Row} from "react-bootstrap";
const Cat = (props) =>{
    return(
        <Card>
            <Card.Header as="h5">{props.name}</Card.Header>
            <Card.Body>
                <Card.Title>Kilme: {props.origin}</Card.Title>
                <Card.Text>
                    <img src={(props.image)?props.image.url:null} style={{width:200,height:200}}/>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
export default Cat;