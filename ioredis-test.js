/**
 * Created by wyq on 17/5/25.
 * 未深入测试,可参考node-redis
 */
"use strict";
const redis = require("ioredis");
const rc = redis.createClient();

rc.subscribe("__keyevent@0__:expired", function () {
	console.log(arguments);
});

rc.subscribe("__keyspace@0__:aaa", function () {
	console.log(arguments);
});

rc.on("message", function () {
	console.log(arguments);
});