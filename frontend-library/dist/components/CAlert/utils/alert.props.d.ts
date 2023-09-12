type AlertVariant = 'information' | 'warning' | 'success' | 'error';
interface AlertProps {
    title: Record<string, any>;
    as: string | any;
    to: string | any;
    type: Record<string, any>;
    variant?: any | AlertVariant;
    isDisabled: Record<string, any>;
    isLoading: Record<string, any>;
    isActive: Record<string, any>;
    loadingText: Record<string, any>;
    iconSpacing: Record<string, any>;
    leftIcon: Record<string, any>;
    rightIcon: Record<string, any>;
}
declare const AlertProps: AlertProps;
export default AlertProps;
export type { AlertProps };
