import React, {useState, useEffect } from "react";

export async function getData() {
    return fetch('data.json')
        .then(response => response.json())
        .then((data)=> console.log(data.data))
}



/* const getData = () => {
    fetch('data.json')
        .then(response => response.json())
        .then(data => setData(data.data.Profile))
}
const [info, setData] = useState([])
useEffect(() => {getData()}, []); */