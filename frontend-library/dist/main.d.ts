import type { App } from 'vue';
interface appOptions {
    customTheme?: Record<string, any>;
    colorMode?: 'light' | 'dark';
}
declare const _default: {
    install: (app: App, options: appOptions) => void;
};
export default _default;
