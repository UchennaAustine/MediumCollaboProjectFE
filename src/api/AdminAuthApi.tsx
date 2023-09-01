import axios from "axios";

const URL: string = "https://blogbe.onrender.com/api/v1"

 interface iAdminData {
    name?: string;
    email?: string;
    password?: string;
    avatar?: string;
    avatarID?: string;
 }

 export const registerApi = async (data: any) => {
    try {
        const config: any = {
            "content-type": "multipart/formdata"
        }
        return await axios.post(`${URL}/register`, data, config).then((res: any) =>{
            return res.data.data
        })
    } catch (error) {
        console.log("Error", error)
    }
 }
 export const SignInApi = async (data: iAdminData) => {
    try {
        return await axios.post(`${URL}/`, data,).then((res: any) =>{
            return res.data.data
        })
    } catch (error) {
        console.log("Error", error)
    }
 }
 export const GetOneApi = async (userID: string) => {
    try {
        return await axios.get(`${URL}/${userID}/`).then((res: any) =>{
            return res.data.data
        })
    } catch (error) {
        console.log("Error", error)
    }
 }