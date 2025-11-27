function validateLogin() {
    // lấy các phần tử
    let username = document.getElementById("username");
    let password = document.getElementById("password");
    let userError = document.getElementById("userError");
    let passError = document.getElementById("passError");
    let message = document.getElementById("message");

    // đặt lại kiểu
    userError.textContent = "";
    passError.textContent = "";
    username.classList.remove("invalid");
    password.classList.remove("invalid");
    message.textContent = "";

    let valid = true;

    // Xác thực Tên người dùng (không để trống)
    if (username.value.trim() === "") {
        userError.textContent = "Username cannot be empty.";
        username.classList.add("invalid");
        valid = false;
    }

   // Xác thực mật khẩu (tối thiểu 6 ký tự)
    if (password.value.length < 6) {
        passError.textContent = "Password must be at least 6 characters.";
        password.classList.add("invalid");
        valid = false;
    }

    // Nếu hợp lệ → Thông báo thành công
    if (valid) {
        message.style.color = "green";
        message.textContent = "Welcome, " + username.value + "!";
    } else {
        // Nếu không thành công → xóa các trường + thông báo lỗi
        username.value = "";
        password.value = "";
        message.style.color = "red";
        message.textContent = "Invalid credentials. Please try again.";
    }
}