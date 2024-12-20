export class CacheEngine {
	constructor() {
	  this.driver = null;
	}
	loadDriver(DriverClass) {
	  this.driver = new DriverClass();
	}
 
	put(key, value) {
	  this.driver.put(key, value);
	}
 
	get(key) {
	  this.driver.get(key);
	}
 }
 