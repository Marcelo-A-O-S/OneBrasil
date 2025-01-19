export {}

declare global {
    interface Window {
        api: {
            getNumber: () =>Promise<string | null>
        }
    } 
}