
  // Add row functionality
  function addRow(date, destination, transportation, notes) {
    event.preventDefault(); // Prevent form from submitting normally
    // Create new row and cells
    var row = document.createElement("tr");
    var dateCell = document.createElement("td");
    var destinationCell = document.createElement("td");
    var transportationCell = document.createElement("td");
    var notesCell = document.createElement("td");
    // Set cell values
    dateCell.textContent = date;
    destinationCell.textContent = destination;
    transportationCell.textContent = transportation;
    notesCell.textContent = notes;
    // Add cells to row
    row.appendChild(dateCell);
    row.appendChild(destinationCell);
    row.appendChild(transportationCell);
    row.appendChild(notesCell);
    // Add row to table body
    var scheduleBody = document.getElementById("schedule-body")
    scheduleBody.appendChild(row);
    // Clear input fields
    document.getElementById("date-input").value = "";
    document.getElementById("destination-input").value = "";
    document.getElementById("transportation-input").value = "";
    document.getElementById("notes-input").value = "";
  }
  function addRow(date, destination, transportation, notes) {
    event.preventDefault(); // Prevent form from submitting normally
    // Create new row and cells
    var row = document.createElement("tr");
    var dateCell = document.createElement("td");
    var destinationCell = document.createElement("td");
    var transportationCell = document.createElement("td");
    var notesCell = document.createElement("td");
    var actionCell = document.createElement("td"); // New cell for remove button
    // Set cell values
    dateCell.textContent = date;
    destinationCell.textContent = destination;
    transportationCell.textContent = transportation;
    notesCell.textContent = notes;
    // Add cells to row
    row.appendChild(dateCell);
    row.appendChild(destinationCell);
    row.appendChild(transportationCell);
    row.appendChild(notesCell);
    // Add remove button
    var removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", function() {
        removeRow(row);
    });
    actionCell.appendChild(removeButton);
    row.appendChild(actionCell);
    // Add row to table body
    var scheduleBody = document.getElementById("schedule-body");
    scheduleBody.appendChild(row);
    // Clear input fields
    document.getElementById("date-input").value = "";
    document.getElementById("destination-input").value = "";
    document.getElementById("transportation-input").value = "";
    document.getElementById("notes-input").value = "";
}

function removeRow(row) {
    row.remove();
}
  // Add row to table on form submit
  document.getElementById("add-row-form").addEventListener("submit", function(event) {
    var date = document.getElementById("date-input").value;
    var destination = document.getElementById("destination-input").value;
    var transportation = document.getElementById("transportation-input").value;
    var notes = document.getElementById("notes-input").value;
    addRow(date, destination, transportation, notes);
  });