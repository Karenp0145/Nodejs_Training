

const ctof = (celsius) => (celsius  *  9/5) +  32;
const ftoc = (fahrenheit) => (fahrenheit  -  32) *  5/9;

module.exports  =  {
ftoc,
ctof
}