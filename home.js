// var number1 = 67
// var number2 = 98
// var str1 = "this is a string!"


// // object data type
// var obj = {
//     anish: 99,
//     kiddo: 78,
//     dicu: 2
// }

// var arr = [1, 2, 3, 4, "string here", 67]
// // console.log(arr)
// var a = 10
// var b = 78
// console.log("The value of a+b is ", a+b)

// var c = b
// console.log(c)

// console.log(true || true)
// console.log(true || false)
// console.log(false || false)

function avg(a,b){
    c = (a+b)/2
    return c
}

c1 = avg(4,6)
c2 = avg(98,57)
// console.log(c1,c2)

/*
marks = 99
if(marks>=35 && marks<50){
    console.log("Passed with third class")
}else if(marks>=50 && marks<60){
    console.log("Passed with second class")
}else if(marks>=60 && marks<70){
    console.log("Passed with first class")
}else if(marks>=70 && marks<=100){
    console.log("Passsed with distinction")
}else if(marks<35){
    console.log("Failed")
}else{
    console.log("Please enter a valid score")
}
*/

var arr = [1,2,3,4,5,6]
/*for (i=0;i<arr.length;i++){
    console.log(arr[i])
}
*/

/*
j = 0
while (j<arr.length){
    console.log(arr[j])
    j++
}
*/

// for (x=0; x<arr.length; x++){
//     if (x==2){
//         continue
//     }
//     console.log(arr[x])
// }

// var nums = [1,2,3,4,"anish","kiddo",8,9]

// for (x=0; x<nums.length; x++){
//     if (nums[x] == "anish"){
//         console.log(nums[x])
//     }else if (nums[x] == "kiddo"){
//         console.log(nums[x])
//     }else{
//         continue
//     }
// }

//ARRAY METHODS
// let myArr = ["anish", "fan", 2, 8, true, null]
// console.log(myArr.length)
// // myArr.pop()
// // myArr.push("hello")

// console.log(myArr)


//STRING MEHTODS
let myString = "Yes, Anish is good boy in a boy person!"
// console.log(myString.length)
// console.log(myString.indexOf("good"))
// console.log(myString.lastIndexOf("boy"))
// console.log(myString.slice(0,3))

newString = myString.replace("Anish", "Kiddo")
// console.log(myString)
// console.log(newString)


//DATE METHODS
let myDate = new Date()
// console.log(myDate)
// console.log(myDate.getTime())
// console.log(myDate.getFullYear())
// console.log(myDate.getDay())
// console.log(myDate.getDate())


//DOM (DOCUMENT OBJECT MODEL) MANIPULATION
let elem = document.getElementById('clickId')
// console.log(elem)
elem.style.background = "yellow";

newElem = document.getElementsByClassName('container')
newElem[1].style.background = "pink";
newElem[1].style.margin = 0;
newElem[0].classList.add('text-success')
// console.log(newElem)

wish = document.getElementById("wish")
wish.classList.add("wish")

let bestJS = document.getElementById('newcomment')
bestJS.classList.add("bestJS")

let newJS = document.getElementsByClassName("container-fluid")
newJS[0].style.background = "black"
// console.log(newJS[0].innerHTML)
// console.log(newJS[0].innerText)

tn = document.getElementsByTagName("button")
// console.log(tn)
createdElement = document.createElement("p")
createdElement.innerHTML = "This is a created element"
tn[0].appendChild(createdElement)

createdElement2 = document.createElement("p")
createdElement2.innerHTML = "This is the second created element"
tn[0].replaceChild(createdElement2, createdElement)

//EVENTS IN JS
//ORDINARY WAY
function clicked(){
    console.log("The button was clicked")
}



//BETTER WAY USING ID
// clickId.addEventListener('click', function(){
//     console.log("This was clicked via the better way")
// })

// clickId.addEventListener('mouseover', function(){
//     console.log("I see the mouse here")
// })

// clickId.addEventListener('mouseout', function(){
//     console.log("Mouse out of Container");
// })



// prevHTML = document.getElementById("wish").innerHTML
// clickId.addEventListener("mousedown", function(){
//     document.getElementById("wish").innerHTML = "<b> We have clicked! </b>"
// })


// clickId.addEventListener("mouseup", function(){
//     document.getElementById("wish").innerHTML = prevHTML
// })



// ARROW FUNCTIONS
// sumArrow = (a, b) => {
//     return a+b
// }
// console.log(sumArrow(2,3))


// SET TIMEOUT & SET INTERVAL
printKaro = () => {
    console.log("Le kar diya print!")
}
// use clearInterval(clr)/clearTimeout(clr) to cancel setInterval/setTimeout
// clr = setTimeout(printKaro, 2000)

clickId.addEventListener('click', () => {
    clr2 = setInterval(printKaro, 2000)
})


// JSON NOTES
// newObject = {a: "anish", length: 1, insideObj: {b: 23}}
// objx = JSON.stringify(newObject)
// console.log(objx)

// parsed = JSON.parse(`{"a":"anish","length":1,"insideObj":{"b":23}}`)
// console.log(parsed)


// TEMPLATES LITERALS
a = 34
console.log(`The number is ${a}`)




