import { Bowerman, Character, Daemon, Magician, Swordsman, Undead, Zombie, } from "../classes";

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
  const testUnit = new Character('Test', 'Bowman', 1, 1, 1, 1);
  const oldUnitLevel = testUnit.level;
  testUnit.levelUp();

  expect(testUnit.level).toBe(oldUnitLevel + 1);
});

test('levelUp when health = 0', () => {
  const testUnit = new Character('Test', 'Bowman', 0, 1, 1, 1);
  const oldUnitLevel = testUnit.level;
  testUnit.levelUp();

  expect(testUnit.level).toBe(oldUnitLevel);
});

test('damage when health > 0', () => {
  const testUnit = new Character('Test', 'Bowman', 100, 1, 1, 30);
  testUnit.damage(50);

  expect(testUnit.health).toBe(65);
});

test('damage when health = 0', () => {
  const testUnit = new Character('Test', 'Bowman', 0, 1, 1, 30);
  testUnit.damage(50);

  expect(testUnit.health).toBe(0);
});

test('should return type', () => {
  const type = 'Bowman';
  const testUnit = new Character('Test', type, 0, 1, 1, 30);
  expect(testUnit.type).toBe(type);
});