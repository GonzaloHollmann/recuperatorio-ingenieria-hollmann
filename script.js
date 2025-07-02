function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();
    if (!taskText) return;
  
    const li = document.createElement("li");
    li.textContent = taskText;
    li.onclick = () => li.classList.toggle("completed");
  
    const btn = document.createElement("button");
    btn.textContent = "Eliminar";
    btn.onclick = (e) => {
      e.stopPropagation();
      li.remove();
    };
  
    li.appendChild(btn);
    document.getElementById("taskList").appendChild(li);
    input.value = "";
  }
  