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
        <dl className="dictionary">
            <div className="term">
                <dt>
                    <span>
                    <p>Zone: {dateTime[0].timezone}</p>
                    </span>
                </dt>
                <dd>
                    <p>Date: {dateTime[0].date}</p>
                    <p>Time: {dateTime[0].time}</p>
                </dd>
            </div>
        </dl>
    );
}

export default DateTime;