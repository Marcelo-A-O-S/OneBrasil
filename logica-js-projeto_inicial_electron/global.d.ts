export {}

declare global {
    interface Window {
        api: {
            getNumber: (numeroMaximo: number) =>Promise<string | null>
        }
    } 
}