
// goo-pix
(function(){
  var script = document.createElement('script');
  script.charset = 'utf-8';
  script.async = true;
  script.defer = true;
  script.src = '//bwb101.goo.ne.jp/pix.js?id=e7iy7nrg3l&url=' + escape(document.location) + '&ref=' + escape(document.referrer);
  (document.head || document.getElementsByTagName('head')[0]).appendChild(script);
})();

// 滞在時間・読了率
(function () {
    /*
     * Throttle function borrowed from:
     * Underscore.js 1.5.2
     * http://underscoreb.org
     * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
     * Underscore may be freely distributed under the MIT license.
     */
    function throttle(func, wait) {
        var context, args, result;
        var timeout = null;
        var previous = 0;
        var later = function () {
            previous = new Date;
            timeout = null;
            result = func.apply(context, args);
        };
        return function () {
            var now = new Date;
            if (!previous)
                previous = now;
            var remaining = wait - (now - previous);
            context = this;
            args = arguments;
            if (remaining <= 0) {
                clearTimeout(timeout);
                timeout = null;
                previous = now;
                result = func.apply(context, args);
            }
            else if (!timeout) {
                timeout = setTimeout(later, remaining);
            }
            return result;
        };
    }
    var ec = (function () {
        function ec(id, options) {
            this.start = this.epoch();
            this.sid = Math.floor(this.epoch() / 1000) + "-" + Math.floor(Math.random() * 1000000);
            this.id = id;
            this.options = options;
            this.flags = {};
            this.max_scroll = 0;
            this.vc_count = 0;
        }
        ec.prototype.epoch = function () {
            return (new Date()).getTime();
        };
        ec.prototype.offset_percent = function (prec) {
            if (prec === void 0) { prec = 25; }
            var ch = document.body.scrollHeight - window.innerHeight;
            var os = window.pageYOffset;
            if (ch == 0)
                return 100;
            return Math.floor((os / ch * 100) / prec) * prec;
        };
        ec.prototype.offset_pixel = function () {
            var os = window.pageYOffset;
            return Math.floor((os / 250) * 250);
        };
        ec.prototype.send_ga = function (c, a, l, v) {
            if (!this.options["ga"])
                return;
            if (typeof ga == "function") {
                ga("send", "event", c, a, l, v);
            }
            else if (typeof _gaq == "object" && typeof _gaq.push == "function") {
                _gaq.push("_trackEvent", c, a, l, v);
            }
        };
        ec.prototype.send_scroll = function () {
            var self = this;
            var _send_ga = function (percent) {
                self.flags["GA" + percent + "%"] = true;
                self.send_ga("Scroll Depth", "Percentage", percent + "%", 1);
                self.send_ga("Scroll Depth", "Pixel Depth", self.offset_pixel(), 1);
            };
            var _send_goo = function (percent) {
                if (percent > self.max_scroll)
                    self.max_scroll = percent;
                self.send_eb("scroll");
            };
            //for (var i = 25; i <= 100; i += 25) {
            //    if (!self.flags["GA"+i+"%"] && this.offset_percent() >= i) _send_ga(i);
            //}
            for (var i = 100; i >= 5; i -= 5) {
                if (this.max_scroll < this.offset_percent(5) && this.offset_percent(5) >= i)
                    _send_goo(i);
            }
        };
        ec.prototype.send_eb = function (event_name) {
            if (!this.options["goo"])
                return;
            var url = "//bwb101.goo.ne.jp/e.gif";
            var elap = this.epoch() - this.start;
            if (event_name == "vchange")
                this.vc_count++;
            url += "?id=" + this.id;
            url += "&ev=" + event_name;
            url += "&se=" + this.sid;
            url += "&st=" + this.start;
            url += "&el=" + elap;
            url += "&of=" + this.offset_percent(5);
            url += "&vc=" + this.vc_count;
            url += '&url=' + encodeURI(location.href) + '&ref=' + encodeURI(document.referrer);
            var img = new Image();
            img.src = url;
            //eb(url)
        };
        return ec;
    }());
    var a = new ec("e7iy7nrg3l", { ga: false, goo: true });
    window.addEventListener("load", function () {
        window.addEventListener("visibilitychange", function () {
            a.send_eb("vchange");
        }, false);
        window.addEventListener("pagehide", function () {
            a.send_eb("hide");
        }, false);
        window.addEventListener("scroll", throttle(function () {
            a.send_scroll();
        }, 500), false);
        setTimeout(function () {
            a.send_eb("timer");
        }, 10000);
        setTimeout(function () {
            a.send_eb("timer");
        }, 60000);
        a.send_eb("start");
    }, false);
})();


