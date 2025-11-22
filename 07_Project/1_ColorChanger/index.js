const body = document.querySelector("body");
const btns = document.querySelectorAll('.button')

// console.log(btns); //nodeList of all buttons

btns.forEach((btn)=>{
    console.log(btn);
    btn.addEventListener('click', (e)=>{
        console.log(e); //event object: gives info about the event
        console.log(e.target); //gives the element on which event occurred
        switch(e.target.id){
            case 'grey':
                body.style.backgroundColor = e.target.id;
                break;
            case 'white':
                body.style.backgroundColor = e.target.id;
                break;
            case 'blue':
                body.style.backgroundColor = e.target.id;
                break;
            case 'yellow':
                body.style.backgroundColor = e.target.id;
                break;
            default:
                //no color change
                break;
        }
    })
})


