import React,{useState, useEffect} from "react";
import Cat from "./Cat";
import {Row} from "react-bootstrap";
import {Spinner} from "react-bootstrap";
import Search from "./Search"
import "./Cats.css"
const Cats = () =>{
    const [cats, setCats] = useState([])
    useEffect(()=>{
        fetch("https://api.thecatapi.com/v1/breeds")
            .then(response=>response.json())
            .then(data=>setCats(data))
        },[])
    const [searchValue, setSearchValue] = useState(" ");
    const handleSearch = (value) =>{
        setSearchValue(value);
    }
    const filterBreed = () => {
        return cats.filter((breed) =>
            breed.name.toLowerCase().includes(searchValue.toLowerCase())
        );
    };
    return(
       <>
           <Row className="text-center justify-content-center">
               <div>
               <Search onSearch={handleSearch}/>
               </div>
               {(cats.length)?filterBreed().map(cat => <Cat key={cat.id} name={cat.name} image={cat.image} origin={cat.origin}/>)
                :
               (<Spinner animation="border" role="status">
                   <span className="visually-hidden">Loading...</span>
               </Spinner>)
               }
           </Row>
       </>
    )
}
export default Cats