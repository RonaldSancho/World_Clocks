import axios from "axios";

const apiURl = "http://worldtimeapi.org/api/timezone/America/Costa_Rica";

async function DataTime(){
    try{
        const reponse = await axios.get(apiURl);
        const dataTime = reponse.data;
    
        const date = dataTime.datetime.split('T')[0];
        const time = dataTime.datetime.split('T')[1].slice(0,8);

        const arrayDateTime = [
            {date: date},
            {time: time}
        ];
        console.log('Datos guardados', arrayDateTime)
    } catch (error){
        console.error('Datos guardados')
    }
}

export default DataTime;