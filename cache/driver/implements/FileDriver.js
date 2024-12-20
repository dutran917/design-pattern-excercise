import { AbstractDriver } from "../AbstractDriver.js";

export class FileDriver extends AbstractDriver {
  put(key, value) {
    console.log(`FileDriver: put thành công key='${key}', value='${value}'`);
  }

  get(key) {
    console.log(`FileDriver: get thành công key='${key}'`);
  }
}
