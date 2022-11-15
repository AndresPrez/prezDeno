import sortBy from "https://deno.land/x/lodash@4.17.15-es/sortBy.js";
import { IPrez } from "https://deno.land/x/prezdeno_1@v1.0.2/utils/mod.ts";

const prezFn: IPrez = {
    name: "prez",
    run: (inputArray: string[]) => {
        return sortBy(inputArray)
    }
}

export default prezFn
