import axios from 'axios'
const baseUrl = '/'

const create_endpoint = async () => {
  try {
    const response = await axios({
      method: 'post',
      url: baseUrl + '/createbin',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      }
    })
    return response.data
  } catch (error) {
    return
  }
}
const requests = async (binId: string) => {
  try {
    const response = await axios.get(baseUrl + `/bin/${binId}`);
    return response;
} catch (error) {
    // alert('bin does not exist, sorry!')
    // navigate('/')
    return
}
}

export default { create_endpoint, requests };
