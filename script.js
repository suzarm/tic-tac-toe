
let symbol = "o";
function move(row,cell){
    console.log(row,cell);
    if(!document.getElementById("start").rows[row].cells[cell].innerHTML ){
        if( symbol==="o"){
            symbol="x"
        } else {
            symbol="o"
        }
        document.getElementById("start").rows[row].cells[cell].innerHTML = symbol;
        setTimeout(function(){
            if(document.getElementById("start").rows[0].cells[0].innerHTML ==document.getElementById("start").rows[0].cells[1].innerHTML &&
            document.getElementById("start").rows[0].cells[2].innerHTML ==document.getElementById("start").rows[0].cells[0].innerHTML && document.getElementById("start").rows[0].cells[0].innerHTML ){
            return  alert('game over');
           }
           if(document.getElementById("start").rows[1].cells[0].innerHTML ==document.getElementById("start").rows[1].cells[1].innerHTML &&
            document.getElementById("start").rows[1].cells[2].innerHTML ==document.getElementById("start").rows[1].cells[0].innerHTML && document.getElementById("start").rows[1].cells[0].innerHTML ){
             return  alert('game over');
           }
           if(document.getElementById("start").rows[2].cells[0].innerHTML ==document.getElementById("start").rows[2].cells[1].innerHTML &&
           document.getElementById("start").rows[2].cells[2].innerHTML ==document.getElementById("start").rows[2].cells[0].innerHTML && document.getElementById("start").rows[2].cells[0].innerHTML ){
            return  alert('game over');
          }
          if(document.getElementById("start").rows[0].cells[0].innerHTML ==document.getElementById("start").rows[1].cells[0].innerHTML &&
           document.getElementById("start").rows[2].cells[0].innerHTML ==document.getElementById("start").rows[0].cells[0].innerHTML && document.getElementById("start").rows[0].cells[0].innerHTML ){
            return  alert('game over');
          }
          if(document.getElementById("start").rows[0].cells[1].innerHTML ==document.getElementById("start").rows[1].cells[1].innerHTML &&
           document.getElementById("start").rows[2].cells[1].innerHTML ==document.getElementById("start").rows[0].cells[1].innerHTML && document.getElementById("start").rows[0].cells[1].innerHTML ){
            return  alert('game over');
          }
          if(document.getElementById("start").rows[0].cells[1].innerHTML ==document.getElementById("start").rows[1].cells[1].innerHTML &&
           document.getElementById("start").rows[2].cells[1].innerHTML ==document.getElementById("start").rows[0].cells[1].innerHTML && document.getElementById("start").rows[0].cells[1].innerHTML ){
            return  alert('game over');
          }
          if(document.getElementById("start").rows[0].cells[2].innerHTML ==document.getElementById("start").rows[1].cells[2].innerHTML &&
           document.getElementById("start").rows[2].cells[2].innerHTML ==document.getElementById("start").rows[0].cells[2].innerHTML && document.getElementById("start").rows[0].cells[2].innerHTML ){
            return alert('game over');
          }
          if(document.getElementById("start").rows[0].cells[0].innerHTML ==document.getElementById("start").rows[1].cells[1].innerHTML &&
           document.getElementById("start").rows[2].cells[2].innerHTML ==document.getElementById("start").rows[0].cells[0].innerHTML && document.getElementById("start").rows[0].cells[0].innerHTML ){
            return alert('game over');
          }
          if(document.getElementById("start").rows[2].cells[0].innerHTML ==document.getElementById("start").rows[1].cells[1].innerHTML &&
          document.getElementById("start").rows[0].cells[2].innerHTML ==document.getElementById("start").rows[2].cells[0].innerHTML && document.getElementById("start").rows[2].cells[0].innerHTML ){
            return alert('game over');
         }
         if(document.getElementById("start").rows[0].cells[0].innerHTML &&
          document.getElementById("start").rows[0].cells[1].innerHTML &&
          document.getElementById("start").rows[0].cells[2].innerHTML &&
          document.getElementById("start").rows[1].cells[0].innerHTML &&
          document.getElementById("start").rows[1].cells[1].innerHTML &&
          document.getElementById("start").rows[1].cells[2].innerHTML &&
          document.getElementById("start").rows[2].cells[0].innerHTML &&
          document.getElementById("start").rows[2].cells[1].innerHTML &&
          document.getElementById("start").rows[2].cells[2].innerHTML){
            return alert('draw');
          }
          
         
        },0)
        
        
    }
   
}