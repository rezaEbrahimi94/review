// Function to check if string has digit only
export const digitOnly = (value) => {
  if(value.length > 0) {
    const regex = /^[0-9\b]+$/;
    if(regex.test(value)) {
      return true;
    } else {
      return false;
    }
  }
  return true;
};

// Function to check if string length is from min to max
export const checkStringLength = (value, min, max) => {
  if(value.length >= min && value.length <= max) {
    return true;
  } else {
    return false;
  }
};

// Function to check if string length is required
export const valueIsRequired = (value) => {
  if(value.length > 0) {
    return true;
  } else {
    return false;
  }
};

// Function to check if string length is from min to max
export const isValidEmail = (value) => {
  if(value.length > 0) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(regex.test(value)) {
      return true;
    } else {
      return false;
    }
  }
  return true;
};

// Function to check if string length is from min to max
export const isValidLink = (value) => {
  if(value.length > 0) {
    const regex = /(^|\s)((https?:\/\/)?[\w-]+(\.[\w-]+)+\.?(:\d+)?(\/\S*)?)/;
    if(regex.test(value)) {
      return true;
    } else {
      return false;
    }
  }
  return true;
};

// Function to check if string length is from min to max
export const isValidPhone = (value) => {
  if(value.length > 0) {
    const regex = /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
    if(regex.test(value)) {
      return true;
    } else {
      return false;
    }
  }
  return true;
};
