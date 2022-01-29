// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Index.soy.
 */

goog.provide('Index.soy');

goog.require('soy');
goog.require('soydata');


Index.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="title">Blockly Games</span><span id="Index_clear">Delete all your solutions?</span></div>';
};
if (goog.DEBUG) {
  Index.soy.messages.soyTemplateName = 'Index.soy.messages';
}


Index.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return Index.soy.messages(null, null, opt_ijData) + '<div id="header"><img id="banner" src="index/title-beta.png" height="51" width="244" alt="Blockly Games"><select id="languageMenu"></select></div><div id="body"><div id="subtitle">Games for tomorrow\'s programmers. ' + ((opt_ijData.html) ? '<a href="about.html?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">' : '<a href="about?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">') + 'Info for educators...</a></div><div class="games"><div><a href="./puzzle.html?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '" class="game-item"><img src="index/puzzle.png" /><p>Puzzle</p></a><a href="./maze.html?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '" class="game-item"><img src="index/maze.png" /><p>Maze</p></a><a href="./bird.html?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '" class="game-item"><img src="index/bird.png" /><p>Bird</p></a><a href="./turtle.html?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '" class="game-item"><img src="index/turtle.png" /><p>Turtle</p></a></div><div><a href="./movie.html?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '" class="game-item"><img src="index/movie.png" /><p>Movie</p></a><a href="./music.html?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '" class="game-item"><img src="index/music.png" /><p>Music</p></a><a href="./pond.html-tutor?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '" class="game-item"><img src="index/pond-tutor.png" /><p>Pond Tutor</p></a><a href="./pond.html-duck?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '" class="game-item"><img src="index/pond-duck.png" /><p>Pond</p></a></div></div></div><div class="footer"><ul><li><a href="#">Send Feedback</a></li><li><a href="#">About BlockGames</a></li><li><a href="#">FAQ</a></li></ul><ul><li><a href="#">Terms of Service</a></li><li><a href="#">Privacy Policy</a></li><li><a href="#">Licenses</a></li><li><a href="#">Change Language</a></li></ul><div><a href="#"><img src="index/appstore.png" alt=""></a><a href="#"><img src="index/playstore.png" alt=""></a></div></div><p id="clearDataPara" style="visibility: hidden">Want to start over?<button class="secondary" id="clearData">Clear data</span></button></p>';
};
if (goog.DEBUG) {
  Index.soy.start.soyTemplateName = 'Index.soy.start';
}


Index.soy.appLink = function(opt_data, opt_ignored, opt_ijData) {
  return '<svg height="150" width="300" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"' + ((opt_ijData.rtl) ? 'x="' + soy.$$escapeHtml(100 - opt_data.x) + '%"' : 'x="' + soy.$$escapeHtml(opt_data.x) + '%"') + 'y="' + soy.$$escapeHtml(opt_data.y) + '%"><path d="M 111.11,98.89 A 55 55 0 1 1 188.89,98.89" class="gaugeBack" id="back-' + soy.$$escapeHtml(opt_data.app) + '" /><g class="icon" id="icon-' + soy.$$escapeHtml(opt_data.app) + '"><circle cx="150" cy="60" r="50" class="iconBack" /><image xlink:href="index/' + soy.$$escapeHtml(opt_data.app) + '.png" height="100" width="100" x="100" y="10" />' + ((opt_ijData.html) ? '<a id="link-' + soy.$$escapeHtml(opt_data.app) + '" xlink:href="' + soy.$$escapeHtml(opt_data.app) + '.html?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">' : '<a xlink:href="' + soy.$$escapeHtml(opt_data.app) + '?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">') + '<circle cx="150" cy="60" r="50" class="iconBorder" /><path class="gaugeFront" id="gauge-' + soy.$$escapeHtml(opt_data.app) + '" /><text x="150" y="135">' + soy.$$escapeHtml(opt_data.contentText) + '</text></a></g></svg>';
};
if (goog.DEBUG) {
  Index.soy.appLink.soyTemplateName = 'Index.soy.appLink';
}
