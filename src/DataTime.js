import axios from "axios";

const locations = [
    "America/Costa_Rica",
    "America/New_York",
    "Asia/Shanghai",
    "Asia/Kolkata",
    "Europe/Berlin",
    "Asia/Tokyo"
]

async function DataTime(){
    try{
        const responses = await Promise.all(locations.map(async (location) => {
            const apiURL = `http://worldtimeapi.org/api/timezone/${location}`;
            const reponse = await axios.get(apiURL);
            return reponse.data;
        }));

        const arrayDateTime = responses.map((dataTime, index) => ({
            country: locations[index].split('/')[1],
            date: dataTime.datetime.split('T')[0],
            time: dataTime.datetime.split('T')[1].slice(0,8),
            zone: dataTime.timezone,
        }))

        return arrayDateTime;
    } catch (error){
        console.error('Error al obtener los datos')
    }
}

export default DataTime;