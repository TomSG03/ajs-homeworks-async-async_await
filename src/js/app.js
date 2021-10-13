import GameSavingLoader from './GameSavingLoader';
import GameSaving from './GameSaving';

(async () => {
  try {
    const saving = await GameSavingLoader.load();
    const gamer = new GameSaving(saving);
    console.log(gamer);
  } catch (err) {
    console.log(err);
  }
})();
