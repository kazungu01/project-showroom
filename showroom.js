const baseUrl="http://localhost:3000/vehicles"
const movieList=document.getElementById("cars")
const image=document.getElementById("image1")
const title=document.getElementById("title")
const speed=document.getElementById("speed")
const description=document.getElementById("car-info")
const pNum=document.getElementById("num-pieces")
const purchaseButton=document.getElementById('buy-vehicle')

purchaseButton.addEventListener('click',()=>{
    pNum.innerText=purchaseTickets(parseInt(pNum.innerText,10))
})

fetch(baseUrl)
.then(response => response.json())
.then(jsonData=>{
    displayTitles(jsonData)
    displayInfo(jsonData[0])
})

function displayTitles(arrayOfVehiclees)
{
    arrayOfVehiclees.forEach(vehiclee=>{
        const li=document.createElement("li")
        li.className="car-item"
        li.innerText=vehiclee.title
        li.style.cursor="cursor: pointer"
        movieList.append(li)
        li.addEventListener('click',()=>{
            displayInfo(vehiclee)
        })
    })
}
function displayInfo(vehicle)
{
    image.src=vehicle.image
    title.innerText=vehicle.title
    speed.innerText=vehicle.speed + " mph"
    description.innerText=vehicle.description
    pNum.innerText=vehicle.capacity-vehicle.pieces_sold +" pieces remaining"
}
function purchaseTickets(numberOfPieces)
{
    
    numberOfPieces-=1
    if(numberOfPieces>0)
    {
        return numberOfPieces +' pieces remaining'
    }
    else
    {
        return "sold out"
    }
}