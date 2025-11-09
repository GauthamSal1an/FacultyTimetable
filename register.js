document.querySelector("form[name='login']").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.querySelector("input[placeholder='Name']").value;
    const email = document.querySelector("input[placeholder='Email']").value;
    const usn = document.querySelector("input[placeholder='USN']").value;
    const password = document.querySelector("input[placeholder='Password']").value;

    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if USN already exists
    if (users.some(user => user.usn === usn)) {
        alert("User already registered with this USN.");
        return;
    }

    users.push({ name, email, usn, password });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration successful!");
    window.location.href = "login.html"; // Redirect to login
});
