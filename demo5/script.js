$(document).ready(function () {
    $("#scroll-event").bind("mousewheel", function (e) {
      this.scrollLeft -= e.originalEvent.wheelDelta;
    });
    $("#scroll-event").bind("DOMMouseScroll", function (e) {
      this.scrollLeft += e.originalEvent.detail * 40;
    });
  });