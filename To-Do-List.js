// tham chiếu
let taskInput = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let taskList = document.getElementById("taskList");

// thêm sự kiện tác vụ
addBtn.addEventListener("click", addTask);

// thêm tác vụ
function addTask() {
    let taskText = taskInput.value.trim();

    if (taskText === "") return; // bỏ qua đầu vào trống

    // tạo mục danh sách
    let li = document.createElement("li");

    // khoảng văn bản tác vụ
    let span = document.createElement("span");
    span.textContent = taskText;

    // nút chỉnh sửa (edit)
    let editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = "edit";
    editBtn.onclick = function () {
        editTask(span);
    };

    // nút xóa
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete";
    deleteBtn.onclick = function () {
        deleteTask(li);
    };

    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = "";
}

// Xem nhiệm vụ
// Được xử lý tự động vì các mục được thêm vào động

// Chỉnh sửa Nhiệm vụ
function editTask(span) {
    let updatedText = prompt("Edit your task:", span.textContent);
    if (updatedText !== null && updatedText.trim() !== "") {
        span.textContent = updatedText.trim();
    }
}

// Xóa Nhiệm vụ
function deleteTask(li) {
    taskList.removeChild(li);
}
