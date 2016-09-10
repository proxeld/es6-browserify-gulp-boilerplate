(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvYXBwLmVzNiIsInNyYy9qcy9tb2R1bGVzL2NvZGUuZXM2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7SSxBQUFnQjs7Ozs7Ozs7Ozs7Ozs7QUFFaEIsSUFBSSxPQUFPLFNBQUEsQUFBUyxlQUFwQixBQUFXLEFBQXdCOztBQUduQyxJQUxnQixBQUtoQixhQUFBLEFBQUcsR0FBSCxBQUFNLEdBQUcsSUFBVCxBQUFhO0FBQ2IsSUFOZ0IsQUFNaEIsYUFBQSxBQUFHLEdBQUgsQUFBTSxHQUFHLElBQVQsQUFBYTtBQUNiLElBUGdCLEFBT2hCLGFBQUEsQUFBRyxHQUFILEFBQU0sR0FBRyxJQUFULEFBQWE7QUFDYixJQVJnQixBQVFoQixhQUFBLEFBQUcsR0FBSCxBQUFNLEdBQUcsSUFBVCxBQUFhOztBQUViLElBQUksU0FBUyxTQUFBLEFBQVMsY0FBdEIsQUFBYSxBQUF1Qjs7Ozs7O0lBRXBDO3lCQUFlLElBQWYsQUFBbUIsb0lBQVE7WUFBbkIsQUFBbUIsWUFDdkI7O1lBQUksU0FBUyxTQUFBLEFBQVMsY0FBdEIsQUFBYSxBQUF1QixBQUNwQztlQUFBLEFBQU8sWUFBUCxBQUFtQixBQUNuQjtlQUFBLEFBQU8sWUFBUCxBQUFtQixBQUN0Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxLQUFBLEFBQUssWUFBTCxBQUFpQjs7Ozs7Ozs7QUNsQmpCLElBQU07V0FDRixBQUNXLEFBQ1A7VUFGSixBQUVVLEFBQ047Y0FISixBQUdjLEFBQ1Y7V0FMTyxBQUNYLEFBQ0ksQUFHTzs7V0FFWCxBQUNXLEFBQ1A7VUFGSixBQUVVLEFBQ047Y0FISixBQUdjLEFBQ1Y7V0FYTyxBQU9YLEFBQ0ksQUFHTzs7V0FFWCxBQUNXLEFBQ1A7VUFGSixBQUVVLEFBQ047Y0FISixBQUdjLEFBQ1Y7V0FqQlIsQUFBZSxBQWFYLEFBQ0ksQUFHTzs7O0FBSVIsSUFBTSxpQ0FBUyxBQUFPLElBQUksaUJBQVM7UUFBQSxBQUNqQyxRQURpQyxBQUNSLE1BRFEsQUFDakM7UUFEaUMsQUFDMUIsT0FEMEIsQUFDUixNQURRLEFBQzFCO1FBRDBCLEFBQ3BCLFdBRG9CLEFBQ1IsTUFEUSxBQUNwQixBQUVsQjs7V0FBQSxBQUFVLGVBQVYsQUFBb0IsZUFIakIsQUFBZSxBQUdsQixBQUE4QixBQUNqQzs7O2tCQUVjLFVBQUEsQUFBQyxHQUFELEFBQUksR0FBSixBQUFPLFdBQVA7V0FBcUIsVUFBQSxBQUFVLEcsQUFBL0IsQUFBcUIsQUFBYTs7O0FBQzFDLElBQU0sb0JBQU0sU0FBTixBQUFNLElBQUEsQUFBQyxHQUFELEFBQUksR0FBSjtXQUFVLElBQXRCLEFBQVksQUFBYzs7QUFDMUIsSUFBTSxzQkFBTyxTQUFQLEFBQU8sS0FBQSxBQUFDLEdBQUQsQUFBSSxHQUFKO1dBQVUsSUFBdkIsQUFBYSxBQUFjOztBQUMzQixJQUFNLG9CQUFNLFNBQU4sQUFBTSxJQUFBLEFBQUMsR0FBRCxBQUFJLEdBQUo7V0FBVSxJQUF0QixBQUFZLEFBQWM7O0FBQzFCLElBQU0sb0JBQU0sU0FBTixBQUFNLElBQUEsQUFBQyxHQUFELEFBQUksR0FBSjtXQUFVLElBQXRCLEFBQVksQUFBYyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgYm8sICogYXMgb3ByIGZyb20gJy4vbW9kdWxlcy9jb2RlLmVzNic7XG5cbmxldCByb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKTtcblxuXG5ibyg1LCA5LCBvcHIuc3VtKTtcbmJvKDUsIDksIG9wci5kaWZmKTtcbmJvKDUsIDksIG9wci5tdWwpO1xuYm8oNSwgOSwgb3ByLmRpdik7XG5cbmxldCB1bEVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuXG5mb3IobGV0IHN0ciBvZiBvcHIucHJldHR5KSB7XG4gICAgbGV0IGxpRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbGlFbGVtLmlubmVySFRNTCA9IHN0cjtcbiAgICB1bEVsZW0uYXBwZW5kQ2hpbGQobGlFbGVtKTtcbn1cblxucm9vdC5hcHBlbmRDaGlsZCh1bEVsZW0pO1xuXG4iLCJjb25zdCBtb3ZpZXMgPSBbXG4gICAge1xuICAgICAgICB0aXRsZTogJ1N0YXIgV2FyczogRXBpc29kZSBJSUkgLSBSZXZlbmdlIG9mIHRoZSBTaXRoJyxcbiAgICAgICAgeWVhcjogMjAwNSxcbiAgICAgICAgZGlyZWN0b3I6ICdHZW9yZ2UgTHVjYXMnLFxuICAgICAgICBnZW5yZTogJ0FkdmVudHVyZSwgU2NpLUZpJ1xuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogJ0ludGVyc3RlbGxhcicsXG4gICAgICAgIHllYXI6IDIwMTQsXG4gICAgICAgIGRpcmVjdG9yOiAnQ2hyaXN0b3BoZXIgTm9sYW4nLFxuICAgICAgICBnZW5yZTogJ0FkdmVudHVyZSwgRHJhbWEsIFNjaS1GaSdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6ICdKdW5vJyxcbiAgICAgICAgeWVhcjogMjAwNyxcbiAgICAgICAgZGlyZWN0b3I6ICdKYXNvbiBSZWl0bWFuJyxcbiAgICAgICAgZ2VucmU6ICdDb21lZHksIERyYW1hLCBSb21hbmNlJ1xuICAgIH1cbl07XG5cbmV4cG9ydCBjb25zdCBwcmV0dHkgPSBtb3ZpZXMubWFwKG1vdmllID0+IHtcbiAgICBsZXQge3RpdGxlLCB5ZWFyLCBkaXJlY3Rvcn0gPSBtb3ZpZTtcblxuICAgIHJldHVybiBgJHt0aXRsZX0gKCR7eWVhcn0pLCAke2RpcmVjdG9yfWA7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgKGEsIGIsIG9wZXJhdGlvbikgPT4gb3BlcmF0aW9uKGEsIGIpO1xuZXhwb3J0IGNvbnN0IHN1bSA9IChhLCBiKSA9PiBhICsgYjtcbmV4cG9ydCBjb25zdCBkaWZmID0gKGEsIGIpID0+IGEgLSBiO1xuZXhwb3J0IGNvbnN0IG11bCA9IChhLCBiKSA9PiBhICogYjtcbmV4cG9ydCBjb25zdCBkaXYgPSAoYSwgYikgPT4gYSAvIGI7Il19
