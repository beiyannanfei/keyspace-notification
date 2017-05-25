# keyspace-notification
redis_version:3.2.3
redis 键空间通知（keyspace notification）http://redisdoc.com/topic/notification.html#keyspace-notification

1. 首先安装node-redis或ioredis
    npm i redis --save
2. 通过redis客户端(或配置文件)开启键空间通知功能
    $ redis-cli config set notify-keyspace-events KEx (开启过期事件：每当有过期键被删除时发送)
3. 如果只订阅一个频道使用SUBSCRIBE和message配合即可,
   但是如果需要结合*进行模糊匹配的话则需要使用PSUBSCRIBE和pmessage。
   
eg. 订阅单一频道
```
    rc.SUBSCRIBE("__keyspace@0__:aaa", function () {
    	console.log(arguments);
    });
    rc.on("message", function () {
    	console.log(arguments);
    });
```
eg. 匹配多个频道
```
    rc.PSUBSCRIBE("__keyspace@0__:*", function () {
    	console.log(arguments);
    });
    rc.on("pmessage", function () {
    	console.log(arguments);
    });
```

4. 需要注意SUBSCRIBE或PSUBSCRIBE会对创建的redis实例产生阻塞作用,同一文件中如果需要执行其它redis操作需要新建实例。