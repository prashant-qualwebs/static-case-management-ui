const container = document.getElementById("cardsContainer");
const intakes = JSON.parse(localStorage.getItem("intakes")) || [];

intakes.forEach((intake) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <h3>${intake.name}</h3>
        <p>Email: ${intake.email}</p>
        <p>Phone: ${intake.phone}</p>
        <p>Case: ${intake.caseType}</p>
    `;

    container.appendChild(card);
});
