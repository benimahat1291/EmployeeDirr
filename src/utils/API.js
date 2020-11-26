import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=500&inc=name,email,picture,phone,dob";

export async function getUsers(){
    return axios.get(BASEURL)
}