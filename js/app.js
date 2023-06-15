//create class Task with constructor, which helps me to print all info

const allTasks = [];

class Task {
    constructor(image, task, description, importance, deadline) {
        this.image = image;
        this.task = task;
        this.description = description;
        this.importance = importance;
        this.deadline = deadline;
        allTasks.push(this);
    }
    //function, which print information in my grid. Each gard has its own infor. Constructor
    //helps me to chang it.

    printTask() {
        return `<div class="card" style="width: 18rem;">
  <img src="${this.image}" class="card-img-top all-images-style" alt="...">
  <div class="card-body">
    <h5 class="card-title">${this.task}</h5>
    <p class="card-text">${this.description}</p>
    <hr>
    <p>Priority level: <a class="priority">${this.importance}</a></p>
    <p>Deadline: ${this.deadline}</p>
      <hr>
    <button type="button" class="btn btn-primary btn-sm">Delete</button>
    <button type="button" class="btn btn-secondary btn-sm done-btn important-btn">Important</button>

   </div>
  </div>
</div>`
    }
}
//values for each card

let task1 = new Task("images/work.jpg", "Finish a project", "Check one more time all details and send to the team", "0", "2023-06-17");
let task2 = new Task("images/cooking.jpg", "Make a dinner", "Healthy and tasty dinner. Find a recipy", "0", "2023-06-13");
let task3 = new Task("images/boxing.jpg", "Boxing trainning", "Need to book a place for a trainning", "0", "2023-06-01");
let task4 = new Task("images/bike.jpg", "Bike trip", "Check an interesting places where to go by bike", "0", "2023-07-03");
let task5 = new Task("images/fruits.jpg", "Buy fruits", "Go to Farm Market to buy some fruits", "0", "2023-06-17");
let task6 = new Task("images/knitting.jpg", "Finish gift for mother", "Buy extra wolle and finish a pullover", "0", "2023-06-03");
let task7 = new Task("images/manicure.jpg", "Manicure", "Make an appointment, find nice design and color", "0", "2023-06-04");
let task8 = new Task("images/article.jpg", "Finish an article", "Send to the editor the last version of an article", "0", "2023-07-17");
let task9 = new Task("images/friends.jpg", "Meet girls for a drink", "Book a table for four person at 19:00pm", "0", "2023-06-10");

//with for....of loop print values in each card. With += they dont overwrite it but put extra card in grid

const tasksGrid = document.getElementById("plan-main");
for (tasksInfo of allTasks) {
    tasksGrid.innerHTML += tasksInfo.printTask();

}

//with forEach method function(click) works in all cards. Changing to array helps to use getElementsByClassName
//for array. Hace two nested if loops here. One for numbers (it doesnt go further than 5) and
//another for background color.

const btnsImportant = document.getElementsByClassName("important-btn");
Array.from(btnsImportant).forEach((button, i) => {
    button.addEventListener("click", function () {

        if (allTasks[i].importance < 5) {
            allTasks[i].importance++;

            if (allTasks[i].importance <= 1) {
                document.getElementsByClassName("priority")[i].style.backgroundColor = "green";
            }
            else if (allTasks[i].importance <= 3) {
                document.getElementsByClassName("priority")[i].style.backgroundColor = "yellow";
            }
            else if (allTasks[i].importance <= 5) {
                document.getElementsByClassName("priority")[i].style.backgroundColor = "red";
            }
        }
        document.getElementsByClassName("priority")[i].innerHTML = allTasks[i].importance;
    });
});


function sortByDeadline() {
    let sortedArray = allTasks.sort((a, b) => new Date(a.deadline) - new Date(b.deadline));
    tasksGrid.innerHTML = "";
    for (i of sortedArray) {
        tasksGrid.innerHTML += i.printTask();
    }
}
document.getElementById("sort-by-deadline").addEventListener("click", sortByDeadline)



// allTasks.sort((a, b) => a.importance - b.importance);
// console.table(allTasks.sort((a, b) => b.importance - a.importance));
