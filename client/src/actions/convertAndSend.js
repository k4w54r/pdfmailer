import axios from 'axios';

//Send Mail

export const convertAndSend = async (url, email, name) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const res = await axios.post('/api/pdf', url, email, name, config);
    console.log(res);
  } catch (err) {
    console.log('Error');
  }
};
