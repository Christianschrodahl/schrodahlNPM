import theme from '@/customTheme/theme'
type baseStyle = {
    padding: string,
    letterSpacing: string,
    height: string,
    margin: string,
    textAlign: string,
    fontSize: string,
    maxWidth: string,
    width: string,
    borderRadius: string,
    lineHeight: string,
    fontWeight: string
}
declare type Colors = {
    bg: bg,
    font: font
}
type font = {
    base: string,
    _hover: string,
    _active: string,
    _focused: string
}
type bg = {
    base: string,
    _hover: string,
    _active: string,
    _focused: string
}
const baseStyles:baseStyle = {
    padding:"10px 16px",
    letterSpacing:"0.6px",
    height:"10",
    margin:"5px",
    textAlign: 'center',
    fontSize:theme.fontSize.base,
    width: "100%",
    maxWidth: 'fit-content',
    borderRadius: theme.radii.md,
    lineHeight: theme.lineHeights.base,
    fontWeight: theme.fontWeights.bold
}

const primaryBtn = ({ colors, colorMode }: { colors: Colors; colorMode: string }) => {
    let style: Record<string, any> = {
      light: {
        bg: colors.bg.base,
        color: colors.font.base,
        _hover: {
          bg: colors.bg._hover,
          color: colors.font._hover
        },
        _active: {
          bg: colors.bg._active
        }
      },
      dark: {
        bg: colors.bg.base,
        color: colors.font.base,
        _hover: {
          bg: colors.bg._hover,
          color: colors.font._hover
        },
        _active: {
          bg: colors.bg._active
        }
      }
    };
    return style[colorMode];
  };
/**
 * @description Determines styles for a given variant
 * @param {Object} props - Props Object
 * @returns {Object} - Variant styles object
 */
const getVariantStyles = (props: { variant: string, colors:Colors, colorMode: string }) => {
    switch (props.variant) {
      case 'primary':
        return primaryBtn(props);
      /*case 'secondary':
        return secondaryBtn(props);
      case 'tertiary':
        return tertiaryBtn(props);
      case 'unstyled':
        return unstyledStyle;*/
      default:
        return primaryBtn(props);
    }
  };


/**
 * @description Generates Button styles based on passed variant props and theme colors.
 * @param {{color: String|Array<String>, theme: Object, colorMode: String, size: String|Array<String>}} props - Style props object
 * @returns {Object} Style object to be passed to styled component
 * @todo Pass the `theme` from the ThemeProvider context. Will need to create a context provider for theme.
 */
const createButtonStyles = (props) => {
    return {
      ...baseStyles,
      ...getVariantStyles(props),
    }
  }
  
export default createButtonStyles
export type { Colors }

