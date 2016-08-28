/**
 * Created by KeiSei on 2016/8/26.
 */

$(document).ready(function () {

  let obj = $("#background");
  let back = $('.opacity');

  const timeInterval = 10000;
  setInterval(changeImg, timeInterval);

  function changeImg() {
    let index = parseInt(Math.random()*8);
    back.fadeOut(5000);
    obj.css({ "background": "url(static/resource/background-image-0" + index + ".jpg) no-repeat center center fixed", "background-size": "cover"});
    back.fadeIn(5000);
  }
});

