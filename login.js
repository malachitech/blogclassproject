if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
}else{
    ready()
}
const {log} = console


function ready(){


    // calling the api function
    logInUsers()
    // calling the api function ends



    const navLinksToggle = document.getElementsByClassName('nav-links-toggle')[0]
    const navLinksToggler = document.getElementById('nav-toggler')
    const navLinksTogglerClose = document.getElementById('nav-toggler-close')
    navLinksToggler.addEventListener('click', ()=>{
        navLinksToggle.classList.add('open')
    })

    navLinksTogglerClose.addEventListener('click', ()=>{
        navLinksToggle.classList.remove('open')
    })
}





//  calling the api and storing in the local storage
async function logInUsers(){
    const url = 'https://jsonplaceholder.typicode.com/users'
    try{
        const response = await fetch(url);
        const data = await response.json()
        log(data)
        localStorage.setItem('data', JSON.stringify(data))

        let loginBtn = document.getElementsByClassName('submit')[0]

    loginBtn.addEventListener('click', ()=>{

        let email = document.getElementById('email')
        let emailValue = email.value
        let tel = document.getElementById('tel')
        let telValue = tel.value
        // log(loginErrorMsg)

        for(let i = 0; i<data.length; i++){
            let backEndEmails = data[i].email

            let backEndPhoneNumbers = data[i].phone

            if((backEndEmails == emailValue) && (backEndPhoneNumbers == telValue)){
                window.location.href = "user.html"
                email.value = ""
                tel.value = ""
                return
            }
            
        }
            let loginErrorMsg = document.getElementsByClassName('loginErrorMsg')[0]
            loginErrorMsg.style.display = 'block'
        
        return
    })


    }catch(err){
        log(err)
    }
}


// const url = "https://jsonplaceholder.typicode.com/users"
// fetch(url)
// .then(Response => Response.json())
// .then(data => {

   
    
// })






