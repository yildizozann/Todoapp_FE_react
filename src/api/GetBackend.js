import axios from 'axios';

    const GetBackend = async() => {

        try{
            const response = await axios.get('http://127.0.0.1:8080/alltodo')
            
            
            return response.data.todolist
           
    
        }catch(err){
            console.log("API Error" + err)

        }
    }
    
export default GetBackend
