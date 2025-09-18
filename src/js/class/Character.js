export class Character {
    constructor(name, type) {
      this.name = name;
      this.type = type;
      this.health = 100;
      this.level = 1;
      this.attack = undefined;
      this.defence = undefined;
    }
  
    set name(value) {
      if (typeof value !== 'string' || value.length < 2 || value.length > 10) {
        throw new Error('Name must be a string with length between 2 and 10 characters');
      }
      this._name = value;
    }
    
    get name() {
      return this._name;
    }
    
    set type(value) {
      const validTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
      if (!validTypes.includes(value)) {
        throw new Error('The type must be one of: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
      }
      this._type = value;
    }
    
    get type() {
      return this._type;
    }
  
    levelUp() {
      if(this.health !== 0) {
        this.level += 1;
        this.health = 100;
        this.defence += this.defence / 100 * 20;
        this.attack += this.attack / 100 * 20;
      }
    }
  
    damage(points) {
      if(this.health > 0) {
        this.health -= points * (1 - this.defence / 100);
      }
    }
  }