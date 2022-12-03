//1.Do the below programs in anonymous function & IIFE
//a)Print odd numbers in an array
//--------------------------------------------------------------------

//anonymous function 
var arr = [2,3,4,5,6,7,8,9]
var odd = function(arr)
{
    var result =[];
    for(var i=0;i<arr.length;i++)
    {
    if(arr[i]%2!=0)
    {
        result.push(arr[i]);
    }
}
return result;
}
console.log(odd(arr));

//output
[3, 5, 7, 9]


//ITFE function

(function odd(arr)
{
    var result =[];
    for(var i=0;i<arr.length;i++)
    {
    if(arr[i]%2!=0)
    {
        result.push(arr[i]);
    }
}
console.log(result);
}
)([2,4,5,7,11,17,6,8,])

//OUTPUT;
[5, 7, 11, 17]


// B) Convert all the strings to title caps in a string array

//Anonymous function
 let str =("guvi geeks".split(" "));
 function titleCase() {
 
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
  }
  console.log(str.join(" "));
}
titleCase()

//output
//Guvi Geeks
//----------------------------------------------------------------
//ITFE function

(function(str1)
{
    var result=[];
   str1=str1.split(" ");
   
   for(i=0;i<str1.length;i++)
   {
      result.push(str1[i].charAt(0).toUpperCase() + str1[i].slice(1));
   }
    return console.log(...result);
})("guvi geeks");

//output
//Guvi Geeks

//--------------------------X------------------------------//

//ANONYMOUS FUNCTION

//c)Sum of all numbers in an array
//Anonyms Function
let sum1=0;
let arr=function(arr1)
{   
   for(i=0;i<arr1.length;i++)
   {
       currentValue=arr1[i];
       sum1=sum1+currentValue;
       
       
   }
   
   console.log(sum1);
};
arr([1,2,3,4,5]);

//output
15

//IIFE FUNCTION
//Sum of all numbers in an array

(function sum(a,b)
{
    let result=200;
    let total=result+a+b;
    return console.log(total);
   
})(100,200)

//OUTPUT
500
//------------------------------------------------------------------
//anonymous function
//d)Return all the prime numbers in an array
let primenumber=function(){
    var arr = [2,5,17,18,20];
    
    arr = arr.filter((num) => {
      for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % 2 === 0) return false;
      }
      return true;
    });
    
    console.log(arr);
    };
    primenumber();

    //output
    [2, 5, 17]


//IIFE FUNCTION

(function(){
    var arr = [2, 3, 4, 5, 6, 7, 8, 9, 10];
    
    arr= arr.filter((num) => {
      for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
      }
      return true;
    });
    
    console.log(arr);
    })();

    //output
    [2, 3, 5, 7]


    //---------------------------------------------------------------
//e)Return all the palindromes in an array
//Anonyms Function

var arr1 = function(arr){
    if(arr===arr.split("").reverse().join(""))
    {
        return arr + " "+ "is palindrome";;
    }
    
    else
    {
        return arr + " "+ "not palindrome";
    }
};

let arr=["tamil","lion","malayalam","lil","abcdcba"];
result=arr.map(palindrome);
 console.log(result);

 //output
['tamil not palindrome',
'lion not palindrome',
'malayalam is palindrome',
 'lil is palindrome', 
'abcdcba is palindrome']


//IIFE Function
(palindrome1=function(arr1)
{
    if(arr1===arr1.split("").reverse().join(""))
    {
        return  arr1 + " "+ "is palindrome";;
    }
    
    else
    {
        return  arr1 + " "+ "not palindrome";;
    }
   
    
});console.log(arr.map(palindrome1));
(["tamil","lion","malayalam","lil","abcdcba"]);


// g.Remove duplicates from an array
 //anonymous function

 let duplicate= function()
 {
    let num = [1,1,2,2,4,5,9,10,9];
    let num1 = [...new Set(num)];
    
    console.log(num1);
    };
    duplicate();

//output;
[1, 2, 4, 5, 9, 10]

//IIFE FUNCTION

 (function duplicate(num1)
 {
   let result = [...new Set(num1)];
    
    console.log(result);
    })([1,1,2,2,4,5,9,10,9]);

 //OUTPUT
 [1, 2, 4, 5, 9, 10]

 

//h) Rotate an array by k times

  //anonymous function
  var rotate = function() {
    var num=[1,2,3,6,7,8,9];
     var k=5;
   for (let i = 0; i<k; i++) {
       num.unshift(num.pop()) ;
   }
  console.log(num);
};rotate();
//output
[3, 6, 7, 8, 9, 1, 2]

//IIFE FUNCTION

// IIFE function
(function(){
    var num=[1,2,3,6];
     let k=2;
   for (let i = 0; i < k; i++) {
       num.unshift(num.pop()) ;
   }
 console.log(num);
})();

//output
[3, 6, 1, 2]











//2.Do the below programs in arrow functions.
//a)Print odd numbers in an array

//Arrow functions: 

let odd = (arr)=>{
    let result =[];
        for(let i=0;i<arr.length;i++){
            if(arr[i]%2!=0){
               result.push(arr[i]);
            }
        }
        return result;
}
console.log(odd([1,2,3,4,5,11,12,13,15]));

//OUTPUT
[1, 3, 5, 11, 13, 15]

// b)Convert all the strings to title caps in a string array
//Arrow function

var titlecase=(str1)=>
{
    var result=[];
    for(i=0;i<str1.length;i++)
   {
      result.push(str1[i].charAt(0).toUpperCase() + str1[i].slice(1));
   }
   
   return console.log(...result);
}
var str1=titlecase("guvi geeks".split(" "));

//OUTPUT
//Guvi Geeks


//c)Sum of all numbers in an array

let sum =(a,b)=>
{
    let result=200;
    let total=result+a+b;
    return total;

}
console.log(sum(100,200))
console.log(sum(400,300))


//output
500
900

//Arrow function
//d)Return all the prime numbers in an array
var prime=()=>{
    var arr = [2,17,18,24,23,25,29,31];
       
       arr = arr.filter((num) => {
         for (var i = 2; i <= Math.sqrt(num); i++) {
           if (num % i === 0) return false;
         }
         return true;
       });
       console.log(arr);
   };
   prime();
    
//OUTPUT
[2, 17, 23, 29, 31]

//e)Return all the palindromes in an array

palindrome=(arr)=>{
    if(arr===arr.split("").reverse().join(""))
    {
        return arr +  " " + "is palindrome";
    }
    
    else
    {
        return arr + " "+ "not palindrome";
    }
};
let array=["tamil","lion","malayalam","lil","abcdcba"];
result=array.map(palindrome);
console.log(result);

//output
['tamil not palindrome',
 'lion not palindrome',
 'malayalam is palindrome',
  'lil is palindrome', 
'abcdcba is palindrome']
