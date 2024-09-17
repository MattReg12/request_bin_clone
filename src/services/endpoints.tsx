import axios from 'axios'
const baseUrl = '/' // add new URL when Jason/chad gives us one

const create_endpoint = async () => {
    try {
    const response = await axios.post(baseUrl);
    // return response.data
    return response;
  } catch (error) {
    return 'endyl2yvntykt'; // some hashed val
  }
}

export default { create_endpoint };
