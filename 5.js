const number=[1,2,3,4,5,6,7,8,9];

let odd=0;
let even=0;

for(const num of number){

    if(num % 2 ===0){
        odd=odd+num;
    }
else{
    even=even+num
}

}console.log(even)
console.log(odd)