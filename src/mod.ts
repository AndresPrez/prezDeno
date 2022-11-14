import sortBy from "https://deno.land/x/lodash@4.17.15-es/sortBy.js";

export interface IPrez {
    name: string
    run: (...args: any[]) => Promise<any>;
}

const prezFn = {
    name: "prez",
    run: (inputArray: string[]) => {
        return sort(inputArray)
    }
}
