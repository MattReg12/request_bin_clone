import axios from 'axios';

const data = {
  model: "gpt-3.5-turbo",
  messages: [
    { role: "system", content: "You are a helpful assistant." },
    { role: "user", content: "Write me a humorous haiku about programming. Dont include new lines" },
  ],
  max_tokens: 100
};

const config = {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ',
  }
};

const getAsciiArt = async () => {
  try {
    const response = await axios.post('https://api.openai.com/v1/chat/completions', data, config);
    return response.data.choices[0].message.content
  } catch (error) {
    return {'Error fetching ASCII art:': error}
  }
};


export default getAsciiArt;
