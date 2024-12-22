var TOS_ = Object.prototype.toString, HOP_ = Object.prototype.hasOwnProperty;
        // global helpers
            window.roleof = function (o) { return TOS_.call(o).match(/\w+/g)[1]; }
            window.isArray = function (x) { return roleof(x) === "Array"; }
            window.isObject = function (x) { return roleof(x) === "Object"; }
var  summa = (function () {
            var obj_ = {},
        sum_ = function (arr) { var l = arr.length, sum = 0; while (l--) { sum += arr[l]; }; return sum; },
        avg_ = function (arr) { return sum_(arr) / arr.length; },
        num_ = function (arr) { var l = arr.length, sum = 0; while (l--) { arr[l] = arr[l] - 0; }; return arr; } ;

            return {
                /* interface */
                add: function (k, v) {

                    if (! isArray(v) ) v = v - 0;

                    if (!isArray(obj_[k]))
                        obj_[k] = [].concat( isArray(v) ? v : [v] );
                    else
                        obj_[k] = obj_[k].concat( isArray(v) ? v : [v] );
                    return this;
                },
                get: function (k) { return obj_[k]; },
                sum: function (k) { return sum_(obj_[k] || []); },
                avg: function (k) { return avg_(obj_[k] || []); },
                all: function (k) { return obj_[k] || [] },
                rst: function () { obj_ = {}; return this; }
            };
}());