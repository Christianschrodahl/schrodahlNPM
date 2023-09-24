type ButtonVariant = 'primary' | 'secondary' | 'tertiary';
interface ButtonProps {
    as?: string | any;
    to: string | any;
    type: Record<string, any>;
    variant?: any | ButtonVariant;
    isDisabled: Record<string, any>;
    isLoading: Record<string, any>;
    isActive: Record<string, any>;
    loadingText: Record<string, any>;
    iconSpacing: Record<string, any>;
    leftIcon: Record<string, any>;
    rightIcon: Record<string, any>;
    rounded?: Record<string, any>;
}
declare const buttonProps: ButtonProps;
export default buttonProps;
export type { ButtonProps };
