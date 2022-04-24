const nameElement = document.getElementById('name')
const email = document.getElementById('email')
const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirm-password')
const buttonElement = document.getElementById('submit-btn')
const nameSmall = document.getElementById('name-small')

const entireForm = document.querySelector('form')


entireForm.addEventListener('submit', submitForm)



function buttonClick(){
    console.log("button is clicked")
}


function submitForm(virat){
    virat.preventDefault()

   

    if(password.value === "" ){
        console.log("password is Empty")
        password.classList = "error"
    }

    if(confirmPassword.value === ""){
        console.log("confirm password is Empty")
        confirmPassword.classList = "error"
    }

     if(password.value !== confirmPassword.value){
         console.log("confirm password is not the same as password")
         confirmPassword.classList = "error"
         password.classList = "error"
    }

    const characters = ['@', '$', '#', "!", 'A', 'B']

     if(password.value.includes("@") === false || password.value.includes("$") === false || password.value.includes("#") === false || password.value.includes(".") === false){
        console.log("password does not contain @ or $ or # or .")
     }

    let counter = 0
    for(let i=0; i<characters.length;i++){
        if(password.value.includes(characters[i]) === false){
            // console.log("error")
            counter++
            console.log(characters[i], " - ", counter)
            // password.classList = "error"
        }
    }

    console.log("counter - ", counter)

    if(counter === characters.length){
        console.log("error 222")
    }else{
        console.log('password satisfies the conditions')
    }

    if(password.value === confirmPassword.value){
        document.querySelector('.container').innerHTML = `
        <p> thanks for submitting</p>
        `
    }

}

