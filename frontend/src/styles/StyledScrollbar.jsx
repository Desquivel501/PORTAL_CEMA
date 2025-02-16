import { GlobalStyles } from "@mui/material";
import { useTheme } from "../context/ThemeContext";

const StyledScrollbar = () => {
    const { colors } = useTheme();

    return (
        <GlobalStyles
            styles={{
                ":root": {
                    "--scrollbar-thumb": colors.thumb,
                    "--scrollbar-thumb-hover": colors.thumbHover,
                    "--scrollbar-track": colors.track,
                },

                /* WebKit Browsers (Chrome, Edge, Safari, Opera) */
                "::-webkit-scrollbar": {
                    width: "6px",
                    height: "6px",
                },
                "::-webkit-scrollbar-thumb": {
                    backgroundColor: "var(--scrollbar-thumb)",
                    borderRadius: "10px",
                },
                "::-webkit-scrollbar-thumb:hover": {
                    backgroundColor: "var(--scrollbar-thumb-hover)",
                },
                "::-webkit-scrollbar-track": {
                    backgroundColor: "var(--scrollbar-track)",
                },

                /* Firefox */
                "*": {
                    scrollbarWidth: "thin",
                    scrollbarColor: "var(--scrollbar-thumb) var(--scrollbar-track)",
                },
            }}
            />
    )
        
};
  
  export default StyledScrollbar;