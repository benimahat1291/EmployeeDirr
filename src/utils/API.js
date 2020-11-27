import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=20&?nat=us";

export async function getUsers(){
    return axios.get(BASEURL)
}