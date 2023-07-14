function getDataType(value){
    // код функции
    const type = typeof value
    return type

}

console.log(getDataType(22)) // number
console.log(getDataType('Hello, world!')) //string
console.log(getDataType(true)) //boolean
console.log(getDataType(null)) //object
console.log(getDataType(function() {})) //function
console.log(getDataType({country: "Russia"})) // object
console.log(getDataType(undefined)) //undefined