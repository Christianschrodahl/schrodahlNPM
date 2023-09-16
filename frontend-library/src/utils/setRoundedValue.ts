import { themeProps } from '@/customTheme/theme'
import isValidSize from './isValidSizeChecker'
/**
 * @description Determines styles for a given button
 * @param {Object} props - Props Object
 * @returns {Object} - additional styling
 */
export default (props: Record<string, any>, baseStyles: Record<string, any>, theme:themeProps):Record<string, any> =>{
    let res = baseStyles
    if(props.rounded === undefined)return res
    if((typeof props?.rounded === 'boolean' && props?.rounded === true)
    || (props?.rounded?.length === 0)){
      res.borderRadius = theme.radii.lg
      
    }else if(isValidSize(props?.rounded)){
      res.borderRadius = theme.radii[props?.rounded]
    }else{
      res.borderRadius = props?.rounded
    }
  
    return res
  }