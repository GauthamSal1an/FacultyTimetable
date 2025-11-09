document.querySelector("form[name='login']").addEventListener("submit", function (e) {
    e.preventDefault();

    const usn = document.querySelector("input[placeholder='USN']").value;
    const password = document.querySelector("input[placeholder='Password']").value;

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(user => user.usn === usn && user.password === password);

    if (user) {
        alert(`Welcome, ${user.name}!`);
        window.location.href = "index.html"; // Redirect to homepage
    } else {
        alert("Invalid USN or password.");
    }
});
