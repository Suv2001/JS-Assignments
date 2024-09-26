function display(num1, num2, add, even){
    let sum = add(num1, num2);
    
    setTimeout(()=>{
        console.log("The sum of two numbers is: ",sum);
    },3000);

    setTimeout(()=>{
        console.log(even(sum));
    },1000);
}

function add(num1,num2){
    return num1+num2;
}

function even(sum){
    if(sum % 2 == 0){
        return "The sum of two number is even";
    } else {
        return "The sum of two number is odd";
    }
}

display(10,20,add,even);