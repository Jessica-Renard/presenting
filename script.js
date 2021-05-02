// Word Up provides onscreen props for high-frequency word practices vital to early reading literacy efforts. The app incorporates the benefit of phonics highlights, with content grouped to interact well with Spelling lessons.

// word banks!
const shortAbank = [
"bad","dad","had","lad","mad","pad","sad","tad","bag","gag","lag","nag","rag","sag","tag","wag","ban","can","fan","man","pan","van","tan","ran","cap","gap","map","lap","nap","rap","sap","tap","bat","cat","fat","hat","mat","pat","rat","sat","vat"
  ];

const shortEbank = [
  "bed","fed","led","red", "wed", "beg", "keg", "leg", "peg", "den", "hen", "men", "pen", "ten", "bet", "get", "jet", "let", "met", "net", "pet", "set", "vet", "wet", "yet", "web", "gem", "hem", "pep", "yes"
];

const shortIbank = [
  "bid", "did", "hid", "kid", "lid", "rid", "big", "dig", "fig", "gig", "jig", "pig", "rig", "wig", "bin", "din", "fin", "kin", "pin", "sin", "tin", "win", "dip", "hip", "lip", "nip", "rip", "sip", "tip", "yip", "zip", "bit", "fit", "hit", "kit", "lit", "pit", "sit", "wit", "bib", "fib", "rib", "dim", "him", "rim"
];

const shortObank = [ 
  "bob", "cob", "gob", "job", "mob", "rob", "sob", "bog", "cog", "dog", "fog", "hog", "jog", "log", "cop", "hop", "mop", "pop", "top", "cot", "dot", "got", "hot", "jot", "lot", "not", "pot", "rot", "tot", "rod", "sod", "mom", "pom"
];

const shortUbank = [
  "cub", "dub", "hub", "nub", "rub", "sub", "tub", "bug", "hug", "jug", "lug", "mug", "pug", "rug", "tug", "bum", "gum", "hum", "mum", "sum", "bun", "dun", "fun", "gun", "nun", "pun", "run", "sun", "but", "cut", "gut", "hut", "jut", "nut", "rut", "bud", "cud", "dud", "mud", "pup", "cup", "bus"
];

const longAbank = [
  
];

const longEbank = [
  
];

const longIbank = [
  
];

const longObank = [
  
];

const longUbank = [
  
];

const blendsSbank = [
  
];

const blendsBbank = [
  
];

const blendsWHWRbank = [
  
];
const digraphCHCKbank = [
  
];

const digraphTHbank = [
  
];

const digraphSHPHbank = [
  
];
// variables to initiate the pertaining functionality (i.e. displayed iteration of that word list) with onclick
let selectShortA = document.getElementById('shortA');
let selectLongA = document.getElementById('longA');
let selectShortE = document.getElementById('shortE');
let selectLongE = document.getElementById('longE');
let selectShortI = document.getElementById('shortI');
let selectLongI = document.getElementById('longI');
let selectShortO = document.getElementById('shortO');
let selectLongO = document.getElementById('longO');
let selectShortU = document.getElementById('shortU');
let selectLongU = document.getElementById('longU');
let digraphC = document.getElementById('digraphCH-CK');
let digraphS = document.getElementById('digraphSH-PH');
let digraphT = document.getElementById('digraphTH');
let blendsS = document.getElementById('blendsSK-SL-SM-SN-ST-TR-PL');
let blendsB = document.getElementById('blendsBL-CL-CR-DE-FL-GL-GR');
let blendsW = document.getElementById('blendsWH-WR-PLUS');

//iterate through each word bank 
//add feature so timeout completes before another begins
//use .each for behavior
selectShortA.onclick = () => {
  var timer = 0;
    for (let i = 0; i < shortAbank.length; i++) {
    setTimeout(() => {  document.getElementById('populate').innerHTML = shortAbank[i]; }, timer);
    timer = timer + 3000;
  }
};

selectShortE.onclick = () => {
  var timer = 0;
  for (let i = 0; i < shortEbank.length; i++) {
    setTimeout(() => {  document.getElementById('populate').innerHTML = shortEbank[i]; 
    }, timer);
    timer = timer + 3000;
  }
};

selectShortI.onclick = () => {
  var timer = 0;
  for (let i = 0; i < shortIbank.length; i++) {
    setTimeout(() => {  document.getElementById('populate').innerHTML = shortIbank[i]; 
    }, timer);
    timer = timer + 3000;
  }
};

selectShortO.onclick = () => {
  var timer = 0;
  for (let i = 0; i < shortObank.length; i++) {
    setTimeout(() => {  document.getElementById('populate').innerHTML = shortObank[i]; 
    }, timer);
    timer = timer + 3000;
  }
};

selectShortU.onclick = () => {
  var timer = 0;
  for (let i = 0; i < shortUbank.length; i++) {
    setTimeout(() => {  document.getElementById('populate').innerHTML = shortUbank[i]; 
    }, timer);
    timer = timer + 3000;
  }
};

selectLongA.onclick = () => {
  var timer = 0;
  for (let i = 0; i < LongAbank.length; i++) {
    setTimeout(() => {  document.getElementById('populate').innerHTML = LongAbank[i]; 
    }, timer);
    timer = timer + 3500;
  }
};

selectLongE.onclick = () => {
  var timer = 0;
  for (let i = 0; i < LongEbank.length; i++) {
    setTimeout(() => {  document.getElementById('populate').innerHTML = LongEbank[i]; 
    }, timer);
    timer = timer + 3500;
  }
};

selectLongI.onclick = () => {
  var timer = 0;
  for (let i = 0; i < LongIbank.length; i++) {
    setTimeout(() => {  document.getElementById('populate').innerHTML = LongIbank[i]; 
    }, timer);
    timer = timer + 3500;
  }
};

selectLongO.onclick = () => {
  var timer = 0;
  for (let i = 0; i < LongObank.length; i++) {
    setTimeout(() => {  document.getElementById('populate').innerHTML = LongObank[i]; 
    }, timer);
    timer = timer + 3500;
  }
};

selectLongU.onclick = () => {
  var timer = 0;
  for (let i = 0; i < LongUbank.length; i++) {
    setTimeout(() => {  document.getElementById('populate').innerHTML = LongUbank[i]; 
    }, timer);
    timer = timer + 3500;
  }
};
// complete below 6 digraph/blend bank functions
digraphTH.onclick = () => {
  var timer = 0;
  for (let i = 0; i < digraphTHBank.length; i++) {
    setTimeout(() => {  document.getElementById('populate').innerHTML = digraphTHbank[i]; 
    }, timer);
    timer = timer + 4000;
  }
};

digraphC.onclick = () => {
  var timer = 0;
  for (let i = 0; i < digraphCBank.length; i++) {
    setTimeout(() => {  document.getElementById('populate').innerHTML = digraphCbank[i]; 
    }, timer);
    timer = timer + 4000;
  }
};

selectShortA.onclick = () => {
  var timer = 0;
  for (let i = 0; i < shortAbank.length; i++) {
    setTimeout(() => {  document.getElementById('populate').innerHTML = shortAbank[i]; 
    }, timer);
    timer = timer + 3000;
  }
};

selectShortA.onclick = () => {
  var timer = 0;
  for (let i = 0; i < shortAbank.length; i++) {
    setTimeout(() => {  document.getElementById('populate').innerHTML = shortAbank[i]; 
    }, timer);
    timer = timer + 3000;
  }
};

selectShortA.onclick = () => {
  var timer = 0;
  for (let i = 0; i < shortAbank.length; i++) {
    setTimeout(() => {  document.getElementById('populate').innerHTML = shortAbank[i]; 
    }, timer);
    timer = timer + 3000;
  }
};
