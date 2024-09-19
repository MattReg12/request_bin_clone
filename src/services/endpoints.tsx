import axios from 'axios'
const baseUrl = 'https://jjjones.dev/api'


// const data = [
//   {
//       "method": "GET",
//       "path": "/",
//       "headers": "Host: jWM187dSQ8xT.x.domain.com\nUser-Agent: PostmanRuntime/7.41.0\nAccept: */*",
//       "queryParams": {
//         color: 'green',
//         day: 'friday'
//       },
//       "received_at": "2024-09-15T03:30:00.000Z",
//       "body": "",
//       "id": "boomboompow"
//   },
//   {
//       "method": "POST",
//       "path": "/sample/post/request",
//       "headers": "Host: jWM187dSQ8xT.x.domain.com\nContent-Type: application/json\nContent-Length: 35\nUser-Agent: PostmanRuntime/7.32.3\nAccept: */*\nCache-Control: no-cache\nPostman-Token: iuhgs9824h5u20fhe",
//       "received_at": "2024-09-15T03:35:00.000Z",
//       "body": "{\r\n\"name\": \"Alice\",\r\n\"email\": \"alice@example.com\"\r\n}",
//       "id": "letsgetitstarted"
//   },
//   {
//     id: '$2b$10$9G336nUq4g0o.vdyTDUhD.XJRuVEZHQ0q8wY.FDc1OTDwSxIzN4Vi',
//     method: 'GET',
//     path: '/sample/get/request?id=ddc5f0ed-60ff-4435-abc5-590fafe4a771&timestamp=1544827965&event=delivered',
//     headers: 'host: W8wT4asL1Cu8.x.domain.com\n' +
//       'accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7\n' +
//       'accept-language: en-US,en;q=0.9\n' +
//       'cache-control: no-cache\n' +
//       'pragma: no-cache\n' +
//       'priority: u=0, i\n' +
//       'sec-ch-ua: "Chromium";v="128", "Not;A=Brand";v="24", "Google Chrome";v="128"\n' +
//       'sec-ch-ua-mobile: ?0\n' +
//       'sec-ch-ua-platform: "macOS"\n' +
//       'sec-fetch-dest: document\n' +
//       'sec-fetch-mode: navigate\n' +
//       'sec-fetch-site: none\n' +
//       'sec-fetch-user: ?1\n' +
//       'upgrade-insecure-requests: 1\n' +
//       'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36\n' +
//       'Accept-Encoding: gzip, deflate, br',
//     received_at: '2024-09-14T03:45:00.000Z',
//     body: '',
//     queryParams: {
//       id: 'ddc5f0ed-60ff-4435-abc5-590fafe4a771',
//       timestamp: '1544827965',
//       event: 'delivered'
//     }
//   }
// ]

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
