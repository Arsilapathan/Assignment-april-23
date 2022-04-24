
function buttonIsClicked(){
    console.log("button was clicked")

    for (let i = 0; i < 5; i++) {
        console.log(i)
    }

    console.log("function finished")
}


function mulBy3(virat){
    let x = virat*3
    return x
}

function mulEachElementBy3(arr){
    let y = []
    for (let i = 0; i < arr.length ; i++) {
        const answer = mulBy3(arr[i])
        y.push(answer)
    }
    return y
}

const x = [11,21,31,41,51]
const y = [1,2,3,4,5]
const z = [8,7,6,5,]

const result1 = mulEachElementBy2(x)
const result2 = mulEachElementBy2(y)
const result3 = mulEachElementBy2(z)
 console.log(result1)
 console.log(result2)
 console.log(result3)


const obj = {
    name: "geek",
    age: 16,
    class: "10th",
    subjects: ['maths', 'english', 'chem']
}


for(let key in obj){
    console.log(key, obj[key])
}

 const x = [11,21,31,41,51]
const xx = [1,2,3,4]

for(let element of x){
    console.log(element)
}


const arr= [1,2,3,4,5]

const myArrElement = document.querySelector('.my-arr')

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    const newElement = document.createElement('p')
    newElement.innerText = element
    myArrElement.appendChild(newElement)
    
}