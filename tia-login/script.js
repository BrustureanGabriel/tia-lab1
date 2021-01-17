var button = document.getElementById("clickme"),
resetButton = document.getElementById("resetButton"),
  count = 0;
button.onclick = function() {
  count += 1;
  button.innerHTML = "Click me: " + count;
};
resetButton.onclick = function(){
  count = 0;
  button.innerHTML = "Click me: " + count;	
}