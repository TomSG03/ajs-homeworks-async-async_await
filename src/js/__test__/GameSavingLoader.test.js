import GameSavingLoader from '../GameSavingLoader';

test('Test promise', (done) => {
  GameSavingLoader.load().then((saving) => {
    expect(saving).toEqual({
      id: 9,
      created: 1546300800,
      userInfo: {
        id: 1,
        name: 'Hitman',
        level: 10,
        points: 2000,
      },
    });
    done();
  });
});
