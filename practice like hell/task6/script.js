var input = document.querySelector("input");
var people = document.querySelector(".people");

var data = [
    {name:"srikar", src:"https://images.unsplash.com/photo-1706558425696-b0f156d79637?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8"},
    {name:"harika", src:"https://images.unsplash.com/photo-1706558427659-027bdb47abc0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D"},
    {name:"harshitha", src:"https://images.unsplash.com/photo-1681037717180-1c307e85130e?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"luffy", src:"https://images.unsplash.com/photo-1621478374422-35206faeddfb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bHVmZnl8ZW58MHx8MHx8fDA%3D"}
]

let per = "";

data.forEach(element => {
    per+=`<div class="person">
        <div class="img">
            <img src="${element.src}" alt="">
        </div>
        <h3>${element.name}</h3>
    </div>`
});

people.innerHTML = per;

input.addEventListener("input", ()=>{
    var matching = data.filter((e)=>{
        return e.name.startsWith(input.value);
    })
    var newuser = "";
    matching.forEach(element => {
        newuser+=`<div class="person">
            <div class="img">
                <img src="${element.src}" alt="">
            </div>
            <h3>${element.name}</h3>
        </div>`
    });
    
    people.innerHTML = newuser;
})
