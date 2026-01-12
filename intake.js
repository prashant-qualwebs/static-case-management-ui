const form = document.getElementById("intakeForm");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const intakeData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        caseType: document.getElementById("caseType").value
    };

    const intakes = JSON.parse(localStorage.getItem("intakes")) || [];
    intakes.push(intakeData);
    localStorage.setItem("intakes", JSON.stringify(intakes));
    window.location.href = 'dashboard.html'
});
