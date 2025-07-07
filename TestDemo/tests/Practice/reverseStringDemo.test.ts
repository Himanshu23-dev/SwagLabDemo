
//Reverse string
function reverseDemo(value:string):string{

    return value.split(" ").map((word:string)=> word.split("").reverse().join("")).join(" ");

}

let value:string = "payal chaudhari";
const result:string = reverseDemo(value);
console.log(result);


//capital letter

function capLetter(str:string):string{

    return str.split(" ").map((word:string) => word[0].toUpperCase() + word.slice(1)).join(" ");
}

let str:string = "payal chaudhari";
const result1:string = capLetter(str);
console.log(result1)

//check word is palinedrome or not

function palindromeDemo(pali:string):boolean{

const result = pali.split("").reverse().join("");
return pali===result;

}


//check is polindrome or not
console.log(palindromeDemo("madam"));
console.log(palindromeDemo("payal"));
