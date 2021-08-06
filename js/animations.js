// Animations
var Ai;
(function (Ai) {
  Ai[Ai["bounceIn"] = 0] = "bounceIn";
  Ai[Ai["bounceInDown"] = 1] = "bounceInDown";
  Ai[Ai["bounceInLeft"] = 2] = "bounceInLeft";
  Ai[Ai["bounceInRight"] = 3] = "bounceInRight";
  Ai[Ai["bounceInUp"] = 4] = "bounceInUp";
  Ai[Ai["fadeIn"] = 5] = "fadeIn";
  Ai[Ai["fadeInDown"] = 6] = "fadeInDown";
  Ai[Ai["fadeInDownBig"] = 7] = "fadeInDownBig";
  Ai[Ai["fadeInLeft"] = 8] = "fadeInLeft";
  Ai[Ai["fadeInLeftBig"] = 9] = "fadeInLeftBig";
  Ai[Ai["fadeInRight"] = 10] = "fadeInRight";
  Ai[Ai["fadeInRightBig"] = 11] = "fadeInRightBig";
  Ai[Ai["fadeInUp"] = 12] = "fadeInUp";
  Ai[Ai["fadeInUpBig"] = 13] = "fadeInUpBig";
  Ai[Ai["flip"] = 14] = "flip";
  Ai[Ai["flipInX"] = 15] = "flipInX";
  Ai[Ai["flipInY"] = 16] = "flipInY";
  Ai[Ai["lightSpeedIn"] = 17] = "lightSpeedIn";
  Ai[Ai["rotateIn"] = 18] = "rotateIn";
  Ai[Ai["rotateInDownLeft"] = 19] = "rotateInDownLeft";
  Ai[Ai["rotateInDownRight"] = 20] = "rotateInDownRight";
  Ai[Ai["rotateInUpLeft"] = 21] = "rotateInUpLeft";
  Ai[Ai["rotateInUpRight"] = 22] = "rotateInUpRight";
  Ai[Ai["slideInUp"] = 23] = "slideInUp";
  Ai[Ai["slideInDown"] = 24] = "slideInDown";
  Ai[Ai["slideInLeft"] = 25] = "slideInLeft";
  Ai[Ai["slideInRight"] = 26] = "slideInRight";
  Ai[Ai["zoomIn"] = 27] = "zoomIn";
  Ai[Ai["zoomInDown"] = 28] = "zoomInDown";
  Ai[Ai["zoomInLeft"] = 29] = "zoomInLeft";
  Ai[Ai["zoomInRight"] = 30] = "zoomInRight";
  Ai[Ai["zoomInUp"] = 31] = "zoomInUp";
  Ai[Ai["hinge"] = 32] = "hinge";
  Ai[Ai["jackInTheBox"] = 33] = "jackInTheBox";
  Ai[Ai["rollIn"] = 34] = "rollIn";
})(Ai || (Ai = {}));
var Ao;
(function (Ao) {
  Ao[Ao["bounceOut"] = 0] = "bounceOut";
  Ao[Ao["bounceOutDown"] = 1] = "bounceOutDown";
  Ao[Ao["bounceOutLeft"] = 2] = "bounceOutLeft";
  Ao[Ao["bounceOutRight"] = 3] = "bounceOutRight";
  Ao[Ao["bounceOutUp"] = 4] = "bounceOutUp";
  Ao[Ao["fadeOut"] = 5] = "fadeOut";
  Ao[Ao["fadeOutDown"] = 6] = "fadeOutDown";
  Ao[Ao["fadeOutDownBig"] = 7] = "fadeOutDownBig";
  Ao[Ao["fadeOutLeft"] = 8] = "fadeOutLeft";
  Ao[Ao["fadeOutLeftBig"] = 9] = "fadeOutLeftBig";
  Ao[Ao["fadeOutRight"] = 10] = "fadeOutRight";
  Ao[Ao["fadeOutRightBig"] = 11] = "fadeOutRightBig";
  Ao[Ao["fadeOutUp"] = 12] = "fadeOutUp";
  Ao[Ao["fadeOutUpBig"] = 13] = "fadeOutUpBig";
  Ao[Ao["flipOutX"] = 14] = "flipOutX";
  Ao[Ao["flipOutY"] = 15] = "flipOutY";
  Ao[Ao["lightSpeedOut"] = 16] = "lightSpeedOut";
  Ao[Ao["rotateOut"] = 17] = "rotateOut";
  Ao[Ao["rotateOutDownLeft"] = 18] = "rotateOutDownLeft";
  Ao[Ao["rotateOutDownRight"] = 19] = "rotateOutDownRight";
  Ao[Ao["rotateOutUpLeft"] = 20] = "rotateOutUpLeft";
  Ao[Ao["rotateOutUpRight"] = 21] = "rotateOutUpRight";
  Ao[Ao["slideOutUp"] = 22] = "slideOutUp";
  Ao[Ao["slideOutDown"] = 23] = "slideOutDown";
  Ao[Ao["slideOutLeft"] = 24] = "slideOutLeft";
  Ao[Ao["slideOutRight"] = 25] = "slideOutRight";
  Ao[Ao["zoomOut"] = 26] = "zoomOut";
  Ao[Ao["zoomOutDown"] = 27] = "zoomOutDown";
  Ao[Ao["zoomOutLeft"] = 28] = "zoomOutLeft";
  Ao[Ao["zoomOutRight"] = 29] = "zoomOutRight";
  Ao[Ao["zoomOutUp"] = 30] = "zoomOutUp";
  Ao[Ao["rollOut"] = 31] = "rollOut";
})(Ao || (Ao = {}));
var Aa;
(function (Aa) {
  Aa[Aa["bounce"] = 0] = "bounce";
  Aa[Aa["flash"] = 1] = "flash";
  Aa[Aa["pulse"] = 2] = "pulse";
  Aa[Aa["rubberBand"] = 3] = "rubberBand";
  Aa[Aa["shake"] = 4] = "shake";
  Aa[Aa["swing"] = 5] = "swing";
  Aa[Aa["tada"] = 6] = "tada";
  Aa[Aa["wobble"] = 7] = "wobble";
  Aa[Aa["jello"] = 8] = "jello";
})(Aa || (Aa = {}));
// /* Enum Size */
// Object.keys(animation.in).length / 2
// Object.keys(animation.out).length / 2
// Object.keys(animation.adv).length / 2
var animation = {
  adv: Aa,
  in: Ai,
  out: Ao
};