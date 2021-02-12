import axios from 'axios';

//Send Mail

export const convertAndSend = async (url, email) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const res = await axios.post('/pdf', url, email, config);
    console.log(res);
  } catch (err) {
    console.log('Error');
  }
};
