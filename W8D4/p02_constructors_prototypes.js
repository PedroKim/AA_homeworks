function Elephant(name, height, tricks) {
  this.name = name;
  this.height = height;
  this.tricks = tricks;
}

Elephant.prototype.trumpet = function() {
  console.log(`${this.name} the elephant goes 'phrRRRRRRRRRRR!!!!!!!'`);
};

Elephant.prototype.grow = function () {
  this.height += 12;
};

Elephant.prototype.addTrick = function (trick) { 
  this.tricks.push(trick);
};

Elephant.prototype.play = function () { 
  let randIdx = Math.floor(Math.random() * Math.floor(this.tricks.length)),
      trick = this.tricks[randIdx];
  console.log(`${this.name} is ${trick}!`);
};

let el1 = new Elephant("Dumbo", 70, ["rolling", "painting a picture"]);
el1.trumpet();
console.log(el1.height);
el1.grow();
console.log(el1.height);
el1.addTrick("jumping");
el1.play();