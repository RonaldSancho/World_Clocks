import React, { useEffect, useState } from "react";
import DataTime from "../DataTime";
import CreateCard from "./CreateCard";

function DateTime(){

    const [dateTime, setDateTime] = useState(null);

    useEffect(() => {
        async function fetchData(){
            try{
                const result = await DataTime();
                setDateTime(result);
            } catch (error){
                console.error('Error', error)
            }
        }
        const interval = setInterval(fetchData, 1000)


        return () => {
            clearInterval(interval);
            fetchData();
        };
    }, []);
    
    if(!dateTime){
        return <div>Error</div>;
    }

    return <
}

export default DateTime;