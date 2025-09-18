import { Bowerman } from "../class/Bowerman";
import { Character } from "../class/Character";
import { Daemon } from "../class/Daemon";
import { Magician } from "../class/Magician";
import { Swordsman } from "../class/Swordsman";
import { Undead } from "../class/Undead";
import { Zombie } from "../class/Zombie";


test('should set valid name between 2 and 10 characters', () => {
    const validNames = ['Jo', 'John', 'Jonathan'];

    validNames.forEach(name => {
      const character = new Bowerman(name);
      expect(character.name).toBe(name);
    });
  });

test('should throw error for invalid name', () => {
  const invalidCases = [
    { value: 'J', expectedError: 'Name must be a string with length between 2 and 10 characters' },
    { value: 'VeryLongName', expectedError: 'Name must be a string with length between 2 and 10 characters' },
    { value: 123, expectedError: 'Name must be a string with length between 2 and 10 characters' },
    { value: '', expectedError: 'Name must be a string with length between 2 and 10 characters' },
    { value: null, expectedError: 'Name must be a string with length between 2 and 10 characters'},
  ];

  invalidCases.forEach(({ value, expectedError }) => {
    expect(() => {
      new Bowerman(value);
    }).toThrow(expectedError);
  });
});

test('should set valid type', () => {
  const validTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
  const expectedError = 'The type must be one of: Bowman, Swordsman, Magician, Daemon, Undead, Zombie';

  validTypes.forEach((type) => {
    expect(() => {
      new Character('Test', type, 10, 10, 10, 10);
    }).not.toThrow(expectedError);
  });
});

test('should throw error for invalid type', () => {
  const expectedError = 'The type must be one of: Bowman, Swordsman, Magician, Daemon, Undead, Zombie';

  expect(() => {
    new Character('Test', 'InvalidType', 10, 10, 10, 10);
  }).toThrow(expectedError);
});

test.each([
  [{class: Bowerman}, 'Bowman'],
  [{class: Swordsman}, 'Swordsman'],
  [{class: Magician}, 'Magician'],
  [{class: Daemon}, 'Daemon'],
  [{class: Undead}, 'Undead'],
  [{class: Zombie}, 'Zombie'],
])((
  'сhecking get type'),(unit, expectedValue) => {
      const testClass = new unit.class('Test')
      expect(testClass._type).toBe(expectedValue);
  });

test('levelUp when health > 0', () => {
  const testUnit = new Character('Test', 'Bowman');
  const oldUnitLevel = testUnit.level;
  testUnit.levelUp();

  expect(testUnit.level).toBe(oldUnitLevel + 1);
});

test('levelUp when health = 0', () => {
  const testUnit = new Character('Test', 'Bowman');
  const oldUnitLevel = testUnit.level;
  testUnit.health = 0;
  testUnit.levelUp();

  expect(testUnit.level).toBe(oldUnitLevel);
});

test('damage when health > 0', () => {
  const testUnit = new Bowerman('Test', 'Bowman');
  testUnit.damage(20);

  expect(testUnit.health).toBe(85);
});

test('damage when health = 0', () => {
  const testUnit = new Bowerman('Test', 'Bowman');
  testUnit.health = 0;
  testUnit.damage(50);

  expect(testUnit.health).toBe(0);
});

test('should return type', () => {
  const type = 'Bowman';
  const testUnit = new Character('Test', type);
  expect(testUnit.type).toBe(type);
});