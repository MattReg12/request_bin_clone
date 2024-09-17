import axios from 'axios'
const baseUrl = '/' // add new URL when Jason/chad gives us one

const create_endpoint = async () => {
    try {
    const response = await axios.post(baseUrl + 'createbin');
    // return response.data
    return response;
  } catch (error) {
    return 'endyl2yvntykt'; // some hashed val
  }
}

const requests = async (binId: string) => {
  try {
  const response = await axios.get(baseUrl + 'bin/' + binId);
  return response.data;
} catch (error) {
  // alert('bin does not exist, sorry!')
  // navigate('/')
  return 'endyl2yvntykt'; // some hashed val
}
}

export default { create_endpoint };
