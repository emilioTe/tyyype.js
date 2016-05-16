(function(window) {
    "use strict";

    function tyyype(elm, ms) {
        return {
            _elm: elm,
            _ms: isNaN(ms) ? 800 : ms,
            _timer: undefined,
            _$: false,
            _enterFn: undefined,
            _timeoutFn: undefined,
            _log: function (msg) {
                console.log("[tyyype.js] " + msg);
            },
            _init: function () {
                if (!this._elm) return this._log("ERROR: Invalid Element.");

                if ("on" in this._elm) this._$ = true;  // Hacky way of determining if the element is jQuery(esque).
            },
            _listener: function (evt) {
                if (evt.key === "Enter" && this._enterFn) {
                    this._enterFn();
                    return this._cancelTimer();
                }

                if (typeof this._timer === "number") this._cancelTimer();

                this._timer = setTimeout(this._timeoutFn, this._ms);
            },
            _cancelTimer: function () {
                if (typeof this._timer === "number") {
                    window.clearTimeout(this._timer);
                    this._timer = undefined;
                }
            },
            onEnter: function (fn) {
                if (!(typeof fn === "function")) return this._log("ERROR: Invalid 'Enter' Function.");
                this._enterFn = fn;
                return this;
            },
            onTimeout: function (fn) {
                if (!(typeof fn === "function")) return this._log("ERROR: Invalid 'Timeout' Function.");
                this._timeoutFn = fn;
                return this;
            },
            listen: function (fn) {
                this._init();

                if (this._$) {
                    this._elm.on("keyup", this._listener.bind(this));
                } else {
                    this._elm.addEventListener("keyup", this._listener.bind(this));
                }
            }
        };
    }

    window.tyyype = tyyype;
})(window);
