import { useEffect, useState } from "react"

const useShirt = () =>{

    const [shirts , setShirts] = useState([]);

    useEffect(()=>{

        fetch('tshirt.json')
        .then(res => res.json())
        .then(data => setShirts(data));
    },[]);

    return [shirts , setShirts];
}

export {useShirt};