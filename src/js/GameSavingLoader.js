import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static async load(value) {
    try {
      const data = await read(value);
      return await json(data);
    } catch (error) {
      return error.message;
    }
  }
}
