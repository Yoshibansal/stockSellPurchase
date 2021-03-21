// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var rIndex, table = document.getElementById("table");

var sn = 0;
// check the empty input
function checkEmptyInput()
{
    var isEmpty = false,
        date = document.getElementById("date").value,
        iname = document.getElementById("iname").value,
        mandi = document.getElementById("mandi").value,
        prangan = document.getElementById("prangan").value,
        bahar = document.getElementById("bahar").value;
        bag = document.getElementById("bag").value,
        bajan = document.getElementById("bajan").value,
        rate = document.getElementById("rate").value;

    if(iname === ""){
        alert("Item name Connot Be Empty");
        isEmpty = true;
    }
    else if(date === ""){
        alert("Date Connot Be Empty");
        isEmpty = true;
    }
    else if(bag === ""){
        alert("Bag Connot Be Empty");
        isEmpty = true;
    }
    else if(bajan === ""){
        alert("Bajan Connot Be Empty");
        isEmpty = true;
    }
    else if(rate === ""){
        alert("Rate Connot Be Empty");
        isEmpty = true;
    }
    return isEmpty;
}

//add button
function myButton(id) {
    const div = document.createElement("div")
    var btn1 = document.createElement("BUTTON");
    var btn2 = document.createElement("BUTTON");
    btn2.setAttribute("deleteId", id)
    btn1.innerHTML = "edit";
    btn2.innerHTML = "delete";
    div.appendChild(btn1);
    div.appendChild(btn2);
    return div
}

// add Row
function addHtmlTableRow()
{
    // get the table by id
    // create a new row and cells
    // get value from input text
    // set the values into row cell's
    if(!checkEmptyInput()){
    var newRow = table.insertRow(table.length),
        cell1 = newRow.insertCell(0),
        cell2 = newRow.insertCell(1),
        cell3 = newRow.insertCell(2),
        cell4 = newRow.insertCell(3),
        cell5 = newRow.insertCell(4),
        cell6 = newRow.insertCell(5),
        cell7 = newRow.insertCell(6),
        cell8 = newRow.insertCell(7),
        cell9 = newRow.insertCell(8),
        cell10 = newRow.insertCell(9),
        cell11 = newRow.insertCell(10),
        date = document.getElementById("date").value,
        iname = document.getElementById("iname").value,
        mandi = document.getElementById("mandi").value,
        prangan = document.getElementById("prangan").value,
        bahar = document.getElementById("bahar").value;
        bag = document.getElementById("bag").value,
        bajan = document.getElementById("bajan").value,
        rate = document.getElementById("rate").value;

    sn = sn+1;
    cell1.innerHTML = sn;
    cell2.innerHTML = iname;
    cell3.innerHTML = mandi;
    cell4.innerHTML = prangan;
    cell5.innerHTML = bahar;
    cell6.innerHTML = bag;
    cell7.innerHTML = bajan;
    cell8.innerHTML = date;
    cell9.innerHTML = rate;
    cell10.innerHTML = (bajan*rate).toFixed(2);
    cell11.appendChild(myButton(table.rows.length - 2))
    newRow.setAttribute("id", `${table.rows.length - 2}`)

    // call the function to set the event to the new row
    selectedRowToInput();
}
}

// display selected row data into input text
function selectedRowToInput()
{

    for(var i = 1; i < table.rows.length; i++)
    {
        table.rows[i].onclick = function()
        {
          // get the seected row index
          rIndex = this.rowIndex;
          document.getElementById("date").value = this.cells[1].innerHTML;
          document.getElementById("iname").value = this.cells[2].innerHTML;
          document.getElementById("mandi").value = this.cells[3].innerHTML;
          document.getElementById("prangan").value = this.cells[4].innerHTML;
          document.getElementById("bahar").value = this.cells[5].innerHTML;
          document.getElementById("bag").value = this.cells[6].innerHTML;
          document.getElementById("bajan").value = this.cells[7].innerHTML;
          document.getElementById("rate").value = this.cells[8].innerHTML;
          document.getElementById("amount").value = this.cells[9].innerHTML;

        };
    }
}
selectedRowToInput();

function editHtmlTbleSelectedRow()
{
    var date = document.getElementById("date").value,
        iname = document.getElementById("iname").value,
        mandi = document.getElementById("mandi").value,
        prangan = document.getElementById("prangan").value,
        bahar = document.getElementById("bahar").value;
        bag = document.getElementById("bag").value,
        bajan = document.getElementById("bajan").value,
        rate = document.getElementById("rate").value;
   if(!checkEmptyInput()){
    // table.rows[rIndex].cells[0].innerHTML = ;
    table.rows[rIndex].cells[1].innerHTML = date;
    table.rows[rIndex].cells[2].innerHTML = iname;
    table.rows[rIndex].cells[3].innerHTML = mandi;
    table.rows[rIndex].cells[4].innerHTML = prangan;
    table.rows[rIndex].cells[5].innerHTML = bahar;
    table.rows[rIndex].cells[6].innerHTML = bag;
    table.rows[rIndex].cells[7].innerHTML = bajan;
    table.rows[rIndex].cells[8].innerHTML = rate;
    table.rows[rIndex].cells[9].innerHTML = amount;
  }
}

function removeSelectedRow()
{

    table.deleteRow(rIndex);
    // clear input text
    document.getElementById("date").value = "",
    document.getElementById("iname").value = "",
    document.getElementById("mandi").value = "",
    document.getElementById("prangan").value = "",
    document.getElementById("bahar").value = "";
    document.getElementById("bag").value = "",
    document.getElementById("bajan").value = "",
    document.getElementById("rate").value = "",
    document.getElementById("amount").value = "";
}
