export interface IPrez {
    name: string
    run: (...args: any[]) => Promise<any>;
}
