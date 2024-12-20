import { AbstractDriver } from "../AbstractDriver.js";

export class RedisDriver extends AbstractDriver {
  put(key, value) {
    console.log(`RedisDriver: put thành công key='${key}', value='${value}'`);
  }

  get(key) {
    console.log(`RedisDriver: get thành công key='${key}'`);
  }
}
