const STORAGE_KEY = "task" 
const buttonEL = document.querySelector(".button")
console.log("hello")
const taskEL = document.querySelector(".addtask")
console.log("hello")
const inputEl = taskEL.querySelector(".addtask .text")
console.log("hello")
const viewEl = document.querySelectorAll(".view")
console.log("hello")
const imageEl = document.querySelector(".image")
const liEl = document.querySelector(".ul")
const labelEl = document.getElementById("#check")
// console.log("hello")
// const todoEl = document.querySelector(".child1")
// const progressEl = document.querySelector(".child2")
// const reviewEl = document.querySelector(".child3")
// const doneEl = document.querySelector(".child4")  
 
 createTask(event)
function createTask(event) {
    
    if ( event &&event.key && event.key !== "Enter")return
        const newTask = inputEl.value.trim()
        console.log("hello")
        if (newTask === "")return
           const taskArr = JSON.parse(localStorage.getItem("taskArr")) || []
           taskArr.push(newTask)
           localStorage.setItem("taskArr", JSON.stringify(taskArr))  
            console.log("hello")
        inputEl.value = "" 
        inputEl.focus()

        updateTask()

        console.log("hello")
    

}



function updateTask(){
    liEl.innerHTML = ""
    const tasks = JSON.parse(localStorage.getItem("taskArr"))||[]

    
    if (tasks.length === 0) {
        const li = document.createElement("li")
        li.innerText = "no tasks yet"
        liEl.appendChild(li)
        return
    }
    task.forEach((taskText,index) => {
        const check = document.createElement("input")
        check.type = "checkbox"

        const edit = document.createElement("img")
        edit.src = "icon/edit.png"
        edit.alt = "edit";
        edit.classList.add("edit");
        const trash = document.createElement("img")
        trash.src = "icon/delete_10901118.png"
        trash.alt = "trash";
        trash.classList.add("trash");
        const label = document.createElement("label")
        label.innerText = taskText
        const li = document.createElement("li")
        const image = document.createElement("div")
        const ul = document.createElement("ul")
       
        
        image.appendChild(edit)
        image.appendChild(trash)
        li.appendChild(image)
        li.appendChild(label)
        li.appendChild(check)
        listEl.appendChild(li)
    });
    console.log("hello")
  
}


taskEL.addEventListener("keydown", createTask)
updateTask()
console.log("hello")

viewEl.addEventListener("click", updateTask() )
console.log("hello")


// viewEl.addEventListener("click", deleteTask ({

// }))
// // todoEl.addEventListener("click",todotask({

// }))
// progressEl.addEventListener("click",progressTask({

// }))
// reviewEl.addEventListener("click",ReviewTask({

// }))
// doneEl.addEventListener("click",doneTask({

// }))