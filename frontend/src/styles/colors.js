const colors = {
    light: {
      primary: "#22697d",             // Updated primary color
      primaryLight: "rgba(34, 105, 125, 0.8)", // 80% opacity for hover or accent
      primaryLighter: "rgba(34, 105, 125, 0.6)", // 60% opacity for light accents
      primaryDark: "rgba(26, 84, 100, 0.9)",   // 90% opacity for borders or shadows
  
      secondary: "#f4a261",           // Complementary secondary color (soft orange)
      secondaryLight: "rgba(244, 162, 97, 0.8)", // 80% opacity for accents
      secondaryDark: "rgba(192, 120, 72, 0.9)",  // 90% opacity for borders
  
      background: "#ffffff",          // Light background
      surface: "rgba(241, 245, 244, 0.95)", // Slightly transparent surface color
      text: "#000000",                // Main text color
      textSecondary: "rgba(74, 74, 74, 0.7)", // 70% opacity for secondary text
    },
    dark: {
      primary: "#22697d",             // Updated primary color
      primaryLight: "rgba(34, 105, 125, 0.8)",  // 80% opacity for hover or accent
      primaryLighter: "rgba(34, 105, 125, 0.6)", // 60% opacity for light accents
      primaryDark: "rgba(26, 84, 100, 0.9)",    // 90% opacity for borders or shadows
  
      secondary: "#f4a261",           // Complementary secondary color
      secondaryLight: "rgba(244, 162, 97, 0.8)", // 80% opacity for accents
      secondaryDark: "rgba(192, 120, 72, 0.9)",  // 90% opacity for borders
  
      background: "#121212",          // Dark background
      surface: "rgba(30, 30, 30, 0.95)", // Slightly transparent surface for cards
      text: "#ffffff",                // Main text color (light for dark mode)
      textSecondary: "rgba(176, 176, 176, 0.7)", // 70% opacity for secondary text
    },
  };

export default colors;