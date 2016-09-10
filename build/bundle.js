(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.LibraryName = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.hello = undefined;

var _code = require('./modules/code.es6');

var opr = _interopRequireWildcard(_code);

function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
        return obj;
    } else {
        var newObj = {};if (obj != null) {
            for (var key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
            }
        }newObj.default = obj;return newObj;
    }
}

var root = document.getElementById('root');

(0, opr.default)(5, 9, opr.sum);
(0, opr.default)(5, 9, opr.diff);
(0, opr.default)(5, 9, opr.mul);
(0, opr.default)(5, 9, opr.div);

var ulElem = document.createElement('ul');

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = opr.pretty[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var str = _step.value;

        var liElem = document.createElement('li');
        liElem.innerHTML = str;
        ulElem.appendChild(liElem);
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}

root.appendChild(ulElem);

// Library API
var hello = exports.hello = function hello() {
    return 'Hello World!';
};

},{"./modules/code.es6":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var movies = [{
    title: 'Star Wars: Episode III - Revenge of the Sith',
    year: 2005,
    director: 'George Lucas',
    genre: 'Adventure, Sci-Fi'
}, {
    title: 'Interstellar',
    year: 2014,
    director: 'Christopher Nolan',
    genre: 'Adventure, Drama, Sci-Fi'
}, {
    title: 'Juno',
    year: 2007,
    director: 'Jason Reitman',
    genre: 'Comedy, Drama, Romance'
}];

var pretty = exports.pretty = movies.map(function (movie) {
    var title = movie.title;
    var year = movie.year;
    var director = movie.director;


    return title + ' (' + year + '), ' + director;
});

exports.default = function (a, b, operation) {
    return operation(a, b);
};

var sum = exports.sum = function sum(a, b) {
    return a + b;
};
var diff = exports.diff = function diff(a, b) {
    return a - b;
};
var mul = exports.mul = function mul(a, b) {
    return a * b;
};
var div = exports.div = function div(a, b) {
    return a / b;
};

},{}]},{},[1])(1)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvYXBwLmVzNiIsInNyYy9qcy9tb2R1bGVzL2NvZGUuZXM2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQ0FBOztJLEFBQWdCOzs7Ozs7Ozs7Ozs7OztBQUVoQixJQUFJLE9BQU8sU0FBQSxBQUFTLGVBQXBCLEFBQVcsQUFBd0I7O0FBR25DLElBTGdCLEFBS2hCLGFBQUEsQUFBRyxHQUFILEFBQU0sR0FBRyxJQUFULEFBQWE7QUFDYixJQU5nQixBQU1oQixhQUFBLEFBQUcsR0FBSCxBQUFNLEdBQUcsSUFBVCxBQUFhO0FBQ2IsSUFQZ0IsQUFPaEIsYUFBQSxBQUFHLEdBQUgsQUFBTSxHQUFHLElBQVQsQUFBYTtBQUNiLElBUmdCLEFBUWhCLGFBQUEsQUFBRyxHQUFILEFBQU0sR0FBRyxJQUFULEFBQWE7O0FBRWIsSUFBSSxTQUFTLFNBQUEsQUFBUyxjQUF0QixBQUFhLEFBQXVCOzs7Ozs7SUFFcEM7eUJBQWUsSUFBZixBQUFtQixvSUFBUTtZQUFuQixBQUFtQixZQUN2Qjs7WUFBSSxTQUFTLFNBQUEsQUFBUyxjQUF0QixBQUFhLEFBQXVCLEFBQ3BDO2VBQUEsQUFBTyxZQUFQLEFBQW1CLEFBQ25CO2VBQUEsQUFBTyxZQUFQLEFBQW1CLEFBQ3RCOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVELEtBQUEsQUFBSyxZQUFMLEFBQWlCOztBQUVqQjtBQUNPLElBQU0sd0JBQVEsU0FBUixBQUFRLFFBQUE7V0FBZCxBQUFjLEFBQU07Ozs7Ozs7OztBQ3JCM0IsSUFBTSxTQUFTLENBQ1g7QUFDSSxXQUFPLDhDQURYO0FBRUksVUFBTSxJQUZWO0FBR0ksY0FBVSxjQUhkO0FBSUksV0FBTztBQUpYLENBRFcsRUFPWDtBQUNJLFdBQU8sY0FEWDtBQUVJLFVBQU0sSUFGVjtBQUdJLGNBQVUsbUJBSGQ7QUFJSSxXQUFPO0FBSlgsQ0FQVyxFQWFYO0FBQ0ksV0FBTyxNQURYO0FBRUksVUFBTSxJQUZWO0FBR0ksY0FBVSxlQUhkO0FBSUksV0FBTztBQUpYLENBYlcsQ0FBZjs7QUFxQk8sSUFBTSwwQkFBUyxPQUFPLEdBQVAsQ0FBVyxpQkFBUztBQUFBLFFBQ2pDLEtBRGlDLEdBQ1IsS0FEUSxDQUNqQyxLQURpQztBQUFBLFFBQzFCLElBRDBCLEdBQ1IsS0FEUSxDQUMxQixJQUQwQjtBQUFBLFFBQ3BCLFFBRG9CLEdBQ1IsS0FEUSxDQUNwQixRQURvQjs7O0FBR3RDLFdBQVUsS0FBVixVQUFvQixJQUFwQixXQUE4QixRQUE5QjtBQUNILENBSnFCLENBQWY7O2tCQU1RLFVBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxTQUFQO0FBQUEsV0FBcUIsVUFBVSxDQUFWLEVBQWEsQ0FBYixDQUFyQjtBQUFBLEM7O0FBQ1IsSUFBTSxvQkFBTSxTQUFOLEdBQU0sQ0FBQyxDQUFELEVBQUksQ0FBSjtBQUFBLFdBQVUsSUFBSSxDQUFkO0FBQUEsQ0FBWjtBQUNBLElBQU0sc0JBQU8sU0FBUCxJQUFPLENBQUMsQ0FBRCxFQUFJLENBQUo7QUFBQSxXQUFVLElBQUksQ0FBZDtBQUFBLENBQWI7QUFDQSxJQUFNLG9CQUFNLFNBQU4sR0FBTSxDQUFDLENBQUQsRUFBSSxDQUFKO0FBQUEsV0FBVSxJQUFJLENBQWQ7QUFBQSxDQUFaO0FBQ0EsSUFBTSxvQkFBTSxTQUFOLEdBQU0sQ0FBQyxDQUFELEVBQUksQ0FBSjtBQUFBLFdBQVUsSUFBSSxDQUFkO0FBQUEsQ0FBWiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgYm8sICogYXMgb3ByIGZyb20gJy4vbW9kdWxlcy9jb2RlLmVzNic7XG5cbmxldCByb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKTtcblxuXG5ibyg1LCA5LCBvcHIuc3VtKTtcbmJvKDUsIDksIG9wci5kaWZmKTtcbmJvKDUsIDksIG9wci5tdWwpO1xuYm8oNSwgOSwgb3ByLmRpdik7XG5cbmxldCB1bEVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuXG5mb3IobGV0IHN0ciBvZiBvcHIucHJldHR5KSB7XG4gICAgbGV0IGxpRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbGlFbGVtLmlubmVySFRNTCA9IHN0cjtcbiAgICB1bEVsZW0uYXBwZW5kQ2hpbGQobGlFbGVtKTtcbn1cblxucm9vdC5hcHBlbmRDaGlsZCh1bEVsZW0pO1xuXG4vLyBMaWJyYXJ5IEFQSVxuZXhwb3J0IGNvbnN0IGhlbGxvID0gKCkgPT4gJ0hlbGxvIFdvcmxkISc7IiwiY29uc3QgbW92aWVzID0gW1xuICAgIHtcbiAgICAgICAgdGl0bGU6ICdTdGFyIFdhcnM6IEVwaXNvZGUgSUlJIC0gUmV2ZW5nZSBvZiB0aGUgU2l0aCcsXG4gICAgICAgIHllYXI6IDIwMDUsXG4gICAgICAgIGRpcmVjdG9yOiAnR2VvcmdlIEx1Y2FzJyxcbiAgICAgICAgZ2VucmU6ICdBZHZlbnR1cmUsIFNjaS1GaSdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6ICdJbnRlcnN0ZWxsYXInLFxuICAgICAgICB5ZWFyOiAyMDE0LFxuICAgICAgICBkaXJlY3RvcjogJ0NocmlzdG9waGVyIE5vbGFuJyxcbiAgICAgICAgZ2VucmU6ICdBZHZlbnR1cmUsIERyYW1hLCBTY2ktRmknXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiAnSnVubycsXG4gICAgICAgIHllYXI6IDIwMDcsXG4gICAgICAgIGRpcmVjdG9yOiAnSmFzb24gUmVpdG1hbicsXG4gICAgICAgIGdlbnJlOiAnQ29tZWR5LCBEcmFtYSwgUm9tYW5jZSdcbiAgICB9XG5dO1xuXG5leHBvcnQgY29uc3QgcHJldHR5ID0gbW92aWVzLm1hcChtb3ZpZSA9PiB7XG4gICAgbGV0IHt0aXRsZSwgeWVhciwgZGlyZWN0b3J9ID0gbW92aWU7XG5cbiAgICByZXR1cm4gYCR7dGl0bGV9ICgke3llYXJ9KSwgJHtkaXJlY3Rvcn1gO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IChhLCBiLCBvcGVyYXRpb24pID0+IG9wZXJhdGlvbihhLCBiKTtcbmV4cG9ydCBjb25zdCBzdW0gPSAoYSwgYikgPT4gYSArIGI7XG5leHBvcnQgY29uc3QgZGlmZiA9IChhLCBiKSA9PiBhIC0gYjtcbmV4cG9ydCBjb25zdCBtdWwgPSAoYSwgYikgPT4gYSAqIGI7XG5leHBvcnQgY29uc3QgZGl2ID0gKGEsIGIpID0+IGEgLyBiOyJdfQ==
