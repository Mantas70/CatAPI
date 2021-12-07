import {Card} from "react-bootstrap";
const DEFAULT_IMAGE =
    "https://pro2-bar-s3-cdn-cf6.myportfolio.com/c728a553-9706-473c-adca-fa2ea3652db5/729b72ec-104f-4499-9986-0dbaf11ce437_rw_1200.jpg?h=6aea14fe1fe3fd0853669fd14184b6f7";
const Cat = (props) =>{
    return(
        <Card style={{width:'20rem',padding:"0", margin:'20px'}}>
            <Card.Header as="h5">{props.name}</Card.Header>
            <Card.Body>
                <Card.Title>Origin: {props.origin}</Card.Title>
                <Card.Text>
                    <img src={(props.image)?props.image.url:DEFAULT_IMAGE} style={{width:200,height:200, borderRadius:"10px"}}/>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
export default Cat;