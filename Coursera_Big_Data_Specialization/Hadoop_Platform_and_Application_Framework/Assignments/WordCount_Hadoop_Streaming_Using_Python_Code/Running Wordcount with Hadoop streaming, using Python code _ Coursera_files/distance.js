"use strict";!function(n){var e=function init(_){return{levenshteinDistance:function levenshteinDistance(f,o){if(!_.isString(f)||!_.isString(o))return void 0;var i=f.length,t=o.length,e=new Array(i+1),n,r;for(n=0;i>=n;n++)e[n]=new Array(t+1),e[n][0]=n;for(n=0;t>=n;n++)e[0][n]=n;for(n=1;i>=n;n++)for(r=1;t>=r;r++)f[n-1]===o[r-1]?e[n][r]=e[n-1][r-1]:e[n][r]=Math.min(e[n-1][r],e[n][r-1],e[n-1][r-1])+1;return e[i][t]}}};"function"==typeof define&&define.amd?define("js/lib/distance",["require","underscore"],function(require){var _=require("underscore");return e(_)}):n.distance=e(n._)}(window);