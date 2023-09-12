declare const theme: {
    breakpoints: {
        lg: string;
        md: string;
        sm: string;
        xs: string;
    };
    layout: {
        background: string;
    };
    spaces: {
        base: string;
        sm: string;
    };
    colors: {
        primary: string;
        secondary: string;
    };
    radii: {
        xl: string;
        lg: string;
        md: string;
        xs: string;
    };
    fontSize: {
        base: string;
    };
    lineHeights: {
        base: string;
    };
    fontWeights: {
        bold: string;
    };
};
declare type radii = {
    md: string;
};
declare type lineHeights = {
    base: string;
};
export default theme;
export declare type themeProps = {
    colors: any;
    radii: radii;
    lineHeights: lineHeights;
    button: any;
};
