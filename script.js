const taskEl = document.querySelector("#taskEl");
const addTask = document.querySelector("#addTask");
const taskContainer = document.querySelector("#taskContainer");
const textWarning = document.querySelector("#textWarning");

addTask.addEventListener("click", () => {
  let newtask = taskEl.value;
  console.log(newtask);
  if (newtask == "") {
    return Toastify({
      text: "Please, Write Something",
      duration: 900,
    }).showToast();
  }
  textWarning.remove();
  taskContainer.innerHTML += `<div
  class="bg-white p-3 drop-shadow-xl rounded-md flex justify-center items-center"
>
  <p class="flex-1 pe-4">
    ${newtask}
  </p>
  <img src="./img/delete.png" class="h-6" alt="" />
</div>
  `;
  return Toastify({
    text: "Thank You for adding",
    duration: 900,
  }).showToast();
});
