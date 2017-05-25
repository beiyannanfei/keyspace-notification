# keyspace-notification
redis_version:3.2.3
redis 键空间通知（keyspace notification）http://redisdoc.com/topic/notification.html#keyspace-notification

1. 首先安装node-redis或ioredis
    npm i redis --save
2. 通过redis客户端(或配置文件)开启键空间通知功能
    $ redis-cli config set notify-keyspace-events KEx (开启过期事件：每当有过期键被删除时发送)