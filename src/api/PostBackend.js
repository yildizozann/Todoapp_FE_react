import axios from 'axios';
    
    const PostBackend = async(url,port,newtodo) => {
       
        try{
            const response = await axios.post(`${url}:${port}/newtodo`, newtodo)
            
            
            return response
           
    
        }catch(err){
            console.log("API Error" + err)

        }
    }
    
export default PostBackend