const name = "kailas"
const repoCount = 50

// console.log(name + repoCount + " value") ;

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('kailas-kh-com')
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(typeof gameName)

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('h'));

const newString = gameName.substring(0,4)
console.log(newString)
console.log(gameName.substring(0,4))

const anotherString = gameName.slice(3, 12)
console.log(gameName.slice(3, 12))
console.log(anotherString)

const newStringOne = "   kailas  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))
console.log(url.includes('sundar'))
console.log(url.includes('com'))

console.log(gameName.split('-'));
