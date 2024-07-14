import axios from "axios";

 async function predictApi(body) {
  try {
    const response = await axios.post('http://127.0.0.1:5000', body);
    return response.data;
  } catch (error) {
 
    console.error('Error occurred while making POST request:', error);
    throw error;  
  }
}

export default predictApi