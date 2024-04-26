import "bootstrap";
import "./style.css";

window.onload = function() {
  let element = document.querySelector("#mydiv");
  let pronoun = ["the", "our", "a"];
  let adj = ["great", "big", "cool"];
  let noun = ["jogger", "racoon", "coder"];
  let domainNames = [];
  for (let i = 0; i < pronoun.length; i++) {
    ("first for loop");
    "this is i: " + i;
    for (let j = 0; j < adj.length; j++) {
      ("second for loop");
      "this is i: " + i + " this is j: " + j;
      for (let k = 0; k < adj.length; k++) {
        ("third for loop");
        "this is i: " + i + " this is j: " + j + " this is k: " + k;
        domainNames.push(pronoun[i] + adj[j] + noun[k] + ".com");
      }
    }
  }
  for (let i = 0; i < domainNames.length; i++) {
    element.innerHTML += "<div>" + domainNames[i] + "</div>";
  }
};