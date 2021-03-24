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

var table = document.getElementById("table");

// check the empty input
function checkEmptyInput(date, name, bag, bajan, rate, balance, transport, gadi_no, bhada)
{
    var isEmpty = false

    if(name === ""){
        alert("Item name Connot Be Empty");
        isEmpty = true;
    }
    else if(date === ""){
        alert("Date Connot Be Empty");
        isEmpty = true;
    }
    else if(balance === ""){
        alert("balance Connot Be Empty");
        isEmpty = true;
    }
    else if(transport === ""){
        alert("Transport Connot Be Empty");
        isEmpty = true;
    }
    else if(gadi_no === ""){
        alert("gadi_no Connot Be Empty");
        isEmpty = true;
    }
    return isEmpty;
}

// add Row

function add_row()
{
    let date = document.getElementById("date").value
    let name = document.getElementById("iname").value
    let bag = document.getElementById("bag").value
    let bajan = document.getElementById("bajan").value
    let rate = document.getElementById("rate").value
    let balance = document.getElementById("balance").value
    let transport = document.getElementById("transport").value
    let gadi_no = document.getElementById("gadi_no").value
    let bhada = document.getElementById("bhada").value

    if(!checkEmptyInput(date, name, bag, bajan, rate, balance, transport, gadi_no, bhada)){
        var table=document.getElementById("table");
        var table_len=(table.rows.length);
        table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='id_row"+table_len+"'>"+table_len+"</td><td id='name_row"+table_len+"'>"+name+"</td><td id='bag_row"+table_len+"'>"+bag+"</td><td id='bajan_row"+table_len+"'>"+bajan+"</td><td id='rate_row"+table_len+"'>"+rate+"</td><td id='balance_row"+table_len+"'>"+balance+"</td><td id='transport_row"+table_len+"'>"+transport+"</td><td id='date_row"+table_len+"'>"+date+"</td><td id='gadiNo_row"+table_len+"'>"+gadi_no+"</td><td id='bhada_row"+table_len+"'>"+bhada+"</td><td class='buttonsWrapper'><input type='button' id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Save' class='save' onclick='save_row("+table_len+")'> <input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'></td></tr>";
    
        date = "", name="", bag="", bajan="", rate="", balance="", transport="", date="", gadi_no="", bhada=""
        modal.style.display = "none";
    }
}

//Delete a row
function delete_row(no)
{
 document.getElementById("row"+no+"").outerHTML="";
}

//Edit a row
function edit_row(no)
{
 document.getElementById("edit_button"+no).style.display="none";
 document.getElementById("save_button"+no).style.display="block";

 let date = document.getElementById("date_row"+no)
 let name = document.getElementById("name_row"+no)
 let bag = document.getElementById("bag_row"+no)
 let bajan = document.getElementById("bajan_row"+no)
 let rate = document.getElementById("rate_row"+no)
 let balance = document.getElementById("balance_row"+no)
 let transport = document.getElementById("transport_row"+no)
 let gadi_no = document.getElementById("gadiNo_row"+no)
 let bhada = document.getElementById("bhada_row"+no)

 name.innerHTML="<input type='text' id='name_text"+no+"' value='"+name.innerHTML+"'>";
 bag.innerHTML="<input type='number' id='bag_text"+no+"' value='"+bag.innerHTML+"'>";
 bajan.innerHTML="<input type='number' id='bajan_text"+no+"' value='"+bajan.innerHTML+"'>";
 rate.innerHTML="<input type='number' id='rate_text"+no+"' value='"+rate.innerHTML+"'>";
 balance.innerHTML="<input type='number' id='balance_text"+no+"' value='"+balance.innerHTML+"'>";
 transport.innerHTML="<input type='text' id='transport_text"+no+"' value='"+transport.innerHTML+"'>";
 date.innerHTML="<input type='date' id='date_text"+no+"' value='"+date.innerHTML+"'>";
 gadi_no.innerHTML="<input type='number' id='gadiNo_text"+no+"' value='"+gadi_no.innerHTML+"'>";
 bhada.innerHTML="<input type='number' id='bhada_text"+no+"' value='"+bhada.innerHTML+"'>";

}


function save_row(no)
{
    let date = document.getElementById("date_text"+no).value
    let name = document.getElementById("name_text"+no).value
    let bag = document.getElementById("bag_text"+no).value
    let bajan = document.getElementById("bajan_text"+no).value
    let rate = document.getElementById("rate_text"+no).value
    let balance = document.getElementById("balance_text"+no).value
    let transport = document.getElementById("transport_text"+no).value
    let gadi_no = document.getElementById("gadiNo_text"+no).value
    let bhada = document.getElementById("bhada_text"+no).value

    document.getElementById("date_row"+no).innerHTML = date
    document.getElementById("name_row"+no).innerHTML = name
    document.getElementById("bag_row"+no).innerHTML = bag
    document.getElementById("bajan_row"+no).innerHTML = bajan
    document.getElementById("rate_row"+no).innerHTML = rate
    document.getElementById("balance_row"+no).innerHTML = balance
    document.getElementById("transport_row"+no).innerHTML = transport
    document.getElementById("gadiNo_row"+no).innerHTML = gadi_no
    document.getElementById("bhada_row"+no).innerHTML = bhada

 document.getElementById("edit_button"+no).style.display="block";
 document.getElementById("save_button"+no).style.display="none";
}


