import axios from 'axios'
const baseUrl = '/' // add new URL when Jason/chad gives us one


const data = [
  {
      "method": "GET",
      "path": "/",
      "headers": "Host: jWM187dSQ8xT.x.domain.com\nUser-Agent: PostmanRuntime/7.41.0\nAccept: */*",
      "queryParams": {
        color: 'green',
        day: 'friday'
      },
      "received_at": "2024-09-15T03:30:00.000Z",
      "body": "",
      "id": "boomboompow"
  },
  {
      "method": "POST",
      "path": "/sample/post/request",
      "headers": "Host: jWM187dSQ8xT.x.domain.com\nContent-Type: application/json\nContent-Length: 35\nUser-Agent: PostmanRuntime/7.32.3\nAccept: */*\nCache-Control: no-cache\nPostman-Token: iuhgs9824h5u20fhe",
      "received_at": "2024-09-15T03:35:00.000Z",
      "body": "{\r\n\"name\": \"Alice\",\r\n\"email\": \"alice@example.com\"\r\n}",
      "id": "letsgetitstarted"
  }
]

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
    return data;
} catch (error) {
    console.log('here')
    // alert('bin does not exist, sorry!')
    // navigate('/')
    return data; // some hashed val
}
}

export default { create_endpoint, requests };
