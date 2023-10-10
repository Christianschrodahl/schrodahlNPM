const breakpoints = {
  //media query
  desktop: "only screen and (min-width: 960px) and (max-width: 1620px)",
  tablet: "only screen and (min-width: 720px) and (max-width: 1240px)",
  smtablet: "only screen and (min-width: 720px) and (max-width: 1000px)",
  phone: "only screen and (max-width: 720px)",
}
const theme = {
    breakpoints:{
      lg: "1620px",
      md: "1240px",
      sm:"1000px",
      xs:"720px"
    },
    layout:{
      background: "blue"
    },
    spaces:{
      base: "4px",
      sm: '4px',
      md: '16px 20px',
      lg: '16px 24px'
    },
    colors: {
      primary: '#007bff',
      secondary: '#6c757d',
      
      // Add more colors and design tokens here
    },
    text:{
      m:{
        size: '18px',
        bold: '700'
      },
      s:{
        size: '16px',
        bold: '700'
      },
      xs:{
        size: '14px',
        bold: '700'
      },
      xxs:{
        size: '12px',
        bold: '700'
      }
    },
    radii:{
        xl: '24px',
        lg: '12px',
        md: '8px',
        xs: '2px'
    },
    fontSize: {
      base: '1rem'
    },
    lineHeights:{
        base: '24px'
    },
    fontWeights:{
      bold: '900'
    }
  };

declare type sizes = {
    xl?: string,
    lg?: string,
    md?: string,
    sm?: string,
    xs?: string,
    xxs?: string,
    base?: string,
}
declare type weights= {
  bold?: string,
  semiBold?: string,
  medium?: string,
  regular?: string,

}
declare type lineHeights = {
    base: string
}

export default theme
export declare type themeProps = {
    colors?: any,
    radii?: sizes,
    lineHeights?: lineHeights,
    button?: any,
    breakpoints?: sizes,
    spaces?: sizes,
    fontSize?: sizes,
    fontWeights?: weights
}
