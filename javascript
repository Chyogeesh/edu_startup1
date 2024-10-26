import axios from 'axios';

const submitQuizAnswers = async (answers) => {
  try {
    const response = await axios.post('https://your-api-endpoint.com/predict', { answers });
    console.log(response.data); // Process the prediction results
  } catch (error) {
    console.error(error);
  }
};
