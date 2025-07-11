
var btn = document.getElementById("saveBtn");
var container = document.getElementById("container");

document.getElementById("studentForm").addEventListener("submit", function (event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var course = document.getElementById("course").value;
    var email = document.getElementById("email").value;
    var gender = document.querySelector('input[name="gender"]:checked').value;

    var row = document.createElement("tr");
    row.innerHTML =
        "<td>" + name + "</td>" +
        "<td>" + age + "</td>" +
        "<td>" + course + "</td>" +
        "<td>" + gender + "</td>" +
        "<td>" + email + "</td>" +
        "<td><button class='delete-btn' onclick='deleteItem(event)'>Delete</button></td>";

    container.append(row);
    document.getElementById("studentForm").reset();
});

function deleteItem(event) {
    event.target.parentElement.parentElement.remove();
}
