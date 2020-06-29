const Pumpkin = require('./pumpkin');
const db = require('./dbConfig');

describe('The Pumpkin Model', () => {
  beforeEach(() => {
    // clear the database before all tests
    return db.sync({ force: true });
  });

  afterEach(() => {
    // erase all tables after each spec
    return db.sync({ force: true });
  });

  test('The Pumpkin model has a name, size, evil, carved and candle column', async () => {
    const gourd = await Pumpkin.create(
      { name: 'normal', size: 'medium' },
      { hooks: false }
    );
    expect(gourd.name).toEqual('normal');
    expect(gourd.size).toEqual('medium');
    expect(gourd.evil).toEqual(false);
    expect(gourd.carved).toEqual(false);
    expect(gourd.candle).toEqual(false);
  });
  test('On Pumpkin, the size column is type enum and only excepts small, medium or large', async () => {
    await expect(
      Pumpkin.create({ name: 'normal', size: 'ginormous' }, { hooks: false })
    ).rejects.toThrow();
  });
  test('The Pumpkin model by default is not evil', async () => {
    const gourd = await Pumpkin.create(
      { name: 'Gardener', size: 'small' },
      { hooks: false }
    );
    expect(gourd.evil).toEqual(false);
  });
  test('The Pumpkin model at random is created evil and the name is modified', async () => {
    const gourd = await Pumpkin.create({ name: 'Black-Cat', size: 'small' });
    expect(gourd.name.includes('EVIL') || gourd.name.includes('GOOD')).toBe(
      true
    );
  });
  test('lightcandle returns a promise that lights the candle on the instance its called', async () => {
    const gourd = await Pumpkin.create({
      name: 'Black-Cat',
      size: 'small',
      carved: true,
    });
    const candle = await gourd.lightcandle();
    expect(candle).toEqual(true);
  });
});
