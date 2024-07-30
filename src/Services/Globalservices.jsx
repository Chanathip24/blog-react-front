import axios from "axios";
//notification
import toast from 'react-hot-toast'

const fetchData = async ({setLoading,setData})=>{
    try {
        const response = await axios.get("https://newsapi.org/v2/everything?q=apple&from=2024-07-24&to=2024-07-24&sortBy=popularity&apiKey=c8d7624343554d38bc8fd10485dd0012")
        
        setData(response.data.articles)
        toast.success("Fetch success")
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
export {
    fetchData,
    getMonthname
}