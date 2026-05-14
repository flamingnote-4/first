function getSquare(a) {
  var xhttp = new XMLHttpRequest();
  var url = `/square?value=${a}`

  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      console.log("Результат:", this.responseText)
      document.getElementById("result").innerText = `Результат: ${this.responseText}`
    } else if (this.status == 400) {
      document.getElementById("result").innerText = "Некоректні дані"
    }
  }
  
  xhttp.open("GET", url, true)
  xhttp.send()
}