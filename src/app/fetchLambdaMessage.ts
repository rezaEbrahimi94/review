export const fetchLambdaMessage = async () => {
    const lambdaUrl = "https://t13v4cye2k.execute-api.ap-southeast-4.amazonaws.com/dev/test";
    
    try {
      const response = await fetch(lambdaUrl);
      const data = await response.json();
      return data.body; 
    } catch (error) {
      console.error('Error fetching Lambda message:', error);
      return 'Failed to fetch message';
    }
  };