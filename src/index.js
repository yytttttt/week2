import "./styles.css";

document.getElementById("app").innerHTML = `

<table id="user-table">
  <tr>
    <th>Username</th>
    <th>Email</th>
    <th>Address</th>
    <th>Admin</th>
    <th>Image</th>
  </tr>
  <tr>
    <td>Webmaster</td>
    <td>example@email.com</td>
    <td>Demoland 123</td>
    <td>X</td>
  </tr>
  <tr>
    <td>User123</td>
    <td>example@email.com</td>
    <td>Userplace 321</td>
    <td>-</td>
  </tr>
  <tr>
    <td>AnotherUser222</td>
    <td>example@email.com</td>
    <td>AnotherPlace 21</td>
    <td>-</td>
  </tr>
</table>

<form id="user-form">
  <input type="text" id="input-username" placeholder="Username">
  <input type="text" id="input-email" placeholder="Email">
  <input type="text" id="input-address" placeholder="Address">
  <input type="checkbox" id="input-admin"> Admin
  <input type="file" id="input-image">
  <button id="submit-data">Submit</button>
</form>

<button id="empty-table">Empty table</button>
`;

document
  .getElementById("submit-data")
  .addEventListener("click", function (event) {
    event.preventDefault();

    var username = document.getElementById("input-username").value;
    var email = document.getElementById("input-email").value;
    var address = document.getElementById("input-address").value;
    var admin = document.getElementById("input-admin").checked ? "X" : "-";
    var imageFile = document.getElementById("input-image").files[0];
    var imageUrl = imageFile ? URL.createObjectURL(imageFile) : "";

    var table = document.getElementById("user-table");
    var rows = Array.from(table.rows);
    var existingRow = rows.find((row) => row.cells[0].innerText === username);

    if (existingRow) {
      existingRow.cells[1].innerText = email;
      existingRow.cells[2].innerText = address;
      existingRow.cells[3].innerText = admin;
      existingRow.cells[4].innerHTML = imageUrl
        ? `<img src="${imageUrl}" width="64" height="64">`
        : "";
    } else {
      var row = table.insertRow(-1);
      row.insertCell(-1).innerText = username;
      row.insertCell(-1).innerText = email;
      row.insertCell(-1).innerText = address;
      row.insertCell(-1).innerText = admin;
      row.insertCell(-1).innerHTML = imageUrl
        ? `<img src="${imageUrl}" width="64" height="64">`
        : "";
    }
  });

document.getElementById("empty-table").addEventListener("click", function () {
  var table = document.getElementById("user-table");
  while (table.rows.length > 1) table.deleteRow(1);
});
