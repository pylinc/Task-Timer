document.addEventListener("DOMContentLoaded", () => {
    const signupForm = document.getElementById("signupForm");
    const loginForm = document.getElementById("loginForm");

    const API_BASE_URL = "http://localhost:5001/api";

    // Signup function
    if (signupForm) {
        signupForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            const email = document.getElementById("signupEmail").value;
            const password = document.getElementById("signupPassword").value;

            const res = await fetch(`${API_BASE_URL}/auth/signup`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password })
            });

            const data = await res.json();
            if (res.ok) {
                alert("Signup successful, please login");
                window.location.href = "login.html";
            } else {
                alert(data.message || "Signup failed");
            }
        });
    }

    // Login function
    if (loginForm) {
        loginForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            const email = document.getElementById("loginEmail").value;
            const password = document.getElementById("loginPassword").value;

            const res = await fetch(`${API_BASE_URL}/auth/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password })
            });

            const data = await res.json();
            if (res.ok) {
                localStorage.setItem("token", data.token);
                alert("Login successful");
                window.location.href = "dashboard.html";
            } else {
                alert(data.message || "Login failed");
            }
        });
    }
});