import { commonApi } from "./commonAPI";
import SERVER_URL from "./serverUrl";

//register API
export const registerAPI=async (user)=>{
    return await commonApi("POST",`${SERVER_URL}/register`,user,"")
}

//login API
export const loginAPI=async (user)=>{
    return await commonApi("POST",`${SERVER_URL}/login`,user,"")
}
