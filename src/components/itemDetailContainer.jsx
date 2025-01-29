import { useState, useEffect } from "react";
import { useParams } from "react-router";
import {ItemDetail} from "./ItemDetail";
import { getDocument } from "../firebase/db";

function ItemDetailContainer () {
    const [item, setItem] = useState();
    const {id} = useParams()
    
    useEffect (() => {
    getDocument(id)
    .then(res => setItem(res))
    }, [id])
    
    return (
    <ItemDetail item={item} />
    )
}
    
export default ItemDetailContainer



