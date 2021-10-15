import read from './reader';
import json from './parser';
import GameSaving from './GameSaving';

export default class GameSavingLoader {
  static async load() {
    try {
      const data = await read();
      const result = await json(data);
      return new GameSaving(JSON.parse(result));
    } catch (error) {
      console.log('Ошибка получения данных');
      return new Error('Не верный формат данных');
    }
  }
}
