/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { bottom } from "@popperjs/core";
import { Button } from "bootstrap";

const values = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];
const suits = ["♦", "♥", "♠", "♣"];

const colors = ["red", "black"];

//Generates all values for cards and returns an object with values and suits
function generateCards() {
  const cards = [];
  for (var v = 0; v < values.length; v++) {
    for (var s = 0; s < suits.length; s++) {
      const value = values[v];
      const suit = suits[s];
      cards.push({ value, suit });
    }
  }
  return cards;
}
//Pick a random value, color, and suit to be displayed in
//website
function randomCards(cards) {
  let top = document.querySelector(".top");
  let bottom = document.querySelector(".bottom");
  let value = document.querySelector(".number");

  const random = Math.floor(Math.random() * 51);
  const cardValue = cards[random].value;
  const cardSuit = cards[random].suit;
  const randomColor = Math.floor(Math.random() * 2);

  top.innerHTML = cardSuit;
  bottom.innerHTML = cardSuit;
  value.innerHTML = cardValue;
  top.style.color = colors[randomColor];
  bottom.style.color = colors[randomColor];
}

window.onload = function() {
  let cards = generateCards();
  randomCards(cards);
};

//Button to change card
let button = document.querySelector(".button");
button.addEventListener("click", () => {
  let cards = generateCards();
  randomCards(cards);
});

//10 seconds interval to change card
window.setInterval(() => {
  let cards = generateCards();
  randomCards(cards);
}, 10000);
