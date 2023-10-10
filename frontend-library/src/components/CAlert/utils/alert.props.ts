import { PropType } from "vue";

type AlertVariant = 'information'|'warning'|'success'|'error';

interface AlertProps {
  title: Record<string, any>;
  as: string | any;
  type: Record<string, any>;
  variant?: any|AlertVariant;
  isDisabled: Record<string, any>;
  isLoading: Record<string, any>;
  isActive: Record<string, any>;
  loadingText: Record<string, any>;
  iconSpacing: Record<string, any>;
  leftIcon: Record<string, any>;
  rightIcon: Record<string, any>;
  rounded?: Record<string, any>
}

const AlertProps: AlertProps = {
    title: {
        type: String as PropType<string>,
        default: ''
    },
    as: {
        type: [String, Object] as PropType<string | object>,
        default: 'section'
    },
    variant: {
        type: String as PropType<'information' | 'warning' | 'success' | 'error'>,
        default: 'information',
        validator: (value: string) => value.match(/^(information|warning|success|error)$/)
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
    },
    type: undefined,
    rounded: {
        type: [Boolean, String] as PropType<boolean|string>,
        default: false
    }
};
  export default AlertProps
  export type {AlertProps}
  