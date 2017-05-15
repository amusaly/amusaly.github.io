#!/usr/bin/node
'use strict';

var browserslist = require('browserslist');
/*
var list = browserslist('> 0.5% in FR, > 0.5% in my stats, last 2 versions, Firefox ESR', {stats:'_stats/sos-cipav.json'})
/*/
var list = browserslist('> 0.5% in FR, > 0.5% in my stats, last 2 versions, Firefox ESR', {stats:'_stats/imsl.json'})
//*/
//console.log(list)

for(var i=0; i<list.length; i++){
	var b = list[i]
	console.log(b, browserslist.coverage([b], "FR"))
}
console.log("-----")
console.log("Total", browserslist.coverage(list, "FR"))

//var pf = require('polyfill-service')

//console.log(pf.listAllPolyfills())

