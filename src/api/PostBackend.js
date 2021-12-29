import axios from 'axios';
    
    const PostBackend = async(newtodo) => {
       
        try{
            const response = await axios.post('http://127.0.0.1:8080/newtodo', newtodo)
            
            
            return console.log(response)
           
    
        }catch(err){
            console.log("API Error" + err)

        }
    }
    
export default PostBackend