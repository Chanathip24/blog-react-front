import axios from "axios";
import { useNavigate } from "react-router-dom";
//notification
import toast from "react-hot-toast";

const fetchData = async ({ setLoading, setData }) => {
  try {
    const response = await axios.get("http://localhost:8000/api/getblog");

    setData(response.data.result);
  } catch (error) {
    toast.error("Fetch error");
  } finally {
    setLoading(false);
  }
};
const getMonthname = (number) => {
  if (number < 0 && number > 12) return console.err("Wrong month");
  const allname = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return allname[number];
};

const getfullMonthname = (number) => {
  if (number < 0 && number > 12) return console.err("Wrong month");
  const allname = [
    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return allname[number];
};

const generateRandomPastelColor = () => {
  const r = Math.floor(Math.random() * 127 + 127); // Random value between 127 and 254
  const g = Math.floor(Math.random() * 127 + 127); // Random value between 127 and 254
  const b = Math.floor(Math.random() * 127 + 127); // Random value between 127 and 254
  return `rgb(${r},${g},${b})`;
};
const checkauth = async () => {
  try {
    const res = await axios.get("http://localhost:8000/api/checkauth");
    if (res.data.status === "pass") {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
};
const logout = async () => {
  try {
    const response = await axios.get("http://localhost:8000/api/logout");
    if (response.data.status === "success") return true;
    return false;
  } catch (error) {
    console.log(error);
    return false;
  }
};
const getdifftime = (timediff) => {
  const minago = Math.floor(timediff / (1000 * 60));
  const hourago = Math.floor(timediff / (1000 * 60 * 60));
  const dayago = Math.floor(timediff / (1000 * 60 * 60 * 24));
  if (minago < 60) return `${minago} Minutes Ago`;
  if (hourago < 24) return `${hourago} Hours Ago`;
  return `${dayago} Days Ago`;
};

export {
  logout,
  checkauth,
  fetchData,
  getMonthname,
  generateRandomPastelColor,
  getfullMonthname,
  getdifftime,
};
