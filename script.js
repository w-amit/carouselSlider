fetch("https://jsonplaceholder.typicode.com/users")
  .then((data) => {
    // console.log(data);    // the data is in json format
    return data.json(); // converted to object
  })
  .then((objectData) => {
    console.log(objectData[0].id);
    let tableData = "";
    objectData.map((values) => {
      // values will contain all the data from the array
      tableData += `<tr>
<td>${values.id}</td>
<td>${values.name}</td>
<td>${values.username}</td>
<td>${values.email}</td>
<td>${values.address.street}</td>
<td>${values.address.suite}</td>
<td>${values.address.city}</td>
<td>${values.address.zipcode}</td>

<td>${values.phone}</td>
<td>${values.website}</td>
<td>${values.company.name}</td>
<td>${values.company.catchPhrase}</td>
<td>${values.company.bs}</td>
</tr>`;
    });
    document.getElementById("table_body").innerHTML = tableData;
  })
  .catch((err) => {
    console.log("Some error occured");
  });
