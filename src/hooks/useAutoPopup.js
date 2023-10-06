import { useState, useEffect } from 'react';

function useAutoPopup() {
  const [isAutoPopupOpen, setIsAutoPopupOpen] = useState(false); // Rename the state variable

  useEffect(() => {
    // Function to open the modal
    const openAutoPopup = () => {
      setIsAutoPopupOpen(true);
    };

    // Add your logic here to trigger the auto popup (e.g., after 10 seconds or half-page scroll)

    // Example: Open the popup after 10 seconds
    const timer = setTimeout(() => {
      openAutoPopup();
    }, 10000); // 10 seconds in milliseconds

    // Example: Open the popup when the user scrolls halfway down the page
    const handleScroll = () => {
      const scrollHeight = window.innerHeight + window.scrollY;
      const pageHeight = document.documentElement.scrollHeight;
      if (scrollHeight >= pageHeight / 2) {
        openAutoPopup();
        // Remove the scroll event listener once triggered
        window.removeEventListener('scroll', handleScroll);
      }
    };

    // Add an event listener for the scroll event
    window.addEventListener('scroll', handleScroll);

    // Cleanup: Clear the timer when the component unmounts
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array means this effect runs once after mount

  const openAutoPopup = () => {
    setIsAutoPopupOpen(true);
  };

  const closeAutoPopup = () => {
    setIsAutoPopupOpen(false);};

  return {
    isAutoPopupOpen, // Rename the state variable
    openAutoPopup, // Rename the function
    closeAutoPopup, // Rename the function
  };
}

export default useAutoPopup;
