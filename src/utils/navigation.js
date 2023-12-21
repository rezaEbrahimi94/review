// Function to toggle body's scrollbar
export const toggleScrollbar = (value) => {
  if (value) {
    document.querySelector('html').style.overflow = 'auto';
  } else {
    document.querySelector('html').style.overflow = 'hidden';
  }
};

// Funtion to scroll to a element by Id
export const scrollToElementById = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

// Funtion to scroll to top of page
export const scrollToTopOfPage = () => {
  document.querySelector('body')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};
