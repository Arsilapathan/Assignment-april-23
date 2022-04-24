document.querySelector('h1').innerHTML = `<img class="normal-size" src="https://i1.wp.com/godofindia.com/wp-content/uploads/2017/05/shahrukh-khan-20.jpg">`

const imageElement = document.querySelector('img')

imageElement.addEventListener('mouseover' , increaseSize)

function increaseSize(){
    imageElement.classList = 'large-size'
}

imageElement.addEventListener('mouseout' , originalSize)

function originalSize(){
    imageElement.classList = 'normal-size'
}

