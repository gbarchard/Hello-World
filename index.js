function myFunction() {
    var NAME = document.getElementById("MemeButton")
    NAME.className="GoodMeme"
    NAME.onclick =  function() {SmallButton()}

  }

function SmallButton () {
    var NAME = document.getElementById("MemeButton")
    NAME.className= "BadMeme"
    NAME.onclick = function() {myFunction()}

}