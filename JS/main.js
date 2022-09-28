var checkboxX = document.querySelector("#x_player")
var checkboxY = document.querySelector("#y_player")

function capturarX() {
     if(checkboxX.checked){
          checkboxY.checked = false;
     }  
}

function capturarY() {
     if(checkboxY.checked){
          checkboxX.checked = false;
     }
}
