function addToDo(){
    let l = document.createElement("li");

    //list item 
    let i = document.getElementById("task-input").value;
    console.log(i);
    l.innerHTML=i;


    // ul item
    const ul = document.getElementById("todo-ul");

    ul.appendChild(l);
    //l.appendChild()

    //font awesome icon 

    let b = document.createElement("button");
    //b.textContent =" - ";
    b.classList.add("rem-btn");
    
    let ico = document.createElement("i");
    ico.classList.add("fas");
    ico.classList.add("fa-trash");

    l.appendChild(b);
    b.appendChild(ico);

    b.addEventListener("click", (e)=>{
        console.log("You clicked");
        par = e.target.parentNode;
        console.log(par);
        par.innerHTML="";
        
    })


}

