import theme from '@/customTheme/theme'
import deepMerge from '@/utils/deepMerge'
import setRoundedValue from '@/utils/setRoundedValue'
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
    fontWeight: string,
    rounded?: string | Boolean
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
    borderRadius: theme.radii.xs,
    lineHeight: theme.lineHeights.base,
    fontWeight: theme.fontWeights.bold
}

const colorsSetup = ({ colors, colorMode, additionalStyling }: { colors: Colors; colorMode: string, additionalStyling:Record<string,string> }) => {
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
    return deepMerge(style[colorMode], additionalStyling);
  };
/**
 * @description Determines styles for a given variant
 * @param {Object} props - Props Object
 * @returns {Object} - Variant styles object
 */
const getVariantStyles = (props: { variant: string, colors:Colors, colorMode: string, additionalStyling: Record<string,string> }) => {
    switch (props.variant) {
      case 'information':
        return colorsSetup(props);
      case 'warning':
        return colorsSetup(props);
      default:
        return colorsSetup(props);
    }
  };


/**
 * @description Generates Button styles based on passed variant props and theme colors.
 * @param {{color: String|Array<String>, theme: Object, colorMode: String, size: String|Array<String>}} props - Style props object
 * @returns {Object} Style object to be passed to styled component
 * @todo Pass the `theme` from the ThemeProvider context. Will need to create a context provider for theme.
 */
const createAlertStyles = (props) => {
    return {
      ...setRoundedValue(props, baseStyles, theme),
      ...getVariantStyles(props),
    }
  }
  
export default createAlertStyles
export type { Colors }

