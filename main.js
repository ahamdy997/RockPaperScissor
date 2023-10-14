"use strict";

const playerPick = document.querySelectorAll(".playBtn");
const resultParagraph = document.querySelector(".resultH2");
const win_tie = document.querySelector(".playerVsComp");
const reset = document.querySelector(".resetBtn");
let playerMove = "";

reset.addEventListener("click", function () {
  compwin = playerWIN = tie = 0;
  win_tie.textContent = `wins: ${playerWIN} losses: ${compwin} ties: ${tie}`;
});

playerPick.forEach((val) =>
  val.addEventListener("click", function (e) {
    playerMove = e.target.textContent;
    computerPick();
    winner(playerMove, oppMove);
  })
);
let oppMove = "";

const computerPick = function () {
  const computerMove = Math.random();
  if (computerMove <= 1 / 3) {
    oppMove = "✊🏻";
  } else if (2 / 3 >= computerMove > 1 / 3) {
    oppMove = "🖐🏻";
  } else {
    oppMove = "✌🏻";
  }
};

let compwin = 0,
  playerWIN = 0,
  tie = 0;
const winner = function (playerMove, oppMove) {
  if (playerMove === oppMove) {
    resultParagraph.textContent = `you picked ${playerMove} , and computer picked ${oppMove} it's a tie`;
    tie++;
  } else if (
    (playerMove === "✊🏻" && oppMove === "✌🏻") ||
    (playerMove === "✌🏻" && oppMove === "🖐🏻") ||
    (playerMove === "🖐🏻" && oppMove === "✊🏻")
  ) {
    playerWIN++;
    resultParagraph.textContent = `you picked ${playerMove} , and computer picked ${oppMove} player wins`;
  } else {
    resultParagraph.textContent = `you picked ${playerMove} , and computer picked ${oppMove} computer wins`;
    compwin++;
  }
  win_tie.textContent = `wins: ${playerWIN} losses: ${compwin} ties: ${tie}`;
};
