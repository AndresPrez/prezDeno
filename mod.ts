import prezFn from "./packages/core/mod.ts"

const inputArray = JSON.parse(Deno.args[0])

const results = prezFn.run(inputArray)

console.log('DEBUG:results:', results)
