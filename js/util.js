/**
 * @file name    : util.js
 * @created time : 2018-01-24 11:10
 * @update time  : 2018-04-03 16:56
 * @author       : smpower
 * @email        : bzsjxhywrf@outlook.com
 * @github       : https://github.com/smpower/
*/

/*jslint         browser : true, continue : true,
  devel  : true, indent  : 2,    manerr   : 50,
  newcap : true, nomen   : true, plueplue : true
  regexp : true, sloppy  : true, vars     : true,
  white
*/

(function (window, factofy) {
  factofy(window);
}(this, function(window) {

// 百度统计代码 - 落地页
var baidu = function () {
  var _hmt = _hmt || [];
  (function() {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?2dfa9be8eb6f60c97fe98b06dd4532a1";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
  })();
};
baidu();

}));
