import { CacheEngine } from "./cache/CacheEngine.js";
import { FileDriver } from "./cache/driver/implements/FileDriver.js";
import { RedisDriver } from "./cache/driver/implements/RedisDriver.js";

const cache = new CacheEngine();

// cache.loadDriver(FileDriver);
cache.loadDriver(RedisDriver);

cache.put("name", "megaads");
cache.get("name");
