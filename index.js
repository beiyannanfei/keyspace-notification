/**
 * Created by wyq on 17/5/25.
 */
"use strict";
const redis = require("redis");
const rc = redis.createClient();
const rc1 = redis.createClient();

rc.SUBSCRIBE("__keyevent@0__:expired", function () {  //事件通知 其中0为使用的redis库,expired为监听的事件(key过期事件)
	console.log(arguments);
});

rc.SUBSCRIBE("__keyspace@0__:aaa", function () {  //空间通知 其中0为使用的redis库,aaa为监听的key
	console.log(arguments);
});

rc.on("message", function () {  //会对redis实例产生阻塞
	console.log(arguments);
});

/*
rc.PSUBSCRIBE("__keyspace@0__:*", function () {  //监听所有0库的key空间通知事件
	console.log(arguments);
});

rc.on("pmessage", function () {  //pmessage 对应 PSUBSCRIBE | message 对应 SUBSCRIBE
	console.log(arguments);
});
*/

setTimeout(() => {
	rc1.setex("aaa", 5, "A10", function () {
		console.log("set expire key finish it will delete after 5 second");
	});
}, 1000);

