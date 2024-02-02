import axios from "axios";

//basic structure
export const commonApi=async(httpRequest,url,reqBody,reqHeader)=>{
    const reqConfig={
        method:httpRequest,
  url,
  data: reqBody,
  header:reqHeader?reqHeader:{"Content-Type":"application/json"}
}
return await axios(reqConfig).then(result=>{
    return result
}).catch(reason=>{
    return reason
})
}