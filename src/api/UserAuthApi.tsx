import axios from "axios";

const URL: string = "https://blogbe.onrender.com/api/v1"

 interface iUserData {
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
    } catch (error:any) {
        console.log("Error", error)
    }
 }

 export const usersCategory = async(props:any, userID: string )=>{
    try {

        return await axios.post(`${URL}/${userID}/catergory-author`, {category: props}).then((res: any) => {
            console.log("All Data",res)
            return res.data.data
        })
        
    } catch (error) {
        console.log(error)
        
    }
}
 export const SignInuserApi = async (data: iUserData) => {
    try {
        return await axios.post(`${URL}/sign-in`, data,).then((res: any) =>{
            console.log(res)
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