// Sample data for lawsuits
const lawsuits = [
    {
        caseNumber: "2025-001",
        dateFiled: "2025-01-01",
        plaintiffs: "John Doe",
        court: "Federal Court",
        status: "Open"
    },
    {
        caseNumber: "2025-002",
        dateFiled: "2025-01-10",
        plaintiffs: "Jane Smith",
        court: "State Court",
        status: "Closed"
    }
];

// Populate lawsuit stats and table
function updateDashboard() {
    const totalLawsuits = lawsuits.length;
    const openLawsuits = lawsuits.filter(lawsuit => lawsuit.status === "Open").length;
    const closedLawsuits = lawsuits.filter(lawsuit => lawsuit.status === "Closed").length;

    document.getElementById("totalLawsuits").innerText = totalLawsuits;
    document.getElementById("openLawsuits").innerText = openLawsuits;
    document.getElementById("closedLawsuits").innerText = closedLawsuits;

    const tableBody = document.getElementById("lawsuitsTable").querySelector("tbody");
    tableBody.innerHTML = "";

    lawsuits.forEach(lawsuit => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${lawsuit.caseNumber}</td>
            <td>${lawsuit.dateFiled}</td>
            <td>${lawsuit.plaintiffs}</td>
            <td>${lawsuit.court}</td>
            <td>${lawsuit.status}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Search functionality
function searchLawsuits() {
    const query = document.getElementById("search").value.toLowerCase();
    const filteredLawsuits = lawsuits.filter(lawsuit =>
        lawsuit.caseNumber.toLowerCase().includes(query) ||
        lawsuit.plaintiffs.toLowerCase().includes(query)
    );

    const tableBody = document.getElementById("lawsuitsTable").querySelector("tbody");
    tableBody.innerHTML = "";

    filteredLawsuits.forEach(lawsuit => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${lawsuit.caseNumber}</td>
            <td>${lawsuit.dateFiled}</td>
            <td>${lawsuit.plaintiffs}</td>
            <td>${lawsuit.court}</td>
            <td>${lawsuit.status}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Initialize dashboard
updateDashboard();
