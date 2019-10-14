---
title: Hello World
categories: 测试
mathjax: true
---
Welcome to [Hexo](https://hexo.io/)! This is your very first post. Check [documentation](https://hexo.io/docs/) for more info. If you get any problems when using Hexo, you can find the answer in [troubleshooting](https://hexo.io/docs/troubleshooting.html) or you can ask me on [GitHub](https://github.com/hexojs/hexo/issues).

## Quick Start

### Create a new post

``` bash
$ hexo new "My New Post"
```

More info: [Writing](https://hexo.io/docs/writing.html)

### Run server

``` bash
$ hexo server
```

More info: [Server](https://hexo.io/docs/server.html)

### Generate static files

``` bash
$ hexo generate
```

More info: [Generating](https://hexo.io/docs/generating.html)

### Deploy to remote sites

$$
\frac{\partial u}{\partial t}
= h^2 \left( \frac{\partial^2 u}{\partial x^2} +
\frac{\partial^2 u}{\partial y^2} +
\frac{\partial^2 u}{\partial z^2}\right)
$$

```dart
import 'package:jpush_flutter/jpush_flutter.dart';
import 'package:flutter_local_notifications/flutter_local_notifications.dart';

JPush staticJpush;

class SweetNotification {
    JPush _jPush;
    String _registrationID;

    String get registrationID => _registrationID;

    /// 接到remote push notification的回调方法
    Future<dynamic> _onReceiveNotification(Map<String, dynamic> massage) async {

    }

    /// 点击remote push notification的回调方法
    Future<dynamic> _onOpenNotification(Map<String, dynamic> message) async {

    }

    /// 接收custom message的回调方法。
    Future<dynamic> _onReceiveMessage(Map<String, dynamic> message) async {

    }

    /// 增加tag
    Future<Map<dynamic, dynamic>> addTags(List<String> tags) async {
        return await _jPush?.addTags(tags);
    }

    /// 发送本地消息
    static void sendLocale(String title, String content) async {
        FlutterLocalNotificationsPlugin flutterLocalNotificationsPlugin = new FlutterLocalNotificationsPlugin();
        // initialise the plugin. app_icon needs to be a added as a drawable resource to the Android head project
        var initializationSettingsAndroid =
        new AndroidInitializationSettings('app_icon');
        var initializationSettingsIOS = new IOSInitializationSettings();
        var initializationSettings = new InitializationSettings(
        initializationSettingsAndroid, initializationSettingsIOS);
        flutterLocalNotificationsPlugin.initialize(initializationSettings);
        var androidPlatformChannelSpecifics = AndroidNotificationDetails(
        'your channel id', 'your channel name', 'your channel description',
        importance: Importance.Max, priority: Priority.High, ticker: 'ticker');
        var iOSPlatformChannelSpecifics = IOSNotificationDetails(
        presentSound: true
        );
        var platformChannelSpecifics = NotificationDetails(
        androidPlatformChannelSpecifics, iOSPlatformChannelSpecifics);
        await flutterLocalNotificationsPlugin.show(
        0, title ?? '', content ?? '', platformChannelSpecifics,
        payload: 'item x');
    }

    SweetNotification() {
        _jPush = JPush();
        staticJpush = _jPush;
        _jPush.addEventHandler(
        onReceiveNotification: _onReceiveNotification,
        onOpenNotification: _onOpenNotification,
        onReceiveMessage: _onReceiveMessage,
        );
        _jPush.setup(
        appKey: "13de01ed05627ce93176e9df",
        production: false,
        debug: false,
        );
        _jPush.getRegistrationID().then((id) => this._registrationID = id);
        _jPush.applyPushAuthority(
            new NotificationSettingsIOS(
            sound: true,
            alert: true,
            badge: true,
        ),
    );
}

}

```

``` bash
$ hexo deploy
```

More info: [Deployment](https://hexo.io/docs/deployment.html)
