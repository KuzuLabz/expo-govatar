
declare global {
    export interface Window {
        Go: any;
        generateAvatar: (username?: string, gender?: number) => Promise<{ avatar: string }>;
    }
}

declare module "*.wasm" {
    const content: string;
    export default content;
}

export { };