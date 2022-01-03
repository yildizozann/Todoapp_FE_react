import axios from 'axios';

    const GetBackend = async(url, port) => {

        try{
            const response = await axios.get(`${url}:${port}/alltodo`)
            
            
            return response.data.todolist
           
    
        }catch(err){
            console.log("API Error" + err)

        }
    }
    
export default GetBackend
