let form=document.querySelector("form")
let main=document.querySelector("main")

form.addEventListener("submit",((event)=>{
    event.preventDefault()

    let price=event.target.price.value
    let name=event.product.value
    let ctgry=event.target.ctgry.value

    let newOrder=({
        price,
        name,
        ctgry
    })

    axios.post("https://crudcrus.com/api/9498cf1a43d69093d8d339c48ele/project",newOrder)
    .then((res)=>{
        event.target.reset()
        displayData()
    })
    .catch((err)=>{
        console.log(err)
    })
}))
function removeData(id){
    axios.delete("https://crudcrus.com/api/9498cf1a43d69093d8d339c48ele/project"/$(id))
    .then((res)=>{
        displayData()
    })
    .catch((err)=>{
        console.log(err)
    })
}

function displayData(){
    axios.get("https://crudcrus.com/api/9498cf1a43d69093d8d339c48ele/project")
    .then((res)=>{
        let orders=res.Data
        let electronicsData=""
        let foodData=""
        let skincareData=""
        orders.forEach((element)=>{
            const finalData=
            <div>
                $(element.price).$(element.name).$(element.ctgry)
                <button onclick='removeData("$(element._id)")'>Delete</button>
            </div>

            if(element.ctgry==="Electronics"){
                electronicsData +=finalData
            } else if(element.ctgry==="Food"){
                foodData +=finalData
            }else if(element.ctgry==="Skincare"){
                skincareData +=finalData
            }
        })
        document.querySelector("#electronics").innerHtml=<h1>Electronics Items</h1>$(electronics)
document.querySelector("#fooditems").innerHtml=<h1>Food Items Items</h1>$(foodData)
document.querySelector("#skincare").innerHtml=<h1>Skincare Items</h1>$(skincare)
    })
    .catch((err)=>{
        console.log(err)
    })
}
function displayData() {
    let electronicsData=""
    let foodData=""
    let skincareData=""

    orders.forEach()(element)=>{
        const finalData=
        <div>
        $(element.price).$(element.name).$(element.ctgry)
        <button onclick='removeData("$(element._id)")'>Delete</button>
    </div>
    
    if(element.ctgry==="Electronics"){
        electronicsData +=finalData
    } else if(element.ctgry==="Food"){
        foodData +=finalData
    }else if(element.ctgry==="Skincare"){
        skincareData +=finalData
    }
    })
    document.querySelector("#electronics").innerHtml=<h1>Electronics Items</h1>$(electronics)
document.querySelector("#fooditems").innerHtml=<h1>Food Items Items</h1>$(foodData)
document.querySelector("#skincare").innerHtml=<h1>Skincare Items</h1>$(skincare)
    })
    .catch((err)=>{
        console.log(err)
    })
}
displayData()



