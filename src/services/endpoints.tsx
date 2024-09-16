import axios from 'axios'
const baseUrl = '/' // add new URL when Jason/chad gives us one

const create_endpoint = async () => {
    try {
    const response = await axios.post(baseUrl);
    // return response.data
    return 'this message was successful';
  } catch (error) {
    return '1234';
  }
}

export default { create_endpoint };
