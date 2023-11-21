import React, { useEffect, useState } from "react";
import DataTime from "../DataTime";

function DateTime(){

    const [dateTime, setDateTime] = useState(null);

    useEffect(() => {
        async function fetchData(){
            try{
                const result = await DataTime();
                setDateTime(result);
            } catch (error){
                console.error('Error')
            }
        }
        fetchData();

        const interval = setInterval(fetchData,1000)
        return () => clearInterval(interval)

    }, []);
    
    if(!dateTime){
        return <div>Error</div>;
    }

    return (
        <div>
            <p>Fecha: {dateTime[0].date}</p>
            <p>Hora: {dateTime[1].time}</p>
            <p>Lugar: {dateTime[2].timezone}</p>
        </div>
    );
}

export default DateTime;