// This is the "Engine" that powers the typing
const useTypewriter = (text, speed = 50) => {
  const [displayedText, setDisplayedText] = React.useState("");

  React.useEffect(() => {
    let i = 0;
    setDisplayedText(""); // Reset text when the input text changes
    
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prev) => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => clearInterval(typingInterval); // Cleanup on unmount
  }, [text, speed]);

  return displayedText;
};
