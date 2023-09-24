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
        md: string;
        lg: string;
    };
    colors: {
        primary: string;
        secondary: string;
    };
    text: {
        m: {
            size: string;
            bold: string;
        };
        s: {
            size: string;
            bold: string;
        };
        xs: {
            size: string;
            bold: string;
        };
        xxs: {
            size: string;
            bold: string;
        };
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
declare type sizes = {
    xl?: string;
    lg?: string;
    md?: string;
    sm?: string;
    xs?: string;
    xxs?: string;
    base?: string;
};
declare type lineHeights = {
    base: string;
};
export default theme;
export declare type themeProps = {
    colors?: any;
    radii?: sizes;
    lineHeights?: lineHeights;
    button?: any;
    breakpoints?: sizes;
    spaces?: sizes;
};
