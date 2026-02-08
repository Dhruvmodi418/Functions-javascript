console.log("Functions Practise");

function name(person){
    console.log("This is "+person+ " good person");
    console.log("This is "+person+" good boy");
    console.log("This is "+person+" like this tshirt");
    console.log("This is "+person+" likes to drink coffee");
    console.log("This is "+person+" started doing coding");
}
name("Dhruv")
name("Viral")


function sum(a, b, c, d) {
    // console.log(a+b+c+d)    
    return a + b + c + d
}

firstresult = sum(4, 20, 8, 101);
secondresult = sum(5, 200, 558, 10);
thirdresult = sum(412, 203, 118, 25);

console.log("The sum of the given numbers is " + firstresult);
console.log("The sum of the given numbers is " + secondresult);
console.log("The sum of the given numbers is " + thirdresult);



// fucntion with default parameter 

function sum2(x, y, z = 100) {
    console.log("funtion is executed");
    return x + y + z

}

defaultparameter=sum2(10,25)

console.log("This is example of default parameter "+defaultparameter)


// Arrow function



const display=(x)=>{

    console.log("This is arrow funtion",x)
}

display(55);
display(155);
display(1255);

