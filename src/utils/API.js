import axios from "axios";
//using axios to get api call
const BASEURL = "https://randomuser.me/api/?results=20&?nat=us";

export async function getUsers(){
    return axios.get(BASEURL)
}