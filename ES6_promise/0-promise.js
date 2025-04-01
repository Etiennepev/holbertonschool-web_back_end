export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve({
          status: 200,
          message: 'Success',
        });
      } else {
        reject(new Error('API request failed'));
      }
    }, 1000);
  });
}
