const counterText=document.querySelector('#item-count')
const plusBtn= document.querySelectorAll('.add')
const subBtn= document.querySelectorAll('.subtract')

const forwardBtn=document.querySelector('#frwd-arrow')
const backwardBtn=document.querySelector('#bkwd-arrow')

const commentBoard=document.querySelector('#post')
const postBtn= document.querySelector('form')

const restBtn= document.querySelector('#rest-button')
const seedBtn=document.querySelector('#seed-button')
const orbBtn=document.querySelector('#orb-button')
const throwBtn=document.querySelector('#throw-button')
const wandBtn=document.querySelector('#wand-button')
const wearBtn=document.querySelector('#wear-button')

const itemDisplay=document.querySelector('#item-display')

const kecBtn=document.querySelector('#kecleon')

const baseURL='http://localhost:4000'
let count=0


for (var i=0;i<plusBtn.length; i++){
    plusBtn[i].addEventListener('click',()=>{
        count++
        counterText.textContent=count
    })
} 
for (var i=0;i<subBtn.length; i++){
    subBtn[i].addEventListener('click',()=>{
        if(count<= 0){
            count=0
        }else
        count--
        counterText.textContent=count
    })
} 

const getDialog = () => {
    axios.get("http://localhost:4000/dialog")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

function getEightItems(){
    

}
function deletePost(id){
    axios.delete(`${baseURL}/comments/${id}`)
    .then(()=> getComments())
    .catch(err => console.log(err))
}


function getRestItems(){
    itemDisplay.innerHTML=''

    axios.get(`${baseURL}/items/Restoring`)
        .then(res=>{
            res.data.forEach(item=>{
            let itemCard=`<figure id="item-card" >

            <img alt="item" id="item-pic" src="${item.photo}" />
            <div id="item-name">${item.name}</div>

            <figcaption>
            <button class= "subtract" >-</button>
            <div id="item-price">
                <div>${item['price']}(G)</div>
            </div>
            <button class="add">+</button>
            </figcaption>

        </figure>`

        itemDisplay.innerHTML+= itemCard
        })
    })
}

function getSeeds(){
    itemDisplay.innerHTML=''

    axios.get(`${baseURL}/items/Seeds`)
        .then(res=>{
            res.data.forEach(item=>{
            let itemCard=`<figure id="item-card">

            <img alt="item" id="item-pic" src="${item.photo}" />
            <div id="item-name">${item.name}</div>

            <figcaption>
            <button class="subtract">-</button>
            <div id="item-price">
                <div>${item['price']}(G)</div>
            </div>
            <button class="add">+</button>
            </figcaption>

        </figure>`

        itemDisplay.innerHTML+= itemCard
        })
    })
}

function getOrbs(){
    itemDisplay.innerHTML=''

    axios.get(`${baseURL}/items/Orbs`)
        .then(res=>{
            res.data.forEach(item=>{
            let itemCard=`<figure id="item-card">

            <img alt="item" id="item-pic" src="${item.photo}" />
            <div id="item-name">${item.name}</div>

            <figcaption>
            <button class="subtract">-</button>
            <div id="item-price">
                <div>${item['price']}(G)</div>
            </div>
            <button class="add">+</button>
            </figcaption>

        </figure>`

        itemDisplay.innerHTML+= itemCard
        })
    })
}

function getThowItems(){
    itemDisplay.innerHTML=''

    axios.get(`${baseURL}/items/Throwing`)
        .then(res=>{
            res.data.forEach(item=>{
            let itemCard=`<figure id="item-card">

            <img alt="item" id="item-pic" src="${item.photo}" />
            <div id="item-name">${item.name}</div>

            <figcaption>
            <button class="subtract">-</button>
            <div id="item-price">
                <div>${item['price']}(G)</div>
            </div>
            <button class="add">+</button>
            </figcaption>

        </figure>`

        itemDisplay.innerHTML+= itemCard
        })
    })
}

function getWands(){
    itemDisplay.innerHTML=''

    axios.get(`${baseURL}/items/Wands`)
        .then(res=>{
            res.data.forEach(item=>{
            let itemCard=`<figure id="item-card">

            <img alt="item" id="item-pic" src="${item.photo}" />
            <div id="item-name">${item.name}</div>

            <figcaption>
            <button class="subtract">-</button>
            <div id="item-price">
                <div>${item['price']}(G)</div>
            </div>
            <button class="add">+</button>
            </figcaption>

        </figure>`

        itemDisplay.innerHTML+= itemCard
        })
    })
}

function getWearItems(){
    itemDisplay.innerHTML=''

    axios.get(`${baseURL}/items/Wearable`)
        .then(res=>{
            res.data.forEach(item=>{
            let itemCard=`<figure id="item-card">

            <img alt="item" id="item-pic" src="${item.photo}" />
            <div id="item-name">${item.name}</div>

            <figcaption>
            <button class="subtract">-</button>
            <div id="item-price">
                <div>${item['price']}(G)</div>
            </div>
            <button class="add">+</button>
            </figcaption>

        </figure>`

        itemDisplay.innerHTML+= itemCard
        })
    })
}


function getComments(){
    commentBoard.innerHTML=''

    axios.get(`${baseURL}/comments`)
        .then(res=> {
            res.data.forEach(comment=>{
                let commentCard=`<div id="post">
                     <img alt="display-pic" class="comment" src= "${comment.photo}" id="display-pic"></p>
                     <p class="comment" id="display-name">${comment.name}</p>
                     <p class="comment" id="display-comment">${comment.posting}</p>
                     <button onclick="deletePost(${comment['id']})">Delete</button>
                     </div>`

                commentBoard.innerHTML+= commentCard
            })
        })
}

function submitHandler(e){
    e.preventDefault()

    let picURL = document.querySelector('#url_pic')
    let nameInput= document.querySelector('#name-1')
    let textArea=document.querySelector('textarea')

    let body={
        name:nameInput.value,
        photo:picURL.value,
        comment:textArea.value
    }
    axios.post(`${baseURL}/comments`, body)
     .then(()=>{ 
        nameInput.value=''
        picURL.value=''
        textArea.value=''
        getComments()
     })

    
}


getComments()
getRestItems()

postBtn.addEventListener('submit', submitHandler)
restBtn.addEventListener('click',getRestItems)
seedBtn.addEventListener('click',getSeeds)
orbBtn.addEventListener('click', getOrbs)
throwBtn.addEventListener('click', getThowItems)
wandBtn.addEventListener('click', getWands)
wearBtn.addEventListener('click', getWearItems)

kecBtn.addEventListener('click', getDialog)