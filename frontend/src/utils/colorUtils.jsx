
/**
 * Converts a hex color to an rgba color with the specified opacity.
 * @param {string} hex - The hex color string (e.g., "#0a4c43").
 * @param {number} alpha - The alpha value (0 to 1).
 * @returns {string} - The rgba color string.
 */
export const hexToRgba = (hex, alpha = 1) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};