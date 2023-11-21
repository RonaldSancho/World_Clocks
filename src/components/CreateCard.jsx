import React from "react"

function CreateCard({data}){
    return(
        <dl className="dictionary">
            {data.map((data, index) => (
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
    )
}

export default CreateCard;