import axios from "axios";

const apiURl = "https://www.timeapi.io/api/Time/current/zone?timeZone=America/Costa_Rica";

async function DataTime(){
    try{
        const reponse = await axios.get(apiURl);
        const dataTime = reponse.data;
    
        const date = dataTime.date;
        const time = dataTime.time;

        const arrayDateTime = [
            {date: date},
            {time: time}
        ];
        return arrayDateTime;
    } catch (error){
        console.error('Error al obtener los datos')
    }
}

export default DataTime;