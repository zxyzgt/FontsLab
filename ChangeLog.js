2019.02.10 | 01:30
1.修正 userstyles.org 安装界面
2.未来计划，写成智能化的扩展，可以自动判断是否乱码，然后自动修复，再不需要人工升级
2016.09.06 | 18:40:25
1.开始写 Edge版本，并修正了 Edge 版本 globs 崩溃的 bug，字体构架已经完成
2016.09.01 | 06:23:28
1.已经完成了 userstyles.org 选项鼠标悬停显示使用说明的构架，开始完善详细说明
2.开始修复完善 markdown 类网站兼容
2016.08.27 | 04:40:28
1.已经完成了 userstyles.org 选项鼠标悬停显示使用说明的雏形，cool
2.加入了只替换中文而不替换英文的选项，正在完善
3.修正了中日文假名的逻辑关系
4.修正了一个当字体名称为 "" 空值时，造成字体错误读取的 bug，也很久了，大概有十几年的历史了
2016.06.24 | 07:35:28
1.chrome 新的 @font-face 构架有些不完善的地方，要重新写
2.新版的 crx 已经采用新的阿里类网站分离方式，并改善了雅黑标点符号不清楚的问题
2016.05.26 | 00:18:33
1.开始对以 @font-face 方式为主的 css 代码进行第二次架构调整和优化
2016.05.20 | 05:38
1.加入了改变宽度的代码，以便改善字体改变后造成网页错位的情况
2016.05.17 | 17:47
1.分离了淘宝代码，极大程度上避免了乱码
2.使用 unicode-range 方式分离显示了 数字标点日文韩文等字体
2016.04.10 | 17:12:11
1.分离 淘宝/天猫/支付宝 代码，以保证不乱码
2016.03.09 | 11:55:22
1.chrome 调用粗体的方式与 firefox 不同
firefox : /* main(Latin) *//* 700:Bold */@font-face {font-family: "SDF.Latin";font-weight:700;src: local("Inconsolata Bold")
chrome : /* main(Latin) *//* 700:Bold */@font-face {font-family: "SDF.Latin";font-weight:700;src: local("Inconsolata")
合并写法 : /* main(Latin) *//* 700:Bold */@font-face {font-family: "SDF.Latin";font-weight:700;src: local("Inconsolata Bold"),local("Inconsolata")
2016.03.08 | 18:06:24
1.为了调用，提取，测试几个字体，不断的折腾我的机子，安装了win10会员版和win8.1，累累累累累
2016.02.28 | 08:32:03
1.@font-face方式替换字体方法为什么那么久还没制作好，A：chrome和firefox处理方式不同，B：每个字体的粗细调用方式不同，C：每个国家字体显示效果不同
  每次写好一个字体就需要调试一次，调试好的字体还要在不同网站下再次调试，所以耗时是非常长的
  网上有很多写好的@font-face方式替换字体，其实只是替换了很少一部分，显示效果并不理想
2016.02.25 | 15:15:32
1.完成了swf的反编译后，终于有时间继续css字体的工作了，貌似思路也清晰了不少
2.解决了 Adobe Flash Player 设置无法点击的问题，主要原因在于DPI变化以后，透明的CSS块错误缩放，导致无法点击
  这个问题从2011年开始有人提起，在网上一直没有理想解决的方案
2015.08.17 | 05:05:32
1.终于解决了 几个等宽字符在特定情况下错位的技术难点，折腾了一个多月，自制了字体调用来解决
2.期间发现 WIN10 以及 FireFox 高版本貌似也在改善这个问题，老外也遇到相同的问题？神同步。。。
2015.07.30 | 06:02
1.完善了 对类 MarkDown 的支持，采用了分离模式，已经可以正常调用等宽和比例字体显示
2015.07.21 | 07:42
1.已经启动使用 @font-face 方式替换字体的方法来实现全局字体，firefox 部分基本完成，可以实现所有乱码正常显示，并中英文分离
2.chrome 部分仍然在调试
2014.11.10 | 03:52
1.github编辑错位问题，调试了一下,发现是 类MarkDown编辑模块 在两套不同字体时产生的BUG,
少部分站点在源码中已经修复了，修改了一下 CSS 现在应该已经可以正常显示，极少数站点虽然也可以正常使用，
但是少数英文字母和数字会出现稍微的错位，这个是源码的问题，需要等待作者修复
2014.09.12 | 00:37
1.修正duckduckgo.com
2.修正css导致修改版土豆播放器控制条不显示的bug
2014.08.30 | 22:53
1.淘宝在部分代码使用了 Verdana 的旧版字体（WIN2000 系统默认），而不是 xp 默认的 Tahoma 或者 Win7 默认的 Segoe UI
导致字体错位，淘宝为了修正这个bug，增加代码段

.grid-view .item .g_price {letter-spacing: -0.31em !important;}


但是这个代码 却导致 Tahoma 和 Segoe UI 错位，现暂时修复，观察是否有其他 bug
综上原因，是淘宝采用了 旧版字体导致的
2014.07.03 | 20:50
1.代码优化
2014.06.14 | 08:47
1.修正 @font-face 失效，完善 @font-face 替换法规则
2014.06.10 | 20:02
1.添加 webfont 字体集
2.代码添加注释，以及优化优先级别
3.因不规范所以采用兼容模式修正乱码
4.定位到 @font-face 强制替换失效的一个问题
2014.05.26 | 23:14
1.修正因相同 class 使得优先级别抢占指定字体造成乱码
2014.05.25 | 17:55
1.修正 acgdb.com 比较多的乱码
2014.05.11 | 12:54
1.修正百度文库不显示字符和错位
2014.05.06 | 18:27
1.增加了字体测试网页
2.stylish源码编辑器兼容修正
3.解开了 stylish 网站对 url长度的限制，测试了下，可以写入2k，2千多字，够用了
2014.05.05 | 09:14
1.修正 http://i.taobao.com/my_taobao.htm
