
let symbol = "o";
function move(row,cell){
    console.log(row,cell);
    if( symbol==="o"){
        symbol="x"
    } else {
        symbol="o"
    }
    document.getElementById("start").rows[row].cells[cell].innerHTML = symbol;
}