## day13
24.4.18
* 重构的路上搞清了部分生命周期函数的顺序

data -> created -> 传递props -> mount
* 调整界面至模式时调用刷新浏览器函数可以节省不少class的remove操作
* 快重构好了，明天搞一会应该就差不多了