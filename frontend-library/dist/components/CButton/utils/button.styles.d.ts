declare type Colors = {
    bg: bg;
    font: font;
};
type font = {
    base: string;
    _hover: string;
    _active: string;
    _focused: string;
};
type bg = {
    base: string;
    _hover: string;
    _active: string;
    _focused: string;
};
/**
 * @description Generates Button styles based on passed variant props and theme colors.
 * @param {{color: String|Array<String>, theme: Object, colorMode: String, size: String|Array<String>}} props - Style props object
 * @returns {Object} Style object to be passed to styled component
 * @todo Pass the `theme` from the ThemeProvider context. Will need to create a context provider for theme.
 */
declare const createButtonStyles: (props: any) => any;
export default createButtonStyles;
export type { Colors };
