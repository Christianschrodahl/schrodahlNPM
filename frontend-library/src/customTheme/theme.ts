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
      sm: '4px'
    },
    colors: {
      primary: '#007bff',
      secondary: '#6c757d',
      
      // Add more colors and design tokens here
    },
    radii:{
        md: '8px'
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

declare type radii = {
    md: string
}
declare type lineHeights = {
    base: string
}

export default theme
export declare type themeProps = {
    colors: any,
    radii: radii,
    lineHeights: lineHeights,
    button: any
}
