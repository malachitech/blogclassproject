const {log}= console





//  UI : the displays on web pages
// modal toggler


const modalToggler = document.getElementsByClassName('openModal')[0]
const myModal = document.getElementById('myModal')
const navTogglerClose = document.getElementById('nav-toggler-close')
const discard = document.getElementById('discard')



modalToggler.addEventListener('click', ()=>{
    myModal.classList.add('myModalOpened')
    myModal.style.zIndex = '99'
    document.body.style.backgroundImage = 'linear-gradient(to bottom, rgba(0,0,0,0.8) 0%,rgba(0,0,0,0.8) 100%)'
})

navTogglerClose.addEventListener('click', () => {
    myModal.classList.remove('myModalOpened')
    document.body.style.backgroundImage = 'none'
})
// discard.addEventListener('click', () => {
//     myModal.classList.remove('myModalOpened')
//     document.body.style.backgroundImage = 'none'
// })



// modal data handller

function modalContent(){
    let modalTitle = document.getElementById('modal-title')
     modalTitleValue = modalTitle.value 

    let date = document.getElementById('date')
    let dateValue = date.value

    let textarea = document.getElementById('textarea')
    let textAreaValue = textarea.value
        
    let addPost = document.getElementById('addPost')


    let cards = document.getElementsByClassName('cards')[0]
    // log(cards)
    // for(let i=0; i<cards.length; i++){
        // let card = cards[i]
        let card =  document.createElement('div')
        card.className = 'card'

        card.innerHTML = `
        <div class="title">
            <h3>${modalTitleValue}</h3>
            <p class="date">
                <time datetime="">${dateValue}</time>
            </p>
        </div>
        
        <p class="cardContent">
            ${textAreaValue}
        </p>
        
        <div class="controls">
            <div class="rightcardcontrol">
                <a href="#" onclick="addToFavorite()"><i id="addToFavorite" class="fa-solid fa-star"></i></a>
                <a href="#" id="removeModalContent" onclick="removeModalContent()"><i class="fa-solid fa-trash-can"></i></a>           
            </div>
            
            <div class="leftcardcontrol">
                <a href="#" id="cardToggle"><i class="fa-solid fa-ellipsis-vertical"></i></a>
                <ul id="cardToggleUl" class="cardToggleUl">
                    <a href=""><li id="personallightBlue">Personal</li></a>
                    <a href=""><li id="workOrange">Work</li></a>
                    <a href=""><li id="socialBlue">Social</li></a>
                    <a href=""><li id="importantRed">Important</li></a> 
                </ul>  
            </div>
        </div>
        
        
    `
    // log(card)

    cards.appendChild(card)
    myModal.classList.remove('myModalOpened')
    document.body.style.backgroundImage = 'none'
    clearModalValues()
    // addToFavorite()

    card.getElementsByClassName("fa-ellipsis-vertical").addEventListener('click', toggleCardList)

    }

    

    // })
    
// }

function removeModalContent(){

    let  removeModalContent = document.getElementById('removeModalContent')

    removeModalContent.parentElement.parentElement.parentElement.remove()

    return
}


function clearModalValues(){
    let modalTitle = document.getElementById('modal-title')
     modalTitleValue = modalTitle.value 

    let date = document.getElementById('date')
    let dateValue = date.value

    let textarea = document.getElementById('textarea')
    let textAreaValue = textarea.value

    modalTitle.value =""
    date.value =""
    textarea.value =""
    return
} 

function addToFavorite(){
    let addToFavorite = document.getElementById('addToFavorite')
    addToFavorite.style.color = 'red'
    return
}




let personallightBlue = document.getElementById('personallightBlue')
let workOrange = document.getElementById('workOrange')
let socialBlue = document.getElementById('socialBlue')
let importantRed = document.getElementById('importantRed')
let cardToggle = document.getElementById('cardToggle')


function toggleCardList(e){
    let cardToggler = e.target.parentElement.innerHTML
    log(cardToggler)

    for(let i = 0;  i<cardToggler.length; i++){
        let cardToggleUl = document.getElementById('cardToggleUl')
        log(cardToggleUl)
        cardToggleUl.classList.toggle('opencardToggleUl')
        log(cardToggleUl)
    }

   
}
