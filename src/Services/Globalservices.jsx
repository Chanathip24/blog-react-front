import axios from "axios";
//notification
import toast from 'react-hot-toast'

const fetchData = async ({setLoading,setData})=>{
    try {
        const response = await axios.get("https://newsapi.org/v2/everything?q=apple&from=2024-07-24&to=2024-07-24&sortBy=popularity&apiKey=c8d7624343554d38bc8fd10485dd0012")
        
        setData(response.data.articles)
        
    } catch (error) {
        toast.error("Fetch error")
        res.json({message: "Error fetching",error})
    }finally{
        setLoading(false)
    }
}
const getMonthname = (number)=>{
    if(number < 0 && number > 12) return console.err("Wrong month")
    const allname = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
    return allname[number]
}
const randomcolourcode = () =>{
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
const generateRandomPastelColor = () => {
    const r = Math.floor((Math.random() * 127) + 127); // Random value between 127 and 254
    const g = Math.floor((Math.random() * 127) + 127); // Random value between 127 and 254
    const b = Math.floor((Math.random() * 127) + 127); // Random value between 127 and 254
    return `rgb(${r},${g},${b})`;
  };
const checkauth = async ()=>{
    try {
        const res = await axios.get("http://localhost:8000/api/checkauth")
        if(res.data.status ==="pass"){
            return true;
        }else{
            return false;
        }
    } catch (error) {
        
        return false
    }

}
export {
    checkauth,
    fetchData,
    getMonthname,
    generateRandomPastelColor
}