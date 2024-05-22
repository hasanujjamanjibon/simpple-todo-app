const taskEl = document.querySelector("#taskEl");
const addTask = document.querySelector("#addTask");
const taskContainer = document.querySelector("#taskContainer");
const textWarning = document.querySelector("#textWarning");

/* 
  
  */
addTask.addEventListener("click", () => {
  let newtask = taskEl.value;

  if (newtask === "") {
    return Toastify({
      text: "Please, Write Something",
      duration: 900,
    }).showToast();
  }

  if (textWarning) {
    textWarning.remove();
  }

  const taskId = Date.now(); // Generate a unique id based on timestamp
  taskContainer.innerHTML += `
      <div
        id="task-${taskId}"
        class="bg-white p-3 drop-shadow-xl rounded-md flex justify-center items-center"
      >
        <p class="flex-1 pe-4">
          ${newtask}
        </p>
        <img src="./img/delete.png" class="h-6 deleteBtn cursor-pointer" alt="Delete Task" />
      </div>
    `;

  return Toastify({
    text: "Thank You for adding",
    duration: 900,
  }).showToast();
});

// Event delegation for delete button clicks
taskContainer.addEventListener("click", (event) => {
  if (event.target && event.target.classList.contains("deleteBtn")) {
    const taskDiv = event.target.closest("div");
    taskDiv.remove();

    Toastify({
      text: "Task Deleted",
      duration: 900,
    }).showToast();
  }
  if (!taskContainer.children.length > 0) {
    console.log("No Data Found");
    taskContainer.innerHTML = `       <p id="textWarning" class="text-red-600 font-semibold text-xl text-center">
    No Data Available
  </p>`;
  }
});
