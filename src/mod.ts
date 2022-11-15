import sortBy from "https://deno.land/x/lodash@4.17.15-es/sortBy.js";
// import { IPrez } from "../packages/utils/mod.ts";

const prezFn = {
    name: "prez",
    run: (inputArray: string[]) => {
        return sortBy(inputArray)
    }
}

export default prezFn
