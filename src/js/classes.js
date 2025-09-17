export class Character {
  constructor(name, type, health, level, attack, defence) {
    this.name = name;
    this.type = type;
    this.health = health;
    this.level = level;
    this.attack = attack;
    this.defence = defence;
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

export class Bowerman extends Character{
  constructor(name) {
    super(name, 'Bowman', 100, 1, 25, 25);
  }
}

export class Swordsman extends Character{
  constructor(name) {
    super(name, 'Swordsman', 100, 1, 40, 10);
  }
}

export class Magician extends Character{
  constructor(name) {
    super(name, 'Magician', 100, 1, 10, 40);
  }
}

export class Daemon extends Character{
  constructor(name) {
    super(name, 'Daemon', 100, 1, 10, 40);
  }
}

export class Undead extends Character{
  constructor(name) {
    super(name, 'Undead', 100, 1, 25, 25);
  }
}

export class Zombie extends Character{
  constructor(name) {
    super(name, 'Zombie', 100, 1, 40, 10);
  }
}
