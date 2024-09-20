import axios from 'axios'
const baseUrl = '/api'

const httpMethods = [
  'post',
  'put',
  'delete',
  'patch',
];

function getRandomElement(arr: string[]) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

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
    return
}
}

const sendRandomRequest = async function(body: string, endpoint: string) {
  try {
    const response = await axios({
      method: getRandomElement(httpMethods),
      url: 'https://' + endpoint + '.jjjones.dev',
      data: body.replaceAll('\n', ' '),
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      }
    })
  } catch (error) {
    return {error: error}
  }
}

export default { create_endpoint, requests, sendRandomRequest };
