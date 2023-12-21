// Function to get the value of a cookie by name
export const getCookieValue = (name) => {
  if (typeof window !== "undefined") {
    const cookies = document.cookie.split(';');
  
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
  
      // Check if this cookie is the one we're looking for
      if (cookie.startsWith(`${name}=`)) {
        return cookie.substring(name.length + 1);
      }
    }
  }
  // Return null if the cookie with the provided name is not found
  // your code with access to window or document object here 
  return null;
};