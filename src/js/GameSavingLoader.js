import read from './reader';
import json from './parser';

// export default class GameSavingLoader {
//   static load() {
//     const data = read(); // возвращается Promise!
//     const value = data.then(json(data)); // возвращается Promise!
//     return value;
//   }
// }

export default class GameSavingLoader {
  static load() {
    return read().then((data) => json(data)).then((data) => JSON.parse(data));
  }
}
