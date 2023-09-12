import { PropType } from "vue";

type ButtonVariant = 'primary' | 'secondary' | 'tertiary';

interface ButtonProps {
  as?: string | any;
  to: string | any;
  type: Record<string, any>;
  variant?: any|ButtonVariant;
  isDisabled: Record<string, any>;
  isLoading: Record<string, any>;
  isActive: Record<string, any>;
  loadingText: Record<string, any>;
  iconSpacing: Record<string, any>;
  leftIcon: Record<string, any>;
  rightIcon: Record<string, any>;
}

const buttonProps: ButtonProps = {
    as: {
      type: [String, Object] as PropType<string | object>,
      default: 'button'
    },
    to: [String, Object] as PropType<string | object>,
    type: {
      type: String as PropType<string>,
      default: 'button'
    },
    variant: {
      type: String as PropType<'primary' | 'secondary' | 'tertiary'>,
      default: 'primary',
      validator: (value: string) =>
        value.match(/^(primary|secondary|tertiary)$/)
    },
    isDisabled: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    isLoading: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    isActive: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    loadingText: {
      type: String as PropType<string>,
      default: null
    },
    iconSpacing: {
      type: [String, Number] as PropType<string | number>,
      default: '1'
    },
    leftIcon: {
      type: String as PropType<string>,
      default: null
    },
    rightIcon: {
      type: String as PropType<string>,
      default: null
    }
  };
  export default buttonProps
  export type {ButtonProps}
  