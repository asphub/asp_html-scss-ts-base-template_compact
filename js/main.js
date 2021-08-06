/*!
 * Author: ASP, http://www.ASP.com/
 * Copyright @ 2020 ASP Consultancy Services
 */

var aniGroup = "bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig flip flipInX flipInY lightSpeedIn rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight slideInUp slideInDown slideInLeft slideInRight zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp hinge jackInTheBox rollIn bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipOutX flipOutY lightSpeedOut rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight slideOutUp slideOutDown slideOutLeft slideOutRight zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp rollOut bounce flash pulse rubberBand shake swing tada wobble jello";

var animationstart = "webkitAnimationStart oAnimationStart MSAnimationStart animationstart",
  animationend = "webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend",
  transitionend = "webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend";

var themeManager = function (color) {
  // console.log(name);
  color = color || CONFIG.THEME;
  $('meta[name="theme-color"]').attr('content', color);
  $('meta[name="msapplication-navbutton-color"]').attr('content', color);
  $('meta[name="apple-mobile-web-app-status-bar-style"]').attr('content', color);
};

$(function () {
  "use strict";
  themeManager();
  page.init();
  page.refresh();

  // Bootstrap API
  $('[data-rel="tooltip"]').tooltip();
});

$(window).on('resize', function () {
  "use strict";
  page.getRatio();
  page.refresh();
});

$(window).on('scroll', function () {
  "use strict";
});

var page = {
  width: $(window).width(),
  height: $(window).height(),
  init: function () {
    page.getRatio();
  },
  refresh: function () {
    "use strict";

    page.reInitLayout();
  },
  getRatio: function () {
    "use strict";
    this.width = $(window).width();
    this.height = $(window).height();
  },
  // reset: function () {
  //     var tab = getParameterByName('view');
  //     if (tab) {
  //         $('a[href="#' + tab + '"]').tab('show');
  //     }
  // },
  reInitLayout: function () {
    "use strict";
    page.getRatio();

    var hh = $('header.header').outerHeight(true),
      fh = $('footer.footer').outerHeight(true);

    hh = hh || 0;
    fh = fh || 0;

    $('main, .conArea, .sideBar').css('min-height', page.height - (hh + fh));
    if (page.width < 768) {
      $('.sideBar').css('min-height', '');
    }
  },
  loader: function (op) {
    op = (op === undefined) ? true : op;
    if (op) {
      $('body').addClass('onLoading');
    } else {
      $('body').removeClass('onLoading');
    }
  }
};