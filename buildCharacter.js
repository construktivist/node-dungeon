function Character(name, race, weapons, armor, trinket){
  this.name = name;
  this.race = race;
  this.armor = armor;
  this.trinket = trinket;
  this.hitpoints = 0;
}

module.exports = Character;
