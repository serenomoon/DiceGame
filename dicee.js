function dices () {
  var i = Math.floor(Math.random()*6)+1;
  var d = Math.floor(Math.random()*6)+1;
  var j = [];
  j.push(i,d);
  if (j[0] === 1) {
    document.querySelector(".img1").setAttribute("src","images/dice1.png");
  } else if (j[0] === 2) {
    document.querySelector(".img1").setAttribute("src","images/dice2.png");
  } else if (j[0] === 3) {
    document.querySelector(".img1").setAttribute("src","images/dice3.png");
  } else if (j[0] === 4) {
    document.querySelector(".img1").setAttribute("src","images/dice4.png");
  } else if (j[0] === 5) {
    document.querySelector(".img1").setAttribute("src","images/dice5.png");
  } else if (j[0] === 6) {
    document.querySelector(".img1").setAttribute("src","images/dice6.png");
}

  if (j[1] === 1) {
    document.querySelector(".img2").setAttribute("src","images/dice1.png");
  } else if (j[1] === 2) {
    document.querySelector(".img2").setAttribute("src","images/dice2.png");
  } else if (j[1] === 3) {
    document.querySelector(".img2").setAttribute("src","images/dice3.png");
  } else if (j[1] === 4) {
    document.querySelector(".img2").setAttribute("src","images/dice4.png");
  } else if (j[1] === 5) {
    document.querySelector(".img2").setAttribute("src","images/dice5.png");
  } else if (j[1] === 6) {
    document.querySelector(".img2").setAttribute("src","images/dice6.png");
  }

  if (j[0] < j[1]) {
    document.querySelector("h1").innerText="️‍🥈Player 2 Win!";
  } else if (j[0] > j[1]) {
    document.querySelector("h1").innerText="🥇Player 1 Win!";
  } else if (j[0] === j[1]) {
    document.querySelector("h1").innerText="⚔Its a Draw!";
  }
}
