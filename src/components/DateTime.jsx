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

    console.log('Data', dateTime);

    return (
        <dl className="dictionary">
            {dateTime.map((data, index) => (
                <div className="term" key={index}>
                    <dt>
                        <span>
                            <p>Zone: {data.zone}</p>
                        </span>
                    </dt>
                    <dd>
                        <p>Date: {data.date}</p>
                        <p>Time: {data.time}</p>
                    </dd>
                </div>
            ))}
        </dl>
    );
}

export default DateTime;