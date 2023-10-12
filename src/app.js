/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronouns = ["the", "our", "yours", "his", "her"];
  let adj = ["great", "intelligent", "happy", "sad", "fantastic", "terrific"];
  let noun = ["captain", "astronaut", "clown", "cheff", "farmer"];
  let extension = [".es", ".com", ".gov", ".org", ".net"];

  let pronounIn = Math.floor(Math.random() * pronouns.length);
  let adjIn = Math.floor(Math.random() * adj.length);
  let nounIn = Math.floor(Math.random() * noun.length);
  let extensionIn = Math.floor(Math.random() * extension.length);

  let domain =
    pronouns[pronounIn] + adj[adjIn] + noun[nounIn] + extension[extensionIn];

  let dominio = document.getElementById("dominio");
  dominio.innerHTML = domain;

  console.log("Cualquier string");
};
