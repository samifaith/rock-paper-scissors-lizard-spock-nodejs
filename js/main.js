let rock = document.querySelector("#rock")
let scissors = document.querySelector("#scissors")
let paper = document.querySelector("#paper")
let lizard = document.querySelector("#lizard")
let spock = document.querySelector("#spock")


rock.addEventListener("click", () => {
  fetch('/calculateBotsWeapon')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    if(data.botsWeapon === "scissors" && rock.innerHTML = "rock"){
      displayMessage("You Lost")
    }
  })
})

function displayMessage(msg) {
  document.getElementById("message").innerHTML = msg;
}
