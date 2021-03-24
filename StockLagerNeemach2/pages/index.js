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

function logout(){
    window.onbeforeunload = function() { return "Sure?"; };
    window.location.replace("../login.html");
}

var rIndex, table = document.getElementById("table");

var sn = 0;
// check the empty input
function checkEmptyInput(date,name,mandi,prangan,bahar,bag,bajan,rate)
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


//Add a new row
function add_row()
{
    let date = document.getElementById("date").value
    let name = document.getElementById("iname").value
    let mandi = document.getElementById("mandi").value
    let prangan = document.getElementById("prangan").value
    let bahar = document.getElementById("bahar").value
    let bag = document.getElementById("bag").value
    let bajan = document.getElementById("bajan").value
    let rate = document.getElementById("rate").value

    if(!checkEmptyInput(date,name,mandi,prangan,bahar,bag,bajan,rate)){
        var table=document.getElementById("table");
        var table_len=(table.rows.length);
        table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='id_row"+table_len+"'>"+table_len+"</td><td id='name_row"+table_len+"'>"+name+"</td><td id='mandi_row"+table_len+"'>"+mandi+"</td><td id='prangan_row"+table_len+"'>"+prangan+"</td><td id='bahar_row"+table_len+"'>"+bahar+"</td><td id='bag_row"+table_len+"'>"+bag+"</td><td id='bajan_row"+table_len+"'>"+bajan+"</td><td id='date_row"+table_len+"'>"+date+"</td><td id='rate_row"+table_len+"'>"+rate+"</td><td id='amount_row"+table_len+"'>"+ (bajan*rate).toFixed(2)+"</td><td class='buttonsWrapper'><input type='button' id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Save' class='save' onclick='save_row("+table_len+")'> <input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'></td></tr>";
    
        date = "", name="", mandi="", prangan = "" , bahar ="", bag="", bajan="", rate=""
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
 let mandi = document.getElementById("mandi_row"+no)
 let prangan = document.getElementById("prangan_row"+no)
 let bahar = document.getElementById("bahar_row"+no)
 let bag = document.getElementById("bag_row"+no)
 let bajan = document.getElementById("bajan_row"+no)
 let rate = document.getElementById("rate_row"+no)
 let amount = document.getElementById("amount_row"+no)

 name.innerHTML="<input type='text' id='name_text"+no+"' value='"+name.innerHTML+"'>";
 bag.innerHTML="<input type='number' id='bag_text"+no+"' value='"+bag.innerHTML+"'>";
 bajan.innerHTML="<input type='number' id='bajan_text"+no+"' value='"+bajan.innerHTML+"'>";
 mandi.innerHTML="<input type='checkbox' id='mandi_text"+no+"' value='"+mandi.innerHTML+"'>";
 prangan.innerHTML="<input type='radio' id='prangan_text"+no+"' value='"+prangan.innerHTML+"'>";
 bahar.innerHTML="<input type='radio' id='bahar_text"+no+"' value='"+bahar.innerHTML+"'>";
 date.innerHTML="<input type='date' id='date_text"+no+"' value='"+date.innerHTML+"'>";
 rate.innerHTML="<input type='number' id='rate_text"+no+"' value='"+rate.innerHTML+"'>";
 amount.innerHTML="<input disabled type='number' id='amount_text"+no+"' value='"+amount.innerHTML+"'>";
}


//Save changes

function save_row(no)
{
    let date = document.getElementById("date_text"+no).value
    let name = document.getElementById("name_text"+no).value
    let mandi = document.getElementById("mandi_text"+no).value
    let prangan = document.getElementById("prangan_text"+no).value
    let bahar = document.getElementById("bahar_text"+no).value
    let bag = document.getElementById("bag_text"+no).value
    let bajan = document.getElementById("bajan_text"+no).value
    let rate = document.getElementById("rate_text"+no).value
    let amount = (bajan*rate).toFixed(2)


    document.getElementById("date_row"+no).innerHTML =date
    document.getElementById("name_row"+no).innerHTML =name
    document.getElementById("mandi_row"+no).innerHTML =mandi
    document.getElementById("prangan_row"+no).innerHTML =prangan
    document.getElementById("bahar_row"+no).innerHTML = bahar
    document.getElementById("bag_row"+no).innerHTML =bag
    document.getElementById("bajan_row"+no).innerHTML =bajan
    document.getElementById("rate_row"+no).innerHTML =rate
    document.getElementById("amount_row"+no).innerHTML =amount

 document.getElementById("edit_button"+no).style.display="block";
 document.getElementById("save_button"+no).style.display="none";
}
