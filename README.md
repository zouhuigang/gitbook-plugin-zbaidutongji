gitbook-plugin-zconfig
======================

百度统计

修改自官方的谷歌统计插件

当切换页面，gitbook会调用 page.change 对应绑定的函数，利用百度统计的 [事件跟踪 - 百度统计 ](http://tongji.baidu.com/open/api/more?p=guide_trackEvent)

记录当前的路径到'page.change'事件下，可在百度统计的后台中查看每个页面的访问情况

如果有定制的需求，可以修改/baidu/baidu_gitbook.js中 page.change 事件绑定的方法

## 安装使用方法

```
npm install gitbook-plugin-zconfig
```

在config.js中添加如下配置，token替换为百度统计账号的token

```
"plugins": [
"zconfig"
],
"pluginsConfig": {
    "zconfig": {
        "tongji_types": "baidu", 
        "tongji_token": "1dedb1e6d78902e7ab2b878cdd28171d",
        "gitbook_show": "close",
        "gitbook_url": "https://www.anooc.com",
        "gitbook_name": "本书官网anooc.com"
      }
}
```
