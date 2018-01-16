define("navflayer/navflayer_new2", ["jquery"], function(e) {
    "use strict";
    function n() {
        var e = 0
          , n = i.localStorage;
        if (n)
            for (var t = 0, o = n.length; t < o; t++) {
                var h = n.key(t)
                  , s = n.getItem(h);
                if (h.indexOf("_message") > 0 && "chat_messageid" != h)
                    for (var r = s.split(";"), c = r.length, l = 0; l < c; l++) {
                        var d = r[l].split(",");
                        "r" == d[0] && "0" == d[1] && e++
                    }
                0 != e && (e > 99 && (e = 99),
                a("#chatallnum").html(e).show())
            }
    }
    //压缩后
    var a = e("jquery")
      , i = seajs.data.vars
      , t = !0
      , o = ""
      , h = a("header").css("position")
      , s = a(".headBox");
    a(".icon-nav").on("click", function() {
        t ? (t = !1,
        "fixed" === h && a("header").css("position", "relative"),
        "huXingInfo" == i.action && a(".header").show(),
        ("ask" === i.currentChannel && "index" === i.action || "bbs" === i.currentChannel && ("index" === i.action || "search" === i.action)) && a(".search").hide(),
        "ask" !== i.currentChannel || "search" !== i.action && "tagAskList" !== i.action && "seoList" !== i.action || a(".pdY7").hide(),
        a(".nav-top-box").hide(),
        a(".main").hide(),
        a("#searchid").hide(),
        a(".footer").hide(),
        a(".crumbs").hide(),
        a(".header").show(),
        a(".newNav").show(),
        a(".floatTel").hide(),
        a.get("/public/?c=public&a=ajaxUserInfo", function(e) {
            o = e.nickname ? e.nickname : e.username ? e.username : "\u6211\u7684\u623f\u5929\u4e0b",
            a("#navflayerinfo a").text(o),
            (e.nickname || e.username) && n()
        })) : (("ask" === i.currentChannel && "index" === i.action || "bbs" === i.currentChannel && ("index" === i.action || "search" === i.action)) && a(".search").show(),
        "ask" !== i.currentChannel || "search" !== i.action && "tagAskList" !== i.action && "seoList" !== i.action || a(".pdY7").show(),
        t = !0,
        "xfinfotjwh" == i.subaction && a(".header").hide(),
        "newPrivilege" != i.action && "newPrivilegeOne" != i.action || a(".floatTel").show(),
        "zf" != i.currentChannel && "esf" != i.currentChannel && "schoolhouse" !== i.currentChannel || "detail" != i.action && "jhdetail" != i.action || i.issfapp || !i.havePic || 0 === parseInt(i.havePic) || a(".header").hide(),
        "zf" != i.currentChannel && "esf" != i.currentChannel && "schoolhouse" !== i.currentChannel || "detail" != i.action || i.issfapp || a(".floatTel").show(),
        "news" === i.currentChannel && "detail" === i.action && a(".floatTel").show(),
        "xiaoqu" === i.currentChannel && "xqDetail" === i.action && (a(".header").hide(),
        a(".floatTel").show()),
        "agent" === i.currentChannel && "agentShop" === i.action && a(".floatTel").show(),
        s.length && a("header").hide(),
        a("header").css("position", h),
        a(".nav-top-box").show(),
        a(".main").show(),
        a("#searchid").show(),
        a(".footer").show(),
        a(".crumbs").show(),
        a(".newNav").hide())
    })
});
define("lazyload/1.9.1/lazyload", ["jquery"], function(A, t, e) {
    var i = A("jquery")
      , n = i(window)
      , o = window.document;
    i.fn.lazyload = function(A) {
        function t() {
            var A = 0;
            r.each(function() {
                var t = i(this);
                if (!g.skip_invisible || t.is(":visible"))
                    if (i.abovethetop(this, g) || i.leftofbegin(this, g))
                        ;
                    else if (i.belowthefold(this, g) || i.rightoffold(this, g)) {
                        if (++A > g.failure_limit)
                            return !1
                    } else
                        t.trigger("appear"),
                        A = 0
            })
        }
        var e, r = this, g = {
            threshold: 0,
            failure_limit: 0,
            event: "scroll",
            effect: "show",
            container: window,
            data_attribute: "original",
            skip_invisible: !0,
            appear: null,
            load: null,
            placeholder: "data:image/jpg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABaAAD/4QOHaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjUtYzAyMSA3OS4xNTU3NzIsIDIwMTQvMDEvMTMtMTk6NDQ6MDAgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6QTEzOUZERkFDQTM0MTFFNEI3OUM4NDM1QjgxRkZGMjUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NkRFMkIwQkYzNzdDMTFFNkIyRDdDOTBBMkJFRTlEM0MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NkRFMkIwQkUzNzdDMTFFNkIyRDdDOTBBMkJFRTlEM0MiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjM4NGE3NGIwLTg4MWUtNGI0NC1hZjQwLTExZTZiYzFlMmRlZiIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmFjOTUzNDdjLTdmZTYtMTE3OS1hM2M3LTk2NzBlZjZjMmQzYyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv/uAA5BZG9iZQBkwAAAAAH/2wCEAAEBAQEBAQEBAQECAQEBAgICAQECAgICAgICAgIDAgMDAwMCAwMEBAQEBAMFBQUFBQUHBwcHBwgICAgICAgICAgBAQEBAgICBQMDBQcFBAUHCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICP/AABEIAJQAxgMBEQACEQEDEQH/xAB1AAEAAQUBAQAAAAAAAAAAAAAABgIDBAUHAQoBAQAAAAAAAAAAAAAAAAAAAAAQAAEEAgIBAgUCAwUJAAAAAAEAAgMEEQUSBiExE0FRYSIUcYGhsTKRwhUWB8FSYnKSIzNTJREBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A+0hAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQdHpaDrlTr1PdbyWZ7rpw1sR8AkuwAAPk3JJKDI1trpFXmYNLb2XuePclgbMAPoC7A/sygqqajpuyvMrR1dhUlsk+1E9pZGDguxnDiP3KCI7bT1Nb2N+pdZdHRbJCHWn4LmRyNa4k4wPtDkEuf1rorSB/mR2fmLFdw/gxBkXOmdT17IJbu6mgjs+a7i+L7xgHIxGfHn1QR3e6bqtPXGxqd065cDmhtcyRv5NJ8+GMaRj5oN1Q6j1abV07tvdujknja6Zwnrxsa4jJbh7SfB8eSgzWdD61LXdci3b302Z52RLA6MY9cuDcDCDHi6t0Zxx/mPm74D8qs3+4ghHZNfrdZsvxtXd/OrcGudJya8teSQW8mAA+AD+6DQICAgICAgICAgICAgICDsOjdZl6G+KFzPedIYq7pQ1zG+5YazzzBGPuPwQbSjqe3QPqxXd9BFqqzcStgYxr+LW+AC6EAfU5QXpzuxdcNX2SpNUeBwr2DG+RrvQ4MTQSP1KDm+31zx2iOHsmzjAu8X2r0Po1vEtaMEfaftA9PTyg8ua3qEF6tFDvZ5qrnYtObEH8G4PnnhoPn5NKDo/ZtV1w6/Wnc25alaiBDTmYSXHLB4IDH58M+SCB3dd0VuvtS0NxPJbjYTWjcD9zwPAIMTfBKCBIOpdWdXi6XvpLsJsVPdeJYWni4j24x4J9CM5QQq9obdSjW2sRbb1lpoLbLMn23HxxeMDBB8fJBgauEWNlrq7m8hPPCwtPkEOkDcfxQdh7Lc0HXX1I3dZrXDaDz4ihZxDCB/63ZzlBzjfbeht2Vo9doY9U6EuMromsy8EAAHgxvphBGXNcw4e0tPyIx/NBTjHqgIPQC44aCT8ggEEEgjBHqEFTY5HAubG5zR6uAJAwgrirzz8vYgfNx/q4Nc7H64CC1gg4x5HqEHiAgIKmMfI9kcbS+SQhrGDySScABB2PeVBoeht1r3D35DG2Qj4yPl95wH6YIQUad0PWumS2NtV97/EJHPFB4GZPcaGNaQ7OMhuT9EGv6/sdX2LYjWTdVqQwvY9zpomBrmBo+Ja0HyfHqEEE3VBlHc39fVzJHDKWwN/qdg+QPqRnCCY9a6dK17dvv2CnQqD3BXk8OfxGcvB9Gj5H1QbCj2Cn2e9ttJtCW0tm/OpefBjcwBrQM+hOOQ+uR8UEI3nWtnopXixCZauf+1dYCY3D4Z/3T9CgjyDrmmhx/p3sjj/AMrbD/8ApPH+6gjHUux19X+Trtq0y6i6D7jS3mGOIwTx+II8FBhaKKtL22iylyNMWuVXl/V7bHF7c/sEE+7n2naaTY1qmvexrHwCSTkwOOXPc34/8qDS6u127dizs2X4tVTcGNtbF7WMaWxcsAZBPjkfkPqgk74q1/rZEmwO8c2zCyLYPYGn3HWI4/s8Zx5x6+f0QWt7u3U+16mlXowSzT+wyW3I0uka2WYt4sORxxnOUF25oaO27Vbt3Yw6rrq8Blh9BJK4vILseoDR/JA6p2T/ABjYW6dXXRUNbWiLoWsGHk8w0Z44aPGfGEEO69rKu97XtZbjRLXgknnMJ9HuM2AD9POUFt3attub8enrPZrtZsHisKzI4/tild7Z8uBOcH4YQZvY+w3NBsBpNDx11PXNj5hrGOMj3MD8uLwc+D+6CUwVoLW76tu/ZbXu36s0ltjRjJ9hoB/b3MZ/RBRoNuy9teyVfwIYaVcyule1pMkrjI4Evc4nOQD4x49EGr1WzZsOo9jDtfBTq1Y5GVoYmkDzFkFxcTlwODlByJBerzyVbEFmE8Zqz2yROIzhzHBw8fqEEg2fa9nt7NGxcbEWUHtkiqtaRG5wIOXBxJOcY9UFzsfarXYXVg6AVK9XJZAHc8vPq4kgZ+gwgkUP+o74q5/+NELxaA6y1/FjiPQlobn9uSCJ6jfya3cu3M9cX5pDIZWuPE8pPJcDg4P7IMrfdu2e9HsPxUpZz+IwnDseRzcfLv5fRBFgS0hzTgjyCPUFBPa3f9g3WTa+9VZsHvjdHHZc7BwRx+8YId/BBAUEtqdrnq9dsaAVWvEwe1lrkRxZIcuHHHk+Tg5QRJBttHsxp9pV2Rr/AJX43PEHLhkujcz1w70zn0QX+xbs7/YC8a34oEbY2w8+eA0k5zxb8/kg3tftOtd12HRbHWSTtgPh0cojDsPLwScEj18+qDyt3KGpr6+ug0/tw17LJ24nJyGTicN+5hPwAzlBr7vZfzOxV986lxFd0RbT9zOfa/4+Pz8+iDd1e/SQ7e/sH6/NXYNia+p7mXMMTeIIcWjOcnIwgmPUrWusN2eypaQaio0DNjkSZccnOwMAAN8eiDmdDsx1klCxR18cNquJW35+Tj+U2Rwdhw8Yxjx6/wCxBf2e90dtstqloTQ28jmvZcbO7jHIHh5cGjAJ8fJBfn7Lp9lJDd3GhNnZRNaJJI5jHHNx9OTcFB5W7raj3TtxZqNsBsJgq02v9tkTC5rvB4u+SDB1HZXaobo/ifkSbdpb7nucfbJ5+ccTn+r6eiC3S7D+FoNjpG1OZ2Dy51v3McQQwY48Tn+n5/FBG0BAQEBAQEBAQEBAQEBAQEBBKtX26/qaLKENKrPDGXOD5Y3vdlxz8HgfwQVbLum82VZ9N8kdWtIOMkULOHJvyyS44/QoImgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIP//Z"
        };
        return A && (void 0 !== A.failurelimit && (A.failure_limit = A.failurelimit,
        delete A.failurelimit),
        void 0 !== A.effectspeed && (A.effect_speed = A.effectspeed,
        delete A.effectspeed),
        i.extend(g, A)),
        e = void 0 === g.container || g.container === window ? n : i(g.container),
        0 === g.event.indexOf("scroll") && e.bind(g.event, function() {
            return t()
        }),
        this.each(function() {
            var A = this
              , t = i(A);
            A.loaded = !1,
            t.attr("src") || t.is("img") && t.attr("src", g.placeholder),
            t.one("appear", function() {
                if (!this.loaded) {
                    if (g.appear) {
                        var e = r.length;
                        g.appear.call(A, e, g)
                    }
                    i("<img />").bind("load", function() {
                        var e = t.attr("data-" + g.data_attribute);
                        t.hide(),
                        t.is("img") ? t.attr("src", e) : t.css("background-image", "url('" + e + "')"),
                        t[g.effect](g.effect_speed),
                        A.loaded = !0;
                        var n = i.grep(r, function(A) {
                            return !A.loaded
                        });
                        if (r = i(n),
                        g.load) {
                            var o = r.length;
                            g.load.call(A, o, g)
                        }
                    }).attr("src", t.attr("data-" + g.data_attribute))
                }
            }),
            0 !== g.event.indexOf("scroll") && t.bind(g.event, function() {
                A.loaded || t.trigger("appear")
            })
        }),
        n.bind("resize", function() {
            t()
        }),
        /(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion) && n.bind("pageshow", function(A) {
            A.originalEvent && A.originalEvent.persisted && r.each(function() {
                i(this).trigger("appear")
            })
        }),
        i(o).ready(function() {
            t()
        }),
        this
    }
    ,
    i.belowthefold = function(A, t) {
        var e;
        return e = void 0 === t.container || t.container === window ? (window.innerHeight ? window.innerHeight : n.height()) + n.scrollTop() : i(t.container).offset().top + i(t.container).height(),
        e <= i(A).offset().top - t.threshold
    }
    ,
    i.rightoffold = function(A, t) {
        var e;
        return e = void 0 === t.container || t.container === window ? n.width() + n.scrollLeft() : i(t.container).offset().left + i(t.container).width(),
        e <= i(A).offset().left - t.threshold
    }
    ,
    i.abovethetop = function(A, t) {
        var e;
        return e = void 0 === t.container || t.container === window ? n.scrollTop() : i(t.container).offset().top,
        e >= i(A).offset().top + t.threshold + i(A).height()
    }
    ,
    i.leftofbegin = function(A, t) {
        var e;
        return e = void 0 === t.container || t.container === window ? n.scrollLeft() : i(t.container).offset().left,
        e >= i(A).offset().left + t.threshold + i(A).width()
    }
    ,
    i.inviewport = function(A, t) {
        return !(i.rightoffold(A, t) || i.leftofbegin(A, t) || i.belowthefold(A, t) || i.abovethetop(A, t))
    }
    ,
    i.extend(i.expr[":"], {
        "below-the-fold": function(A) {
            return i.belowthefold(A, {
                threshold: 0
            })
        },
        "above-the-top": function(A) {
            return !i.belowthefold(A, {
                threshold: 0
            })
        },
        "right-of-screen": function(A) {
            return i.rightoffold(A, {
                threshold: 0
            })
        },
        "left-of-screen": function(A) {
            return !i.rightoffold(A, {
                threshold: 0
            })
        },
        "in-viewport": function(A) {
            return i.inviewport(A, {
                threshold: 0
            })
        },
        "above-the-fold": function(A) {
            return !i.belowthefold(A, {
                threshold: 0
            })
        },
        "right-of-fold": function(A) {
            return i.rightoffold(A, {
                threshold: 0
            })
        },
        "left-of-fold": function(A) {
            return !i.rightoffold(A, {
                threshold: 0
            })
        }
    }),
    e.exports = i
});
define("search/esf/esfSearch", ["jquery", "search/mainSearch"], function(e, t, s) {
    "use strict";
    function a() {
        this.titCon = i(".input").text().trim(),
        r.jhList ? this.html = '<div class="searchPage"><header class="header"><div class="left" id="wapesfyx_D01_08"><a href="javascript:void(0);" class="back"><i></i></a></div><div class="cent"><span>\u4e8c\u624b\u623f\u641c\u7d22</span></div></header><form class="search" action="" onsubmit="return false;" method="get" autocomplete="off"><div class="searbox"><div class="ipt" id="wapesfyx_D01_09"><input type="search" name="q" value="" placeholder="' + this.titCon + '" autocomplete="off"><a href="javascript:void(0);" class="off" style="display: none;"></a></div><a href="javascript:void(0);" id="wapesfyx_D01_18" class="btn" rel="nofollow"><i></i></a></div></form><div class="searLast" id="wapesfyx_D01_19" style="display: none;"><h3><span class="s-icon-hot"></span>\u6700\u8fd1\u70ed\u641c</h3><div class="cont clearfix" id="hotList"></div></div><div class="searHistory" id="historyList"><h3><span class="s-icon-his"></span>\u641c\u7d22\u5386\u53f2</h3><div style="margin-bottom: 50px;"><div class="searList" id="wapesfyx_D01_10"><ul></ul></div><div class="clearBtn" id="wapesfyx_D01_32"><a href="javascript:void(0);">\u6e05\u9664\u5386\u53f2\u8bb0\u5f55</a></div></div></div><div id="autoPromptList"><div style="margin-bottom: 50px;"><div class="searList" id="wapesfyx_D01_31"><ul></ul></div></div></div></div>' : this.html = '<div class="searchPage"><header class="header"><div class="left" id="wapesfsy_D01_08"><a href="javascript:void(0);" class="back"><i></i></a></div><div class="cent"><span>\u4e8c\u624b\u623f\u641c\u7d22</span></div></header><form class="search" action="" onsubmit="return false;" method="get" autocomplete="off"><div class="searbox"><div class="ipt" id="wapesfsy_D01_09"><input type="search" name="q" value="" placeholder="' + this.titCon + '" autocomplete="off"><a href="javascript:void(0);" class="off" style="display: none;"></a></div><a href="javascript:void(0);" id="wapesfsy_D01_18" class="btn" rel="nofollow"><i></i></a></div></form><div class="searLast" id="wapesfsy_D01_19" style="display: none;"><h3><span class="s-icon-hot"></span>\u6700\u8fd1\u70ed\u641c</h3><div class="cont clearfix" id="hotList"></div></div><div class="searHistory" id="historyList"><h3><span class="s-icon-his"></span>\u641c\u7d22\u5386\u53f2</h3><div style="margin-bottom: 50px;"><div class="searList" id="wapesfsy_D01_10"><ul></ul></div><div class="clearBtn" id="wapesfsy_D01_32"><a href="javascript:void(0);">\u6e05\u9664\u5386\u53f2\u8bb0\u5f55</a></div></div></div><div id="autoPromptList"><div style="margin-bottom: 50px;"><div class="searList" id="wapesfsy_D01_31"><ul></ul></div></div></div></div>',
        this.historyMark = r.city + "newEsfHistory",
        this.showPopBtn = "#new_searchtext",
        this.findBackBtn = ".back",
        this.findSearchBtn = ".btn",
        this.findOffBtn = ".off",
        this.findSearchInput = "input",
        this.findHotSearchList = "#hotList",
        this.findHistoryList = "#historyList",
        this.findDeleteHistoryListBtn = "#historyList a",
        this.findAutoPromptList = "#autoPromptList",
        this.columnType = 2,
        this.findCloseAutoPromptListBtn = "#autoPromptList a",
        this.HISTORY_NUMBER = 10,
        this.standardObj = {
            key: "",
            showWord: "",
            suffix: "",
            purpose: "",
            room: "",
            adUrl: "",
            comarea: "",
            district: "",
            tags: "",
            brand: "",
            enterprise: "",
            subwayId: "",
            stationId: ""
        }
    }
    var i = e("jquery")
      , o = e("search/mainSearch")
      , r = seajs.data.vars;
    r.city = r.city || r.paramcity,
    i.extend(a.prototype, o),
    a.prototype.cacheData = function() {
        var e = this;
        r.sessionStorage && (e.esfHotWord = r.sessionStorage.getItem(r.city + "esfHotWord")),
        e.esfHotWord ? e.hotSearchList.html(e.esfHotWord) : i.get(r.esfSite + "?c=esf&a=ajaxGetHotWords", {
            city: r.city,
            type: e.columnType,
            purpose_oper: r.purpose_oper
        }, function(t) {
            if (t && i.isArray(t))
                for (var s = "", a = 0; a < t.length; a++) {
                    if (t[a]) {
                        var o = e.getFormatCondition({
                            key: t[a].Keyword,
                            purpose: t[a].Purpose,
                            showWord: t[a].Keyword,
                            suffix: "\u51fa\u552e"
                        })
                          , c = t[a].ad;
                        c && (o.adUrl = t[a].linkUrl),
                        /jhtype/.test(location.href) && (o.jhtype = location.href.match(/jhtype=([^&]*)(&|$)/)[1]),
                        s += r.jhList ? '<a href="javascript:void(0);"' + (c ? ' id="wapxfyx_D01_32"' : "") + ">" + (c ? '<span class="tag-icon">\u5e7f\u544a</span>' : "") + '<span class="searchListName" data-ywtype=\'' + e.setJumpCondition(o) + "'>" + t[a].Keyword + "</span></a>" : '<a href="javascript:void(0);"' + (c ? ' id="wapxfsy_D01_32"' : "") + ">" + (c ? '<span class="tag-icon">\u5e7f\u544a</span>' : "") + '<span class="searchListName" data-ywtype=\'' + e.setJumpCondition(o) + "'>" + t[a].Keyword + "</span></a>"
                    }
                    r.sessionStorage && (e.esfHotWord = r.sessionStorage.setItem(r.purpose_oper + r.city + "esfHotWord", s)),
                    e.hotSearchList.html(s)
                }
        })
    }
    ,
    a.prototype.createAutoPromptList = function(e) {
        var t = r.esfSite + "?c=esf&a=ajaxGetAllSearchTip"
          , s = location.href
          , a = {
            q: e,
            city: r.city,
            type: this.columnType,
            purpose: r.purpose
        };
        /tjftype/.test(s) && (a.tjftype = s.match(/tjftype=([^&]*)(&|$)/)[1]),
        /jhtype/.test(s) && (a.jhtype = s.match(/jhtype=([^&]*)(&|$)/)[1]),
        o.createAutoPromptList.call(this, e, t, a)
    }
    ,
    a.prototype.getAutoPromptListContent = function(e, t) {
        for (var s = this, a = e.length, i = "", o = '<li><a href="javascript:void(0);"><span class="num">\u7ea6search_num\u6761</span><span class="searchListName" data-ywtype=\'zz\'>xx</span><span class="gray-b"> - yy</span><p>hh</p></a></li>', r = 0; r < a; r++) {
            var c = ""
              , n = ""
              , p = ""
              , d = s.getFormatCondition()
              , h = e[r];
            switch (h.category) {
            case "1":
            case "2":
            case "4":
            case "5":
                d.key = p = h.projname,
                n = "\u51fa\u552e";
                break;
            case "3":
                d.key = p = h.projname + "\u51fa\u552e",
                n = "\u623f\u4f01";
                break;
            case "6":
                d.key = p = h.projname,
                d.district = h.district,
                n = "\u51fa\u552e";
                break;
            case "7":
                d.key = p = h.projname,
                d.comarea = h.comarea,
                d.district = h.district,
                n = "\u51fa\u552e";
                break;
            case "8":
                d.key = p = h.projname + "\u51fa\u552e",
                n = "\u6807\u7b7e";
                break;
            case "11":
                d.key = p = h.projname,
                d.subwayId = h.word,
                n = "\u51fa\u552e";
                break;
            case "12":
                d.key = p = h.projname,
                d.subwayId = h.subwayline,
                d.stationId = h.word,
                n = "\u51fa\u552e";
                break;
            case "13":
                d.key = p = h.projname
            }
            d.showWord = p,
            d.suffix = n,
            d.purpose = h.purpose,
            c = o.replace("xx", p.replace(t, "<em>" + t + "</em>")),
            c = Number(h.countinfo) ? Number(h.countinfo) < 10 ? c.replace("\u7ea6search_num", h.countinfo) : c.replace("search_num", h.countinfo) : c.replace("\u7ea6search_num\u6761", ""),
            c = n ? c.replace("yy", n) : c.replace(" - yy", ""),
            c = h.zmlocal ? c.replace("hh", h.zmlocal) : c.replace("<p>hh</p>", ""),
            (h.tjftype || /tjftype/.test(location.href)) && (d.tjftype = h.tjftype || location.href.match(/tjftype=([^&]*)(&|$)/)[1]),
            (h.jhtype || /jhtype/.test(location.href)) && (d.jhtype = h.jhtype || location.href.match(/jhtype=([^&]*)(&|$)/)[1]),
            c = c.replace("zz", s.setJumpCondition(d)),
            i += c
        }
        return i
    }
    ,
    a.prototype.createHotSearch = function() {
        var e = this;
        if (/tjftype/.test(location.href))
            return void e.hotSearchList.parent().hide();
        e.hotSearchList.parent().show();
        var t = e.hasHistory();
        return e.hotSearchList.children().length > 0 ? void (t ? e.scroll ? (e.scroll.refresh(),
        e.scroll.scrollTo(0, 0)) : (e.hotSearchList.html('<div id="scroller">' + e.hotSearchList.html() + "</div>"),
        e.setScroll()) : e.scroll && (e.hotSearchList.html(e.hotSearchList.find("#scroller").html()),
        e.scroll.destroy(),
        e.scroll = void 0)) : void 0
    }
    ,
    a.prototype.showPop = function() {
        var e = this;
        o.showPop.call(e);
        var t = e.showPopBtn.find(".inputbox a");
        if (t.length > 0) {
            var s = t.text().replace(/(^\s+)|(\s+$)/g, "");
            s !== e.titCon && (e.searchInput.val(s),
            e.offBtn.show())
        }
        e.writeSearchEnterTimeLog(r.city, e.columnType),
        e.createHotSearch(),
        e.creatHistoryList()
    }
    ,
    a.prototype.search = function(e) {
        var t = this
          , s = t.searchInput.val()
          , a = t.inputFormat(s)
          , i = a.replace(/(^\s+)|(\s+$)/g, "")
          , o = window.location.href;
        if (!i) {
            if (/tjftype/.test(o))
                window.location = r.esfSite + r.city + "/?tjftype=esf";
            else if (/jhtype/.test(o))
                window.location = r.esfSite + r.city + "/?jhtype=esf";
            else if (o.indexOf("utm_source") > -1) {
                var c = new RegExp("utm_source=([^&]*)(&|$)")
                  , n = o.match(c);
                window.location = r.esfSite + r.city + "/?utm_source=" + n[1]
            } else
                window.location = r.esfSite + r.city + "/";
            return void t.writeSearchLeaveTimeLog(t.columnType)
        }
        var p = e || r.esfSite + "?c=esf&a=index";
        if (o.indexOf("cstype") > -1) {
            var c = new RegExp("cstype=([^&]*)(&|$)")
              , d = o.match(c);
            p += "&cstype=" + d[1]
        }
        if (o.indexOf("utm_source") > -1) {
            var h = new RegExp("utm_source=([^&]*)(&|$)")
              , l = o.match(h);
            p += "&utm_source=" + l[1]
        }
        if (o.indexOf("utm_term") > -1) {
            var y = new RegExp("utm_term=([^&]*)(&|$)")
              , f = o.match(y);
            p += "&utm_term=" + f[1]
        }
        if (o.indexOf("tjftype") > -1) {
            var m = new RegExp("tjftype=([^&]*)(&|$)")
              , u = o.match(m);
            p += "&tjftype=" + u[1]
        }
        if (o.indexOf("jhtype") > -1) {
            var v = new RegExp("jhtype=([^&]*)(&|$)")
              , w = o.match(v);
            p += "&jhtype=" + w[1]
        }
        r.purpose && (p += "&purpose=" + r.purpose),
        p += "&type=0&keyword=" + encodeURIComponent(i),
        t.setOtherHistory({
            key: i,
            showWord: i,
            suffix: "\u51fa\u552e"
        }, p + "&city=" + r.city),
        window.location = p + "&city=" + r.city + "&r=" + Math.random(),
        t.writeSearchLeaveTimeLog(t.columnType)
    }
    ,
    a.prototype.clickListSearch = function(e) {
        if (e) {
            var t = this;
            if (t.searchInput.val(e.key),
            e.adUrl)
                return void i.get("/data.d?m=adtj&city=" + encodeURIComponent(encodeURIComponent(r.city)) + "&url=" + document.URL, function() {
                    window.location = e.adUrl
                });
            if (e.historyUrl)
                return t.setOtherHistory(e, e.historyUrl),
                void (window.location = e.historyUrl);
            var s, a = window.location.href;
            if (a.indexOf("cstype") > -1 || a.indexOf("utm_source") > -1) {
                if (a.indexOf("cstype") !== -1) {
                    var o = new RegExp("cstype=([^&]*)(&|$)")
                      , c = a.match(o);
                    c && c[1] && (s = r.esfSite + "?cstype=" + c[1])
                }
                if (a.indexOf("utm_source") > -1) {
                    var n = new RegExp("utm_source=([^&]*)(&|$)")
                      , p = a.match(n);
                    if (p && p[1] && (a.indexOf("?") > -1 ? s = "?utm_source=" + p[1] : s += "&utm_source=" + p[1]),
                    a.indexOf("utm_term") > -1) {
                        var d = new RegExp("utm_term=([^&]*)(&|$)")
                          , h = a.match(d);
                        h && h[1] && (s += "&utm_term=" + h[1])
                    }
                }
                s += "&keyword="
            } else
                s = r.channelsConfig && "schoolhouse" === r.channelsConfig.currentChannel ? r.schoolhouseSite + "?keyword=" : r.esfSite + "?keyword=";
            s += encodeURIComponent(e.key),
            e.purpose && (s += "&purpose=" + encodeURIComponent(e.purpose)),
            e.tags && (s += "&tags=" + encodeURIComponent(e.tags)),
            e.enterprise && (s += "&enterprise=" + encodeURIComponent(e.enterprise)),
            e.room && (s += "&room=" + encodeURIComponent(e.room)),
            e.comarea && (s += "&comarea=" + encodeURIComponent(e.comarea)),
            e.district && (s += "&district=" + encodeURIComponent(e.district)),
            e.subwayId && (s += "&subway_id=" + encodeURIComponent(e.subwayId)),
            e.stationId && (s += "&station_id=" + encodeURIComponent(e.stationId)),
            e.tjftype && (s += "&tjftype=" + encodeURIComponent(e.tjftype)),
            e.jhtype && (s += "&jhtype=" + encodeURIComponent(e.jhtype)),
            t.setOtherHistory(e, s + "&city=" + r.city),
            window.location = s + "&city=" + r.city + "&r=" + Math.random(),
            t.writeSearchLeaveTimeLog(t.columnType)
        }
    }
    ,
    s.exports = a
});
!function(e, a) {
    "function" == typeof define ? define("swipe/3.10/swiper", [], function() {
        return a(e)
    }) : "object" == typeof exports ? module.exports = a(e) : e.Swiper = a(e)
}(this, function(e) {
    function a(e) {
        e.fn.swiper = function(a) {
            var t;
            return e(this).each(function() {
                var e = new s(this,a);
                t || (t = e)
            }),
            t
        }
    }
    var t, s = function(a, i) {
        function n() {
            return "horizontal" === y.params.direction
        }
        function o(e) {
            return Math.floor(e)
        }
        function l() {
            y.autoplayTimeoutId = setTimeout(function() {
                y.params.loop ? (y.fixLoop(),
                y._slideNext()) : y.isEnd ? i.autoplayStopOnLast ? y.stopAutoplay() : y._slideTo(0) : y._slideNext()
            }, y.params.autoplay)
        }
        function p(e, a) {
            var s = t(e.target);
            if (!s.is(a))
                if ("string" == typeof a)
                    s = s.parents(a);
                else if (a.nodeType) {
                    var r;
                    return s.parents().each(function(e, t) {
                        t === a && (r = a)
                    }),
                    r ? a : void 0
                }
            return 0 === s.length ? void 0 : s[0]
        }
        function d(a, t) {
            t = t || {};
            var s = e.MutationObserver || e.WebkitMutationObserver
              , r = new s(function(e) {
                e.forEach(function(e) {
                    y.onResize(!0),
                    y.emit("onObserverUpdate", y, e)
                })
            }
            );
            r.observe(a, {
                attributes: "undefined" == typeof t.attributes ? !0 : t.attributes,
                childList: "undefined" == typeof t.childList ? !0 : t.childList,
                characterData: "undefined" == typeof t.characterData ? !0 : t.characterData
            }),
            y.observers.push(r)
        }
        function u(a) {
            a.originalEvent && (a = a.originalEvent);
            var t = a.keyCode || a.charCode;
            if (!y.params.allowSwipeToNext && (n() && 39 === t || !n() && 40 === t))
                return !1;
            if (!y.params.allowSwipeToPrev && (n() && 37 === t || !n() && 38 === t))
                return !1;
            if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || document.activeElement && document.activeElement.nodeName && ("input" === document.activeElement.nodeName.toLowerCase() || "textarea" === document.activeElement.nodeName.toLowerCase()))) {
                if (37 === t || 39 === t || 38 === t || 40 === t) {
                    var s = !1;
                    if (y.container.parents(".swiper-slide").length > 0 && 0 === y.container.parents(".swiper-slide-active").length)
                        return;
                    var r = {
                        left: e.pageXOffset,
                        top: e.pageYOffset
                    }
                      , i = e.innerWidth
                      , o = e.innerHeight
                      , l = y.container.offset();
                    y.rtl && (l.left = l.left - y.container[0].scrollLeft);
                    for (var p = [[l.left, l.top], [l.left + y.width, l.top], [l.left, l.top + y.height], [l.left + y.width, l.top + y.height]], d = 0; d < p.length; d++) {
                        var u = p[d];
                        u[0] >= r.left && u[0] <= r.left + i && u[1] >= r.top && u[1] <= r.top + o && (s = !0)
                    }
                    if (!s)
                        return
                }
                n() ? ((37 === t || 39 === t) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1),
                (39 === t && !y.rtl || 37 === t && y.rtl) && y.slideNext(),
                (37 === t && !y.rtl || 39 === t && y.rtl) && y.slidePrev()) : ((38 === t || 40 === t) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1),
                40 === t && y.slideNext(),
                38 === t && y.slidePrev())
            }
        }
        function c(a) {
            a.originalEvent && (a = a.originalEvent);
            var t = y.mousewheel.event
              , s = 0;
            if (a.detail)
                s = -a.detail;
            else if ("mousewheel" === t)
                if (y.params.mousewheelForceToAxis)
                    if (n()) {
                        if (!(Math.abs(a.wheelDeltaX) > Math.abs(a.wheelDeltaY)))
                            return;
                        s = a.wheelDeltaX
                    } else {
                        if (!(Math.abs(a.wheelDeltaY) > Math.abs(a.wheelDeltaX)))
                            return;
                        s = a.wheelDeltaY
                    }
                else
                    s = a.wheelDelta;
            else if ("DOMMouseScroll" === t)
                s = -a.detail;
            else if ("wheel" === t)
                if (y.params.mousewheelForceToAxis)
                    if (n()) {
                        if (!(Math.abs(a.deltaX) > Math.abs(a.deltaY)))
                            return;
                        s = -a.deltaX
                    } else {
                        if (!(Math.abs(a.deltaY) > Math.abs(a.deltaX)))
                            return;
                        s = -a.deltaY
                    }
                else
                    s = Math.abs(a.deltaX) > Math.abs(a.deltaY) ? -a.deltaX : -a.deltaY;
            if (y.params.mousewheelInvert && (s = -s),
            y.params.freeMode) {
                var r = y.getWrapperTranslate() + s * y.params.mousewheelSensitivity;
                if (r > 0 && (r = 0),
                r < y.maxTranslate() && (r = y.maxTranslate()),
                y.setWrapperTransition(0),
                y.setWrapperTranslate(r),
                y.updateProgress(),
                y.updateActiveIndex(),
                y.params.freeModeSticky && (clearTimeout(y.mousewheel.timeout),
                y.mousewheel.timeout = setTimeout(function() {
                    y.slideReset()
                }, 300)),
                0 === r || r === y.maxTranslate())
                    return
            } else {
                if ((new e.Date).getTime() - y.mousewheel.lastScrollTime > 60)
                    if (0 > s)
                        if (y.isEnd && !y.params.loop || y.animating) {
                            if (y.params.mousewheelReleaseOnEdges)
                                return !0
                        } else
                            y.slideNext();
                    else if (y.isBeginning && !y.params.loop || y.animating) {
                        if (y.params.mousewheelReleaseOnEdges)
                            return !0
                    } else
                        y.slidePrev();
                y.mousewheel.lastScrollTime = (new e.Date).getTime()
            }
            return y.params.autoplay && y.stopAutoplay(),
            a.preventDefault ? a.preventDefault() : a.returnValue = !1,
            !1
        }
        function m(e, a) {
            e = t(e);
            var s, r, i;
            s = e.attr("data-swiper-parallax") || "0",
            r = e.attr("data-swiper-parallax-x"),
            i = e.attr("data-swiper-parallax-y"),
            r || i ? (r = r || "0",
            i = i || "0") : n() ? (r = s,
            i = "0") : (i = s,
            r = "0"),
            r = r.indexOf("%") >= 0 ? parseInt(r, 10) * a + "%" : r * a + "px",
            i = i.indexOf("%") >= 0 ? parseInt(i, 10) * a + "%" : i * a + "px",
            e.transform("translate3d(" + r + ", " + i + ",0px)")
        }
        function f(e) {
            return 0 !== e.indexOf("on") && (e = e[0] !== e[0].toUpperCase() ? "on" + e[0].toUpperCase() + e.substring(1) : "on" + e),
            e
        }
        
        if (!(this instanceof s))
            return new s(a,i);
        var h = {
            direction: "horizontal",
            touchEventsTarget: "container",
            initialSlide: 0,
            speed: 300,
            autoplay: !1,
            autoplayDisableOnInteraction: !0,
            iOSEdgeSwipeDetection: !1,
            iOSEdgeSwipeThreshold: 20,
            freeMode: !1,
            freeModeMomentum: !0,
            freeModeMomentumRatio: 1,
            freeModeMomentumBounce: !0,
            freeModeMomentumBounceRatio: 1,
            freeModeSticky: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: "slide",
            coverflow: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: !0
            },
            cube: {
                slideShadows: !0,
                shadow: !0,
                shadowOffset: 20,
                shadowScale: .94
            },
            fade: {
                crossFade: !1
            },
            parallax: !1,
            scrollbar: null,
            scrollbarHide: !0,
            keyboardControl: !1,
            mousewheelControl: !1,
            mousewheelReleaseOnEdges: !1,
            mousewheelInvert: !1,
            mousewheelForceToAxis: !1,
            mousewheelSensitivity: 1,
            hashnav: !1,
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerColumnFill: "column",
            slidesPerGroup: 1,
            centeredSlides: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: !0,
            onlyExternal: !1,
            threshold: 0,
            touchMoveStopPropagation: !0,
            pagination: null,
            paginationElement: "span",
            paginationClickable: !1,
            paginationHide: !1,
            paginationBulletRender: null,
            resistance: !0,
            resistanceRatio: .85,
            nextButton: null,
            prevButton: null,
            watchSlidesProgress: !1,
            watchSlidesVisibility: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            lazyLoading: !1,
            lazyLoadingInPrevNext: !1,
            lazyLoadingOnTransitionStart: !1,
            preloadImages: !0,
            updateOnImagesReady: !0,
            loop: !1,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            control: void 0,
            controlInverse: !1,
            controlBy: "slide",
            allowSwipeToPrev: !0,
            allowSwipeToNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            slideClass: "swiper-slide",
            slideActiveClass: "swiper-slide-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slidePrevClass: "swiper-slide-prev",
            wrapperClass: "swiper-wrapper",
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
            buttonDisabledClass: "swiper-button-disabled",
            paginationHiddenClass: "swiper-pagination-hidden",
            observer: !1,
            observeParents: !1,
            a11y: !1,
            prevSlideMessage: "Previous slide",
            nextSlideMessage: "Next slide",
            firstSlideMessage: "This is the first slide",
            lastSlideMessage: "This is the last slide",
            paginationBulletMessage: "Go to slide {{index}}",
            runCallbacksOnInit: !0
        }
          , g = i && i.virtualTranslate;
        i = i || {};
        for (var v in h)
            if ("undefined" == typeof i[v])
                i[v] = h[v];
            else if ("object" == typeof i[v])
                for (var w in h[v])
                    "undefined" == typeof i[v][w] && (i[v][w] = h[v][w]);
        var y = this;
        if (y.version = "3.1.0",
        y.params = i,
        y.classNames = [],
        "undefined" != typeof t && "undefined" != typeof r && (t = r),
        ("undefined" != typeof t || (t = "undefined" == typeof r ? e.Dom7 || e.Zepto || e.jQuery : r)) && (y.$ = t,
        y.container = t(a),
        0 !== y.container.length)) {
            if (y.container.length > 1)
                return void y.container.each(function() {
                    new s(this,i)
                });
            y.container[0].swiper = y,
            y.container.data("swiper", y),
            y.classNames.push("swiper-container-" + y.params.direction),
            y.params.freeMode && y.classNames.push("swiper-container-free-mode"),
            y.support.flexbox || (y.classNames.push("swiper-container-no-flexbox"),
            y.params.slidesPerColumn = 1),
            (y.params.parallax || y.params.watchSlidesVisibility) && (y.params.watchSlidesProgress = !0),
            ["cube", "coverflow"].indexOf(y.params.effect) >= 0 && (y.support.transforms3d ? (y.params.watchSlidesProgress = !0,
            y.classNames.push("swiper-container-3d")) : y.params.effect = "slide"),
            "slide" !== y.params.effect && y.classNames.push("swiper-container-" + y.params.effect),
            "cube" === y.params.effect && (y.params.resistanceRatio = 0,
            y.params.slidesPerView = 1,
            y.params.slidesPerColumn = 1,
            y.params.slidesPerGroup = 1,
            y.params.centeredSlides = !1,
            y.params.spaceBetween = 0,
            y.params.virtualTranslate = !0,
            y.params.setWrapperSize = !1),
            "fade" === y.params.effect && (y.params.slidesPerView = 1,
            y.params.slidesPerColumn = 1,
            y.params.slidesPerGroup = 1,
            y.params.watchSlidesProgress = !0,
            y.params.spaceBetween = 0,
            "undefined" == typeof g && (y.params.virtualTranslate = !0)),
            y.params.grabCursor && y.support.touch && (y.params.grabCursor = !1),
            y.wrapper = y.container.children("." + y.params.wrapperClass),
            y.params.pagination && (y.paginationContainer = t(y.params.pagination),
            y.params.paginationClickable && y.paginationContainer.addClass("swiper-pagination-clickable")),
            y.rtl = n() && ("rtl" === y.container[0].dir.toLowerCase() || "rtl" === y.container.css("direction")),
            y.rtl && y.classNames.push("swiper-container-rtl"),
            y.rtl && (y.wrongRTL = "-webkit-box" === y.wrapper.css("display")),
            y.params.slidesPerColumn > 1 && y.classNames.push("swiper-container-multirow"),
            y.device.android && y.classNames.push("swiper-container-android"),
            y.container.addClass(y.classNames.join(" ")),
            y.translate = 0,
            y.progress = 0,
            y.velocity = 0,
            y.lockSwipeToNext = function() {
                y.params.allowSwipeToNext = !1
            }
            ,
            y.lockSwipeToPrev = function() {
                y.params.allowSwipeToPrev = !1
            }
            ,
            y.lockSwipes = function() {
                y.params.allowSwipeToNext = y.params.allowSwipeToPrev = !1
            }
            ,
            y.unlockSwipeToNext = function() {
                y.params.allowSwipeToNext = !0
            }
            ,
            y.unlockSwipeToPrev = function() {
                y.params.allowSwipeToPrev = !0
            }
            ,
            y.unlockSwipes = function() {
                y.params.allowSwipeToNext = y.params.allowSwipeToPrev = !0
            }
            ,
            y.params.grabCursor && (y.container[0].style.cursor = "move",
            y.container[0].style.cursor = "-webkit-grab",
            y.container[0].style.cursor = "-moz-grab",
            y.container[0].style.cursor = "grab"),
            y.imagesToLoad = [],
            y.imagesLoaded = 0,
            y.loadImage = function(a, t, s, r) {
                function i() {
                    r && r()
                }
                var n;
                a.complete && s ? i() : t ? (n = new e.Image,
                n.onload = i,
                n.onerror = i,
                n.src = t) : i()
            }
            ,
            y.preloadImages = function() {
                function e() {
                    "undefined" != typeof y && null !== y && (void 0 !== y.imagesLoaded && y.imagesLoaded++,
                    y.imagesLoaded === y.imagesToLoad.length && (y.params.updateOnImagesReady && y.update(),
                    y.emit("onImagesReady", y)))
                }
                y.imagesToLoad = y.container.find("img");
                for (var a = 0; a < y.imagesToLoad.length; a++)
                    y.loadImage(y.imagesToLoad[a], y.imagesToLoad[a].currentSrc || y.imagesToLoad[a].getAttribute("src"), !0, e)
            }
            ,
            y.autoplayTimeoutId = void 0,
            y.autoplaying = !1,
            y.autoplayPaused = !1,
            y.startAutoplay = function() {
                return "undefined" != typeof y.autoplayTimeoutId ? !1 : y.params.autoplay ? y.autoplaying ? !1 : (y.autoplaying = !0,
                y.emit("onAutoplayStart", y),
                void l()) : !1
            }
            ,
            y.stopAutoplay = function(e) {
                y.autoplayTimeoutId && (y.autoplayTimeoutId && clearTimeout(y.autoplayTimeoutId),
                y.autoplaying = !1,
                y.autoplayTimeoutId = void 0,
                y.emit("onAutoplayStop", y))
            }
            ,
            y.pauseAutoplay = function(e) {
                y.autoplayPaused || (y.autoplayTimeoutId && clearTimeout(y.autoplayTimeoutId),
                y.autoplayPaused = !0,
                0 === e ? (y.autoplayPaused = !1,
                l()) : y.wrapper.transitionEnd(function() {
                    y && (y.autoplayPaused = !1,
                    y.autoplaying ? l() : y.stopAutoplay())
                }))
            }
            ,
            y.minTranslate = function() {
                return -y.snapGrid[0]
            }
            ,
            y.maxTranslate = function() {
                return -y.snapGrid[y.snapGrid.length - 1]
            }
            ,
            y.updateContainerSize = function() {
                var e, a;
                e = "undefined" != typeof y.params.width ? y.params.width : y.container[0].clientWidth,
                a = "undefined" != typeof y.params.height ? y.params.height : y.container[0].clientHeight,
                0 === e && n() || 0 === a && !n() || (e = e - parseInt(y.container.css("padding-left"), 10) - parseInt(y.container.css("padding-right"), 10),
                a = a - parseInt(y.container.css("padding-top"), 10) - parseInt(y.container.css("padding-bottom"), 10),
                y.width = e,
                y.height = a,
                y.size = n() ? y.width : y.height)
            }
            ,
            y.updateSlidesSize = function() {
                y.slides = y.wrapper.children("." + y.params.slideClass),
                y.snapGrid = [],
                y.slidesGrid = [],
                y.slidesSizesGrid = [];
                var e, a = y.params.spaceBetween, t = -y.params.slidesOffsetBefore, s = 0, r = 0;
                "string" == typeof a && a.indexOf("%") >= 0 && (a = parseFloat(a.replace("%", "")) / 100 * y.size),
                y.virtualSize = -a,
                y.slides.css(y.rtl ? {
                    marginLeft: "",
                    marginTop: ""
                } : {
                    marginRight: "",
                    marginBottom: ""
                });
                var i;
                y.params.slidesPerColumn > 1 && (i = Math.floor(y.slides.length / y.params.slidesPerColumn) === y.slides.length / y.params.slidesPerColumn ? y.slides.length : Math.ceil(y.slides.length / y.params.slidesPerColumn) * y.params.slidesPerColumn);
                var l, p = y.params.slidesPerColumn, d = i / p, u = d - (y.params.slidesPerColumn * d - y.slides.length);
                for (e = 0; e < y.slides.length; e++) {
                    l = 0;
                    var c = y.slides.eq(e);
                    if (y.params.slidesPerColumn > 1) {
                        var m, f, h;
                        "column" === y.params.slidesPerColumnFill ? (f = Math.floor(e / p),
                        h = e - f * p,
                        (f > u || f === u && h === p - 1) && ++h >= p && (h = 0,
                        f++),
                        m = f + h * i / p,
                        c.css({
                            "-webkit-box-ordinal-group": m,
                            "-moz-box-ordinal-group": m,
                            "-ms-flex-order": m,
                            "-webkit-order": m,
                            order: m
                        })) : (h = Math.floor(e / d),
                        f = e - h * d),
                        c.css({
                            "margin-top": 0 !== h && y.params.spaceBetween && y.params.spaceBetween + "px"
                        }).attr("data-swiper-column", f).attr("data-swiper-row", h)
                    }
                    "none" !== c.css("display") && ("auto" === y.params.slidesPerView ? (l = n() ? c.outerWidth(!0) : c.outerHeight(!0),
                    y.params.roundLengths && (l = o(l))) : (l = (y.size - (y.params.slidesPerView - 1) * a) / y.params.slidesPerView,
                    y.params.roundLengths && (l = o(l)),
                    n() ? y.slides[e].style.width = l + "px" : y.slides[e].style.height = l + "px"),
                    y.slides[e].swiperSlideSize = l,
                    y.slidesSizesGrid.push(l),
                    y.params.centeredSlides ? (t = t + l / 2 + s / 2 + a,
                    0 === e && (t = t - y.size / 2 - a),
                    Math.abs(t) < .001 && (t = 0),
                    r % y.params.slidesPerGroup === 0 && y.snapGrid.push(t),
                    y.slidesGrid.push(t)) : (r % y.params.slidesPerGroup === 0 && y.snapGrid.push(t),
                    y.slidesGrid.push(t),
                    t = t + l + a),
                    y.virtualSize += l + a,
                    s = l,
                    r++)
                }
                y.virtualSize = Math.max(y.virtualSize, y.size) + y.params.slidesOffsetAfter;
                var g;
                if (y.rtl && y.wrongRTL && ("slide" === y.params.effect || "coverflow" === y.params.effect) && y.wrapper.css({
                    width: y.virtualSize + y.params.spaceBetween + "px"
                }),
                (!y.support.flexbox || y.params.setWrapperSize) && y.wrapper.css(n() ? {
                    width: y.virtualSize + y.params.spaceBetween + "px"
                } : {
                    height: y.virtualSize + y.params.spaceBetween + "px"
                }),
                y.params.slidesPerColumn > 1 && (y.virtualSize = (l + y.params.spaceBetween) * i,
                y.virtualSize = Math.ceil(y.virtualSize / y.params.slidesPerColumn) - y.params.spaceBetween,
                y.wrapper.css({
                    width: y.virtualSize + y.params.spaceBetween + "px"
                }),
                y.params.centeredSlides)) {
                    for (g = [],
                    e = 0; e < y.snapGrid.length; e++)
                        y.snapGrid[e] < y.virtualSize + y.snapGrid[0] && g.push(y.snapGrid[e]);
                    y.snapGrid = g
                }
                if (!y.params.centeredSlides) {
                    for (g = [],
                    e = 0; e < y.snapGrid.length; e++)
                        y.snapGrid[e] <= y.virtualSize - y.size && g.push(y.snapGrid[e]);
                    y.snapGrid = g,
                    Math.floor(y.virtualSize - y.size) > Math.floor(y.snapGrid[y.snapGrid.length - 1]) && y.snapGrid.push(y.virtualSize - y.size)
                }
                0 === y.snapGrid.length && (y.snapGrid = [0]),
                0 !== y.params.spaceBetween && y.slides.css(n() ? y.rtl ? {
                    marginLeft: a + "px"
                } : {
                    marginRight: a + "px"
                } : {
                    marginBottom: a + "px"
                }),
                y.params.watchSlidesProgress && y.updateSlidesOffset()
            }
            ,
            y.updateSlidesOffset = function() {
                for (var e = 0; e < y.slides.length; e++)
                    y.slides[e].swiperSlideOffset = n() ? y.slides[e].offsetLeft : y.slides[e].offsetTop
            }
            ,
            y.updateSlidesProgress = function(e) {
                if ("undefined" == typeof e && (e = y.translate || 0),
                0 !== y.slides.length) {
                    "undefined" == typeof y.slides[0].swiperSlideOffset && y.updateSlidesOffset();
                    var a = -e;
                    y.rtl && (a = e),
                    y.container[0].getBoundingClientRect(),
                    n() ? "left" : "top",
                    n() ? "right" : "bottom",
                    y.slides.removeClass(y.params.slideVisibleClass);
                    for (var t = 0; t < y.slides.length; t++) {
                        var s = y.slides[t]
                          , r = (a - s.swiperSlideOffset) / (s.swiperSlideSize + y.params.spaceBetween);
                        if (y.params.watchSlidesVisibility) {
                            var i = -(a - s.swiperSlideOffset)
                              , o = i + y.slidesSizesGrid[t]
                              , l = i >= 0 && i < y.size || o > 0 && o <= y.size || 0 >= i && o >= y.size;
                            l && y.slides.eq(t).addClass(y.params.slideVisibleClass)
                        }
                        s.progress = y.rtl ? -r : r
                    }
                }
            }
            ,
            y.updateProgress = function(e) {
                "undefined" == typeof e && (e = y.translate || 0);
                var a = y.maxTranslate() - y.minTranslate();
                0 === a ? (y.progress = 0,
                y.isBeginning = y.isEnd = !0) : (y.progress = (e - y.minTranslate()) / a,
                y.isBeginning = y.progress <= 0,
                y.isEnd = y.progress >= 1),
                y.isBeginning && y.emit("onReachBeginning", y),
                y.isEnd && y.emit("onReachEnd", y),
                y.params.watchSlidesProgress && y.updateSlidesProgress(e),
                y.emit("onProgress", y, y.progress)
            }
            ,
            y.updateActiveIndex = function() {
                var e, a, t, s = y.rtl ? y.translate : -y.translate;
                for (a = 0; a < y.slidesGrid.length; a++)
                    "undefined" != typeof y.slidesGrid[a + 1] ? s >= y.slidesGrid[a] && s < y.slidesGrid[a + 1] - (y.slidesGrid[a + 1] - y.slidesGrid[a]) / 2 ? e = a : s >= y.slidesGrid[a] && s < y.slidesGrid[a + 1] && (e = a + 1) : s >= y.slidesGrid[a] && (e = a);
                (0 > e || "undefined" == typeof e) && (e = 0),
                t = Math.floor(e / y.params.slidesPerGroup),
                t >= y.snapGrid.length && (t = y.snapGrid.length - 1),
                e !== y.activeIndex && (y.snapIndex = t,
                y.previousIndex = y.activeIndex,
                y.activeIndex = e,
                y.updateClasses())
            }
            ,
            y.updateClasses = function() {
                y.slides.removeClass(y.params.slideActiveClass + " " + y.params.slideNextClass + " " + y.params.slidePrevClass);
                var e = y.slides.eq(y.activeIndex);
                if (e.addClass(y.params.slideActiveClass),
                e.next("." + y.params.slideClass).addClass(y.params.slideNextClass),
                e.prev("." + y.params.slideClass).addClass(y.params.slidePrevClass),
                y.bullets && y.bullets.length > 0) {
                    y.bullets.removeClass(y.params.bulletActiveClass);
                    var a;
                    y.params.loop ? (a = Math.ceil(y.activeIndex - y.loopedSlides) / y.params.slidesPerGroup,
                    a > y.slides.length - 1 - 2 * y.loopedSlides && (a -= y.slides.length - 2 * y.loopedSlides),
                    a > y.bullets.length - 1 && (a -= y.bullets.length)) : a = "undefined" != typeof y.snapIndex ? y.snapIndex : y.activeIndex || 0,
                    y.paginationContainer.length > 1 ? y.bullets.each(function() {
                        t(this).index() === a && t(this).addClass(y.params.bulletActiveClass)
                    }) : y.bullets.eq(a).addClass(y.params.bulletActiveClass)
                }
                y.params.loop || (y.params.prevButton && (y.isBeginning ? (t(y.params.prevButton).addClass(y.params.buttonDisabledClass),
                y.params.a11y && y.a11y && y.a11y.disable(t(y.params.prevButton))) : (t(y.params.prevButton).removeClass(y.params.buttonDisabledClass),
                y.params.a11y && y.a11y && y.a11y.enable(t(y.params.prevButton)))),
                y.params.nextButton && (y.isEnd ? (t(y.params.nextButton).addClass(y.params.buttonDisabledClass),
                y.params.a11y && y.a11y && y.a11y.disable(t(y.params.nextButton))) : (t(y.params.nextButton).removeClass(y.params.buttonDisabledClass),
                y.params.a11y && y.a11y && y.a11y.enable(t(y.params.nextButton)))))
            }
            ,
            y.updatePagination = function() {
                if (y.params.pagination && y.paginationContainer && y.paginationContainer.length > 0) {
                    for (var e = "", a = y.params.loop ? Math.ceil((y.slides.length - 2 * y.loopedSlides) / y.params.slidesPerGroup) : y.snapGrid.length, t = 0; a > t; t++)
                        e += y.params.paginationBulletRender ? y.params.paginationBulletRender(t, y.params.bulletClass) : "<" + y.params.paginationElement + ' class="' + y.params.bulletClass + '"></' + y.params.paginationElement + ">";
                    y.paginationContainer.html(e),
                    y.bullets = y.paginationContainer.find("." + y.params.bulletClass),
                    y.params.paginationClickable && y.params.a11y && y.a11y && y.a11y.initPagination()
                }
            }
            ,
            y.update = function(e) {
                function a() {
                    s = Math.min(Math.max(y.translate, y.maxTranslate()), y.minTranslate()),
                    y.setWrapperTranslate(s),
                    y.updateActiveIndex(),
                    y.updateClasses()
                }
                if (y.updateContainerSize(),
                y.updateSlidesSize(),
                y.updateProgress(),
                y.updatePagination(),
                y.updateClasses(),
                y.params.scrollbar && y.scrollbar && y.scrollbar.set(),
                e) {
                    var t, s;
                    y.controller && y.controller.spline && (y.controller.spline = void 0),
                    y.params.freeMode ? a() : (t = ("auto" === y.params.slidesPerView || y.params.slidesPerView > 1) && y.isEnd && !y.params.centeredSlides ? y.slideTo(y.slides.length - 1, 0, !1, !0) : y.slideTo(y.activeIndex, 0, !1, !0),
                    t || a())
                }
            }
            ,
            y.onResize = function(e) {
                var a = y.params.allowSwipeToPrev
                  , t = y.params.allowSwipeToNext;
                if (y.params.allowSwipeToPrev = y.params.allowSwipeToNext = !0,
                y.updateContainerSize(),
                y.updateSlidesSize(),
                ("auto" === y.params.slidesPerView || y.params.freeMode || e) && y.updatePagination(),
                y.params.scrollbar && y.scrollbar && y.scrollbar.set(),
                y.controller && y.controller.spline && (y.controller.spline = void 0),
                y.params.freeMode) {
                    var s = Math.min(Math.max(y.translate, y.maxTranslate()), y.minTranslate());
                    y.setWrapperTranslate(s),
                    y.updateActiveIndex(),
                    y.updateClasses()
                } else
                    y.updateClasses(),
                    ("auto" === y.params.slidesPerView || y.params.slidesPerView > 1) && y.isEnd && !y.params.centeredSlides ? y.slideTo(y.slides.length - 1, 0, !1, !0) : y.slideTo(y.activeIndex, 0, !1, !0);
                y.params.allowSwipeToPrev = a,
                y.params.allowSwipeToNext = t
            }
            ;
            var b = ["mousedown", "mousemove", "mouseup"];
            e.navigator.pointerEnabled ? b = ["pointerdown", "pointermove", "pointerup"] : e.navigator.msPointerEnabled && (b = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]),
            y.touchEvents = {
                start: y.support.touch || !y.params.simulateTouch ? "touchstart" : b[0],
                move: y.support.touch || !y.params.simulateTouch ? "touchmove" : b[1],
                end: y.support.touch || !y.params.simulateTouch ? "touchend" : b[2]
            },
            (e.navigator.pointerEnabled || e.navigator.msPointerEnabled) && ("container" === y.params.touchEventsTarget ? y.container : y.wrapper).addClass("swiper-wp8-" + y.params.direction),
            y.initEvents = function(a) {
                var s = a ? "off" : "on"
                  , r = a ? "removeEventListener" : "addEventListener"
                  , n = "container" === y.params.touchEventsTarget ? y.container[0] : y.wrapper[0]
                  , o = y.support.touch ? n : document
                  , l = y.params.nested ? !0 : !1;
                y.browser.ie ? (n[r](y.touchEvents.start, y.onTouchStart, !1),
                o[r](y.touchEvents.move, y.onTouchMove, l),
                o[r](y.touchEvents.end, y.onTouchEnd, !1)) : (y.support.touch && (n[r](y.touchEvents.start, y.onTouchStart, !1),
                n[r](y.touchEvents.move, y.onTouchMove, l),
                n[r](y.touchEvents.end, y.onTouchEnd, !1)),
                !i.simulateTouch || y.device.ios || y.device.android || (n[r]("mousedown", y.onTouchStart, !1),
                document[r]("mousemove", y.onTouchMove, l),
                document[r]("mouseup", y.onTouchEnd, !1))),
                e[r]("resize", y.onResize),
                y.params.nextButton && (t(y.params.nextButton)[s]("click", y.onClickNext),
                y.params.a11y && y.a11y && t(y.params.nextButton)[s]("keydown", y.a11y.onEnterKey)),
                y.params.prevButton && (t(y.params.prevButton)[s]("click", y.onClickPrev),
                y.params.a11y && y.a11y && t(y.params.prevButton)[s]("keydown", y.a11y.onEnterKey)),
                y.params.pagination && y.params.paginationClickable && (t(y.paginationContainer)[s]("click", "." + y.params.bulletClass, y.onClickIndex),
                y.params.a11y && y.a11y && t(y.paginationContainer)[s]("keydown", "." + y.params.bulletClass, y.a11y.onEnterKey)),
                (y.params.preventClicks || y.params.preventClicksPropagation) && n[r]("click", y.preventClicks, !0)
            }
            ,
            y.attachEvents = function(e) {
                y.initEvents()
            }
            ,
            y.detachEvents = function() {
                y.initEvents(!0)
            }
            ,
            y.allowClick = !0,
            y.preventClicks = function(e) {
                y.allowClick || (y.params.preventClicks && e.preventDefault(),
                y.params.preventClicksPropagation && y.animating && (e.stopPropagation(),
                e.stopImmediatePropagation()))
            }
            ,
            y.onClickNext = function(e) {
                e.preventDefault(),
                (!y.isEnd || y.params.loop) && y.slideNext()
            }
            ,
            y.onClickPrev = function(e) {
                e.preventDefault(),
                (!y.isBeginning || y.params.loop) && y.slidePrev()
            }
            ,
            y.onClickIndex = function(e) {
                e.preventDefault();
                var a = t(this).index() * y.params.slidesPerGroup;
                y.params.loop && (a += y.loopedSlides),
                y.slideTo(a)
            }
            ,
            y.updateClickedSlide = function(e) {
                var a = p(e, "." + y.params.slideClass)
                  , s = !1;
                if (a)
                    for (var r = 0; r < y.slides.length; r++)
                        y.slides[r] === a && (s = !0);
                if (!a || !s)
                    return y.clickedSlide = void 0,
                    void (y.clickedIndex = void 0);
                if (y.clickedSlide = a,
                y.clickedIndex = t(a).index(),
                y.params.slideToClickedSlide && void 0 !== y.clickedIndex && y.clickedIndex !== y.activeIndex) {
                    var i, n = y.clickedIndex;
                    if (y.params.loop)
                        if (i = t(y.clickedSlide).attr("data-swiper-slide-index"),
                        n > y.slides.length - y.params.slidesPerView)
                            y.fixLoop(),
                            n = y.wrapper.children("." + y.params.slideClass + '[data-swiper-slide-index="' + i + '"]').eq(0).index(),
                            setTimeout(function() {
                                y.slideTo(n)
                            }, 0);
                        else if (n < y.params.slidesPerView - 1) {
                            y.fixLoop();
                            var o = y.wrapper.children("." + y.params.slideClass + '[data-swiper-slide-index="' + i + '"]');
                            n = o.eq(o.length - 1).index(),
                            setTimeout(function() {
                                y.slideTo(n)
                            }, 0)
                        } else
                            y.slideTo(n);
                    else
                        y.slideTo(n)
                }
            }
            ;
            var x, T, S, C, M, E, P, z, I, k = "input, select, textarea, button", L = Date.now(), D = [];
            y.animating = !1,
            y.touches = {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0
            };
            var B, G;
            if (y.onTouchStart = function(e) {
                if (e.originalEvent && (e = e.originalEvent),
                B = "touchstart" === e.type,
                B || !("which"in e) || 3 !== e.which) {
                    if (y.params.noSwiping && p(e, "." + y.params.noSwipingClass))
                        return void (y.allowClick = !0);
                    if (!y.params.swipeHandler || p(e, y.params.swipeHandler)) {
                        var a = y.touches.currentX = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX
                          , s = y.touches.currentY = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY;
                        if (!(y.device.ios && y.params.iOSEdgeSwipeDetection && a <= y.params.iOSEdgeSwipeThreshold)) {
                            if (x = !0,
                            T = !1,
                            C = void 0,
                            G = void 0,
                            y.touches.startX = a,
                            y.touches.startY = s,
                            S = Date.now(),
                            y.allowClick = !0,
                            y.updateContainerSize(),
                            y.swipeDirection = void 0,
                            y.params.threshold > 0 && (P = !1),
                            "touchstart" !== e.type) {
                                var r = !0;
                                t(e.target).is(k) && (r = !1),
                                document.activeElement && t(document.activeElement).is(k) && document.activeElement.blur(),
                                r && e.preventDefault()
                            }
                            y.emit("onTouchStart", y, e)
                        }
                    }
                }
            }
            ,
            y.onTouchMove = function(a) {
                if (a.originalEvent && (a = a.originalEvent),
                !(B && "mousemove" === a.type || a.preventedByNestedSwiper)) {
                    if (y.params.onlyExternal)
                        return y.allowClick = !1,
                        void (x && (y.touches.startX = y.touches.currentX = "touchmove" === a.type ? a.targetTouches[0].pageX : a.pageX,
                        y.touches.startY = y.touches.currentY = "touchmove" === a.type ? a.targetTouches[0].pageY : a.pageY,
                        S = Date.now()));
                    if (B && document.activeElement && a.target === document.activeElement && t(a.target).is(k))
                        return T = !0,
                        void (y.allowClick = !1);
                    if (y.emit("onTouchMove", y, a),
                    !(a.targetTouches && a.targetTouches.length > 1)) {
                        if (y.touches.currentX = "touchmove" === a.type ? a.targetTouches[0].pageX : a.pageX,
                        y.touches.currentY = "touchmove" === a.type ? a.targetTouches[0].pageY : a.pageY,
                        "undefined" == typeof C) {
                            var s = 180 * Math.atan2(Math.abs(y.touches.currentY - y.touches.startY), Math.abs(y.touches.currentX - y.touches.startX)) / Math.PI;
                            C = n() ? s > y.params.touchAngle : 90 - s > y.params.touchAngle
                        }
                        if (C && y.emit("onTouchMoveOpposite", y, a),
                        "undefined" == typeof G && y.browser.ieTouch && (y.touches.currentX !== y.touches.startX || y.touches.currentY !== y.touches.startY) && (G = !0),
                        x) {
                            if (C)
                                return void (x = !1);
                            if (G || !y.browser.ieTouch) {
                                y.allowClick = !1,
                                y.emit("onSliderMove", y, a),
                                a.preventDefault(),
                                y.params.touchMoveStopPropagation && !y.params.nested && a.stopPropagation(),
                                T || (i.loop && y.fixLoop(),
                                E = y.getWrapperTranslate(),
                                y.setWrapperTransition(0),
                                y.animating && y.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"),
                                y.params.autoplay && y.autoplaying && (y.params.autoplayDisableOnInteraction ? y.stopAutoplay() : y.pauseAutoplay()),
                                I = !1,
                                y.params.grabCursor && (y.container[0].style.cursor = "move",
                                y.container[0].style.cursor = "-webkit-grabbing",
                                y.container[0].style.cursor = "-moz-grabbin",
                                y.container[0].style.cursor = "grabbing")),
                                T = !0;
                                var r = y.touches.diff = n() ? y.touches.currentX - y.touches.startX : y.touches.currentY - y.touches.startY;
                                r *= y.params.touchRatio,
                                y.rtl && (r = -r),
                                y.swipeDirection = r > 0 ? "prev" : "next",
                                M = r + E;
                                var o = !0;
                                if (r > 0 && M > y.minTranslate() ? (o = !1,
                                y.params.resistance && (M = y.minTranslate() - 1 + Math.pow(-y.minTranslate() + E + r, y.params.resistanceRatio))) : 0 > r && M < y.maxTranslate() && (o = !1,
                                y.params.resistance && (M = y.maxTranslate() + 1 - Math.pow(y.maxTranslate() - E - r, y.params.resistanceRatio))),
                                o && (a.preventedByNestedSwiper = !0),
                                !y.params.allowSwipeToNext && "next" === y.swipeDirection && E > M && (M = E),
                                !y.params.allowSwipeToPrev && "prev" === y.swipeDirection && M > E && (M = E),
                                y.params.followFinger) {
                                    if (y.params.threshold > 0) {
                                        if (!(Math.abs(r) > y.params.threshold || P))
                                            return void (M = E);
                                        if (!P)
                                            return P = !0,
                                            y.touches.startX = y.touches.currentX,
                                            y.touches.startY = y.touches.currentY,
                                            M = E,
                                            void (y.touches.diff = n() ? y.touches.currentX - y.touches.startX : y.touches.currentY - y.touches.startY)
                                    }
                                    (y.params.freeMode || y.params.watchSlidesProgress) && y.updateActiveIndex(),
                                    y.params.freeMode && (0 === D.length && D.push({
                                        position: y.touches[n() ? "startX" : "startY"],
                                        time: S
                                    }),
                                    D.push({
                                        position: y.touches[n() ? "currentX" : "currentY"],
                                        time: (new e.Date).getTime()
                                    })),
                                    y.updateProgress(M),
                                    y.setWrapperTranslate(M)
                                }
                            }
                        }
                    }
                }
            }
            ,
            y.onTouchEnd = function(a) {
                if (a.originalEvent && (a = a.originalEvent),
                y.emit("onTouchEnd", y, a),
                x) {
                    y.params.grabCursor && T && x && (y.container[0].style.cursor = "move",
                    y.container[0].style.cursor = "-webkit-grab",
                    y.container[0].style.cursor = "-moz-grab",
                    y.container[0].style.cursor = "grab");
                    var s = Date.now()
                      , r = s - S;
                    if (y.allowClick && (y.updateClickedSlide(a),
                    y.emit("onTap", y, a),
                    300 > r && s - L > 300 && (z && clearTimeout(z),
                    z = setTimeout(function() {
                        y && (y.params.paginationHide && y.paginationContainer.length > 0 && !t(a.target).hasClass(y.params.bulletClass) && y.paginationContainer.toggleClass(y.params.paginationHiddenClass),
                        y.emit("onClick", y, a))
                    }, 300)),
                    300 > r && 300 > s - L && (z && clearTimeout(z),
                    y.emit("onDoubleTap", y, a))),
                    L = Date.now(),
                    setTimeout(function() {
                        y && (y.allowClick = !0)
                    }, 0),
                    !x || !T || !y.swipeDirection || 0 === y.touches.diff || M === E)
                        return void (x = T = !1);
                    x = T = !1;
                    var i;
                    if (i = y.params.followFinger ? y.rtl ? y.translate : -y.translate : -M,
                    y.params.freeMode) {
                        if (i < -y.minTranslate())
                            return void y.slideTo(y.activeIndex);
                        if (i > -y.maxTranslate())
                            return void y.slideTo(y.slides.length < y.snapGrid.length ? y.snapGrid.length - 1 : y.slides.length - 1);
                        if (y.params.freeModeMomentum) {
                            if (D.length > 1) {
                                var n = D.pop()
                                  , o = D.pop()
                                  , l = n.position - o.position
                                  , p = n.time - o.time;
                                y.velocity = l / p,
                                y.velocity = y.velocity / 2,
                                Math.abs(y.velocity) < .02 && (y.velocity = 0),
                                (p > 150 || (new e.Date).getTime() - n.time > 300) && (y.velocity = 0)
                            } else
                                y.velocity = 0;
                            D.length = 0;
                            var d = 1e3 * y.params.freeModeMomentumRatio
                              , u = y.velocity * d
                              , c = y.translate + u;
                            y.rtl && (c = -c);
                            var m, f = !1, h = 20 * Math.abs(y.velocity) * y.params.freeModeMomentumBounceRatio;
                            if (c < y.maxTranslate())
                                y.params.freeModeMomentumBounce ? (c + y.maxTranslate() < -h && (c = y.maxTranslate() - h),
                                m = y.maxTranslate(),
                                f = !0,
                                I = !0) : c = y.maxTranslate();
                            else if (c > y.minTranslate())
                                y.params.freeModeMomentumBounce ? (c - y.minTranslate() > h && (c = y.minTranslate() + h),
                                m = y.minTranslate(),
                                f = !0,
                                I = !0) : c = y.minTranslate();
                            else if (y.params.freeModeSticky) {
                                var g, v = 0;
                                for (v = 0; v < y.snapGrid.length; v += 1)
                                    if (y.snapGrid[v] > -c) {
                                        g = v;
                                        break
                                    }
                                c = Math.abs(y.snapGrid[g] - c) < Math.abs(y.snapGrid[g - 1] - c) || "next" === y.swipeDirection ? y.snapGrid[g] : y.snapGrid[g - 1],
                                y.rtl || (c = -c)
                            }
                            if (0 !== y.velocity)
                                d = Math.abs(y.rtl ? (-c - y.translate) / y.velocity : (c - y.translate) / y.velocity);
                            else if (y.params.freeModeSticky)
                                return void y.slideReset();
                            y.params.freeModeMomentumBounce && f ? (y.updateProgress(m),
                            y.setWrapperTransition(d),
                            y.setWrapperTranslate(c),
                            y.onTransitionStart(),
                            y.animating = !0,
                            y.wrapper.transitionEnd(function() {
                                y && I && (y.emit("onMomentumBounce", y),
                                y.setWrapperTransition(y.params.speed),
                                y.setWrapperTranslate(m),
                                y.wrapper.transitionEnd(function() {
                                    y && y.onTransitionEnd()
                                }))
                            })) : y.velocity ? (y.updateProgress(c),
                            y.setWrapperTransition(d),
                            y.setWrapperTranslate(c),
                            y.onTransitionStart(),
                            y.animating || (y.animating = !0,
                            y.wrapper.transitionEnd(function() {
                                y && y.onTransitionEnd()
                            }))) : y.updateProgress(c),
                            y.updateActiveIndex()
                        }
                        return void ((!y.params.freeModeMomentum || r >= y.params.longSwipesMs) && (y.updateProgress(),
                        y.updateActiveIndex()))
                    }
                    var w, b = 0, C = y.slidesSizesGrid[0];
                    for (w = 0; w < y.slidesGrid.length; w += y.params.slidesPerGroup)
                        "undefined" != typeof y.slidesGrid[w + y.params.slidesPerGroup] ? i >= y.slidesGrid[w] && i < y.slidesGrid[w + y.params.slidesPerGroup] && (b = w,
                        C = y.slidesGrid[w + y.params.slidesPerGroup] - y.slidesGrid[w]) : i >= y.slidesGrid[w] && (b = w,
                        C = y.slidesGrid[y.slidesGrid.length - 1] - y.slidesGrid[y.slidesGrid.length - 2]);
                    var P = (i - y.slidesGrid[b]) / C;
                    if (r > y.params.longSwipesMs) {
                        if (!y.params.longSwipes)
                            return void y.slideTo(y.activeIndex);
                        "next" === y.swipeDirection && y.slideTo(P >= y.params.longSwipesRatio ? b + y.params.slidesPerGroup : b),
                        "prev" === y.swipeDirection && y.slideTo(P > 1 - y.params.longSwipesRatio ? b + y.params.slidesPerGroup : b)
                    } else {
                        if (!y.params.shortSwipes)
                            return void y.slideTo(y.activeIndex);
                        "next" === y.swipeDirection && y.slideTo(b + y.params.slidesPerGroup),
                        "prev" === y.swipeDirection && y.slideTo(b)
                    }
                }
            }
            ,
            y._slideTo = function(e, a) {
                return y.slideTo(e, a, !0, !0)
            }
            ,
            y.slideTo = function(e, a, t, s) {
                "undefined" == typeof t && (t = !0),
                "undefined" == typeof e && (e = 0),
                0 > e && (e = 0),
                y.snapIndex = Math.floor(e / y.params.slidesPerGroup),
                y.snapIndex >= y.snapGrid.length && (y.snapIndex = y.snapGrid.length - 1);
                var r = -y.snapGrid[y.snapIndex];
                y.params.autoplay && y.autoplaying && (s || !y.params.autoplayDisableOnInteraction ? y.pauseAutoplay(a) : y.stopAutoplay()),
                y.updateProgress(r);
                for (var i = 0; i < y.slidesGrid.length; i++)
                    -Math.floor(100 * r) >= Math.floor(100 * y.slidesGrid[i]) && (e = i);
                return !y.params.allowSwipeToNext && r < y.translate && r < y.minTranslate() ? !1 : !y.params.allowSwipeToPrev && r > y.translate && r > y.maxTranslate() && (y.activeIndex || 0) !== e ? !1 : ("undefined" == typeof a && (a = y.params.speed),
                y.previousIndex = y.activeIndex || 0,
                y.activeIndex = e,
                r === y.translate ? (y.updateClasses(),
                !1) : (y.updateClasses(),
                y.onTransitionStart(t),
                n() ? r : 0,
                n() ? 0 : r,
                0 === a ? (y.setWrapperTransition(0),
                y.setWrapperTranslate(r),
                y.onTransitionEnd(t)) : (y.setWrapperTransition(a),
                y.setWrapperTranslate(r),
                y.animating || (y.animating = !0,
                y.wrapper.transitionEnd(function() {
                    y && y.onTransitionEnd(t)
                }))),
                !0))
            }
            ,
            y.onTransitionStart = function(e) {
                "undefined" == typeof e && (e = !0),
                y.lazy && y.lazy.onTransitionStart(),
                e && (y.emit("onTransitionStart", y),
                y.activeIndex !== y.previousIndex && y.emit("onSlideChangeStart", y))
            }
            ,
            y.onTransitionEnd = function(e) {
                y.animating = !1,
                y.setWrapperTransition(0),
                "undefined" == typeof e && (e = !0),
                y.lazy && y.lazy.onTransitionEnd(),
                e && (y.emit("onTransitionEnd", y),
                y.activeIndex !== y.previousIndex && y.emit("onSlideChangeEnd", y)),
                y.params.hashnav && y.hashnav && y.hashnav.setHash()
            }
            ,
            y.slideNext = function(e, a, t) {
                return y.params.loop ? y.animating ? !1 : (y.fixLoop(),
                y.container[0].clientLeft,
                y.slideTo(y.activeIndex + y.params.slidesPerGroup, a, e, t)) : y.slideTo(y.activeIndex + y.params.slidesPerGroup, a, e, t)
            }
            ,
            y._slideNext = function(e) {
                return y.slideNext(!0, e, !0)
            }
            ,
            y.slidePrev = function(e, a, t) {
                return y.params.loop ? y.animating ? !1 : (y.fixLoop(),
                y.container[0].clientLeft,
                y.slideTo(y.activeIndex - 1, a, e, t)) : y.slideTo(y.activeIndex - 1, a, e, t)
            }
            ,
            y._slidePrev = function(e) {
                return y.slidePrev(!0, e, !0)
            }
            ,
            y.slideReset = function(e, a, t) {
                return y.slideTo(y.activeIndex, a, e)
            }
            ,
            y.setWrapperTransition = function(e, a) {
                y.wrapper.transition(e),
                "slide" !== y.params.effect && y.effects[y.params.effect] && y.effects[y.params.effect].setTransition(e),
                y.params.parallax && y.parallax && y.parallax.setTransition(e),
                y.params.scrollbar && y.scrollbar && y.scrollbar.setTransition(e),
                y.params.control && y.controller && y.controller.setTransition(e, a),
                y.emit("onSetTransition", y, e)
            }
            ,
            y.setWrapperTranslate = function(e, a, t) {
                var s = 0
                  , r = 0
                  , i = 0;
                n() ? s = y.rtl ? -e : e : r = e,
                y.params.virtualTranslate || y.wrapper.transform(y.support.transforms3d ? "translate3d(" + s + "px, " + r + "px, " + i + "px)" : "translate(" + s + "px, " + r + "px)"),
                y.translate = n() ? s : r,
                a && y.updateActiveIndex(),
                "slide" !== y.params.effect && y.effects[y.params.effect] && y.effects[y.params.effect].setTranslate(y.translate),
                y.params.parallax && y.parallax && y.parallax.setTranslate(y.translate),
                y.params.scrollbar && y.scrollbar && y.scrollbar.setTranslate(y.translate),
                y.params.control && y.controller && y.controller.setTranslate(y.translate, t),
                y.emit("onSetTranslate", y, y.translate)
            }
            ,
            y.getTranslate = function(a, t) {
                var s, r, i, n;
                return "undefined" == typeof t && (t = "x"),
                y.params.virtualTranslate ? y.rtl ? -y.translate : y.translate : (i = e.getComputedStyle(a, null),
                e.WebKitCSSMatrix ? n = new e.WebKitCSSMatrix("none" === i.webkitTransform ? "" : i.webkitTransform) : (n = i.MozTransform || i.OTransform || i.MsTransform || i.msTransform || i.transform || i.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"),
                s = n.toString().split(",")),
                "x" === t && (r = e.WebKitCSSMatrix ? n.m41 : parseFloat(16 === s.length ? s[12] : s[4])),
                "y" === t && (r = e.WebKitCSSMatrix ? n.m42 : parseFloat(16 === s.length ? s[13] : s[5])),
                y.rtl && r && (r = -r),
                r || 0)
            }
            ,
            y.getWrapperTranslate = function(e) {
                return "undefined" == typeof e && (e = n() ? "x" : "y"),
                y.getTranslate(y.wrapper[0], e)
            }
            ,
            y.observers = [],
            y.initObservers = function() {
                if (y.params.observeParents)
                    for (var e = y.container.parents(), a = 0; a < e.length; a++)
                        d(e[a]);
                d(y.container[0], {
                    childList: !1
                }),
                d(y.wrapper[0], {
                    attributes: !1
                })
            }
            ,
            y.disconnectObservers = function() {
                for (var e = 0; e < y.observers.length; e++)
                    y.observers[e].disconnect();
                y.observers = []
            }
            ,
            y.createLoop = function() {
                y.wrapper.children("." + y.params.slideClass + "." + y.params.slideDuplicateClass).remove();
                var e = y.wrapper.children("." + y.params.slideClass);
                "auto" !== y.params.slidesPerView || y.params.loopedSlides || (y.params.loopedSlides = e.length),
                y.loopedSlides = parseInt(y.params.loopedSlides || y.params.slidesPerView, 10),
                y.loopedSlides = y.loopedSlides + y.params.loopAdditionalSlides,
                y.loopedSlides > e.length && (y.loopedSlides = e.length);
                var a, s = [], r = [];
                for (e.each(function(a, i) {
                    var n = t(this);
                    a < y.loopedSlides && r.push(i),
                    a < e.length && a >= e.length - y.loopedSlides && s.push(i),
                    n.attr("data-swiper-slide-index", a)
                }),
                a = 0; a < r.length; a++)
                    y.wrapper.append(t(r[a].cloneNode(!0)).addClass(y.params.slideDuplicateClass));
                for (a = s.length - 1; a >= 0; a--)
                    y.wrapper.prepend(t(s[a].cloneNode(!0)).addClass(y.params.slideDuplicateClass))
            }
            ,
            y.destroyLoop = function() {
                y.wrapper.children("." + y.params.slideClass + "." + y.params.slideDuplicateClass).remove(),
                y.slides.removeAttr("data-swiper-slide-index")
            }
            ,
            y.fixLoop = function() {
                var e;
                y.activeIndex < y.loopedSlides ? (e = y.slides.length - 3 * y.loopedSlides + y.activeIndex,
                e += y.loopedSlides,
                y.slideTo(e, 0, !1, !0)) : ("auto" === y.params.slidesPerView && y.activeIndex >= 2 * y.loopedSlides || y.activeIndex > y.slides.length - 2 * y.params.slidesPerView) && (e = -y.slides.length + y.activeIndex + y.loopedSlides,
                e += y.loopedSlides,
                y.slideTo(e, 0, !1, !0))
            }
            ,
            y.appendSlide = function(e) {
                if (y.params.loop && y.destroyLoop(),
                "object" == typeof e && e.length)
                    for (var a = 0; a < e.length; a++)
                        e[a] && y.wrapper.append(e[a]);
                else
                    y.wrapper.append(e);
                y.params.loop && y.createLoop(),
                y.params.observer && y.support.observer || y.update(!0)
            }
            ,
            y.prependSlide = function(e) {
                y.params.loop && y.destroyLoop();
                var a = y.activeIndex + 1;
                if ("object" == typeof e && e.length) {
                    for (var t = 0; t < e.length; t++)
                        e[t] && y.wrapper.prepend(e[t]);
                    a = y.activeIndex + e.length
                } else
                    y.wrapper.prepend(e);
                y.params.loop && y.createLoop(),
                y.params.observer && y.support.observer || y.update(!0),
                y.slideTo(a, 0, !1)
            }
            ,
            y.removeSlide = function(e) {
                y.params.loop && (y.destroyLoop(),
                y.slides = y.wrapper.children("." + y.params.slideClass));
                var a, t = y.activeIndex;
                if ("object" == typeof e && e.length) {
                    for (var s = 0; s < e.length; s++)
                        a = e[s],
                        y.slides[a] && y.slides.eq(a).remove(),
                        t > a && t--;
                    t = Math.max(t, 0)
                } else
                    a = e,
                    y.slides[a] && y.slides.eq(a).remove(),
                    t > a && t--,
                    t = Math.max(t, 0);
                y.params.loop && y.createLoop(),
                y.params.observer && y.support.observer || y.update(!0),
                y.params.loop ? y.slideTo(t + y.loopedSlides, 0, !1) : y.slideTo(t, 0, !1)
            }
            ,
            y.removeAllSlides = function() {
                for (var e = [], a = 0; a < y.slides.length; a++)
                    e.push(a);
                y.removeSlide(e)
            }
            ,
            y.effects = {
                fade: {
                    setTranslate: function() {
                        for (var e = 0; e < y.slides.length; e++) {
                            var a = y.slides.eq(e)
                              , t = a[0].swiperSlideOffset
                              , s = -t;
                            y.params.virtualTranslate || (s -= y.translate);
                            var r = 0;
                            n() || (r = s,
                            s = 0);
                            var i = y.params.fade.crossFade ? Math.max(1 - Math.abs(a[0].progress), 0) : 1 + Math.min(Math.max(a[0].progress, -1), 0);
                            a.css({
                                opacity: i
                            }).transform("translate3d(" + s + "px, " + r + "px, 0px)")
                        }
                    },
                    setTransition: function(e) {
                        if (y.slides.transition(e),
                        y.params.virtualTranslate && 0 !== e) {
                            var a = !1;
                            y.slides.transitionEnd(function() {
                                if (!a && y) {
                                    a = !0,
                                    y.animating = !1;
                                    for (var e = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], t = 0; t < e.length; t++)
                                        y.wrapper.trigger(e[t])
                                }
                            })
                        }
                    }
                },
                cube: {
                    setTranslate: function() {
                        var e, a = 0;
                        y.params.cube.shadow && (n() ? (e = y.wrapper.find(".swiper-cube-shadow"),
                        0 === e.length && (e = t('<div class="swiper-cube-shadow"></div>'),
                        y.wrapper.append(e)),
                        e.css({
                            height: y.width + "px"
                        })) : (e = y.container.find(".swiper-cube-shadow"),
                        0 === e.length && (e = t('<div class="swiper-cube-shadow"></div>'),
                        y.container.append(e))));
                        for (var s = 0; s < y.slides.length; s++) {
                            var r = y.slides.eq(s)
                              , i = 90 * s
                              , o = Math.floor(i / 360);
                            y.rtl && (i = -i,
                            o = Math.floor(-i / 360));
                            var l = Math.max(Math.min(r[0].progress, 1), -1)
                              , p = 0
                              , d = 0
                              , u = 0;
                            s % 4 === 0 ? (p = 4 * -o * y.size,
                            u = 0) : (s - 1) % 4 === 0 ? (p = 0,
                            u = 4 * -o * y.size) : (s - 2) % 4 === 0 ? (p = y.size + 4 * o * y.size,
                            u = y.size) : (s - 3) % 4 === 0 && (p = -y.size,
                            u = 3 * y.size + 4 * y.size * o),
                            y.rtl && (p = -p),
                            n() || (d = p,
                            p = 0);
                            var c = "rotateX(" + (n() ? 0 : -i) + "deg) rotateY(" + (n() ? i : 0) + "deg) translate3d(" + p + "px, " + d + "px, " + u + "px)";
                            if (1 >= l && l > -1 && (a = 90 * s + 90 * l,
                            y.rtl && (a = 90 * -s - 90 * l)),
                            r.transform(c),
                            y.params.cube.slideShadows) {
                                var m = r.find(n() ? ".swiper-slide-shadow-left" : ".swiper-slide-shadow-top")
                                  , f = r.find(n() ? ".swiper-slide-shadow-right" : ".swiper-slide-shadow-bottom");
                                0 === m.length && (m = t('<div class="swiper-slide-shadow-' + (n() ? "left" : "top") + '"></div>'),
                                r.append(m)),
                                0 === f.length && (f = t('<div class="swiper-slide-shadow-' + (n() ? "right" : "bottom") + '"></div>'),
                                r.append(f)),
                                r[0].progress,
                                m.length && (m[0].style.opacity = -r[0].progress),
                                f.length && (f[0].style.opacity = r[0].progress)
                            }
                        }
                        if (y.wrapper.css({
                            "-webkit-transform-origin": "50% 50% -" + y.size / 2 + "px",
                            "-moz-transform-origin": "50% 50% -" + y.size / 2 + "px",
                            "-ms-transform-origin": "50% 50% -" + y.size / 2 + "px",
                            "transform-origin": "50% 50% -" + y.size / 2 + "px"
                        }),
                        y.params.cube.shadow)
                            if (n())
                                e.transform("translate3d(0px, " + (y.width / 2 + y.params.cube.shadowOffset) + "px, " + -y.width / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + y.params.cube.shadowScale + ")");
                            else {
                                var h = Math.abs(a) - 90 * Math.floor(Math.abs(a) / 90)
                                  , g = 1.5 - (Math.sin(2 * h * Math.PI / 360) / 2 + Math.cos(2 * h * Math.PI / 360) / 2)
                                  , v = y.params.cube.shadowScale
                                  , w = y.params.cube.shadowScale / g
                                  , b = y.params.cube.shadowOffset;
                                e.transform("scale3d(" + v + ", 1, " + w + ") translate3d(0px, " + (y.height / 2 + b) + "px, " + -y.height / 2 / w + "px) rotateX(-90deg)")
                            }
                        var x = y.isSafari || y.isUiWebView ? -y.size / 2 : 0;
                        y.wrapper.transform("translate3d(0px,0," + x + "px) rotateX(" + (n() ? 0 : a) + "deg) rotateY(" + (n() ? -a : 0) + "deg)")
                    },
                    setTransition: function(e) {
                        y.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),
                        y.params.cube.shadow && !n() && y.container.find(".swiper-cube-shadow").transition(e)
                    }
                },
                coverflow: {
                    setTranslate: function() {
                        for (var e = y.translate, a = n() ? -e + y.width / 2 : -e + y.height / 2, s = n() ? y.params.coverflow.rotate : -y.params.coverflow.rotate, r = y.params.coverflow.depth, i = 0, o = y.slides.length; o > i; i++) {
                            var l = y.slides.eq(i)
                              , p = y.slidesSizesGrid[i]
                              , d = l[0].swiperSlideOffset
                              , u = (a - d - p / 2) / p * y.params.coverflow.modifier
                              , c = n() ? s * u : 0
                              , m = n() ? 0 : s * u
                              , f = -r * Math.abs(u)
                              , h = n() ? 0 : y.params.coverflow.stretch * u
                              , g = n() ? y.params.coverflow.stretch * u : 0;
                            Math.abs(g) < .001 && (g = 0),
                            Math.abs(h) < .001 && (h = 0),
                            Math.abs(f) < .001 && (f = 0),
                            Math.abs(c) < .001 && (c = 0),
                            Math.abs(m) < .001 && (m = 0);
                            var v = "translate3d(" + g + "px," + h + "px," + f + "px)  rotateX(" + m + "deg) rotateY(" + c + "deg)";
                            if (l.transform(v),
                            l[0].style.zIndex = -Math.abs(Math.round(u)) + 1,
                            y.params.coverflow.slideShadows) {
                                var w = l.find(n() ? ".swiper-slide-shadow-left" : ".swiper-slide-shadow-top")
                                  , b = l.find(n() ? ".swiper-slide-shadow-right" : ".swiper-slide-shadow-bottom");
                                0 === w.length && (w = t('<div class="swiper-slide-shadow-' + (n() ? "left" : "top") + '"></div>'),
                                l.append(w)),
                                0 === b.length && (b = t('<div class="swiper-slide-shadow-' + (n() ? "right" : "bottom") + '"></div>'),
                                l.append(b)),
                                w.length && (w[0].style.opacity = u > 0 ? u : 0),
                                b.length && (b[0].style.opacity = -u > 0 ? -u : 0)
                            }
                        }
                        if (y.browser.ie) {
                            var x = y.wrapper[0].style;
                            x.perspectiveOrigin = a + "px 50%"
                        }
                    },
                    setTransition: function(e) {
                        y.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
                    }
                }
            },
            y.lazy = {
                initialImageLoaded: !1,
                loadImageInSlide: function(e, a) {
                    if ("undefined" != typeof e && ("undefined" == typeof a && (a = !0),
                    0 !== y.slides.length)) {
                        var s = y.slides.eq(e)
                          , r = s.find(".swiper-lazy:not(.swiper-lazy-loaded):not(.swiper-lazy-loading)");
                        !s.hasClass("swiper-lazy") || s.hasClass("swiper-lazy-loaded") || s.hasClass("swiper-lazy-loading") || r.add(s[0]),
                        0 !== r.length && r.each(function() {
                            var e = t(this);
                            e.addClass("swiper-lazy-loading");
                            var r = e.attr("data-background")
                              , i = e.attr("data-src");
                            y.loadImage(e[0], i || r, !1, function() {
                                if (r ? (e.css("background-image", "url(" + r + ")"),
                                e.removeAttr("data-background")) : (e.attr("src", i),
                                e.removeAttr("data-src")),
                                e.addClass("swiper-lazy-loaded").removeClass("swiper-lazy-loading"),
                                s.find(".swiper-lazy-preloader, .preloader").remove(),
                                y.params.loop && a) {
                                    var t = s.attr("data-swiper-slide-index");
                                    if (s.hasClass(y.params.slideDuplicateClass)) {
                                        var n = y.wrapper.children('[data-swiper-slide-index="' + t + '"]:not(.' + y.params.slideDuplicateClass + ")");
                                        y.lazy.loadImageInSlide(n.index(), !1)
                                    } else {
                                        var o = y.wrapper.children("." + y.params.slideDuplicateClass + '[data-swiper-slide-index="' + t + '"]');
                                        y.lazy.loadImageInSlide(o.index(), !1)
                                    }
                                }
                                y.emit("onLazyImageReady", y, s[0], e[0])
                            }),
                            y.emit("onLazyImageLoad", y, s[0], e[0])
                        })
                    }
                },
                load: function() {
                    var e;
                    if (y.params.watchSlidesVisibility)
                        y.wrapper.children("." + y.params.slideVisibleClass).each(function() {
                            y.lazy.loadImageInSlide(t(this).index())
                        });
                    else if (y.params.slidesPerView > 1)
                        for (e = y.activeIndex; e < y.activeIndex + y.params.slidesPerView; e++)
                            y.slides[e] && y.lazy.loadImageInSlide(e);
                    else
                        y.lazy.loadImageInSlide(y.activeIndex);
                    if (y.params.lazyLoadingInPrevNext)
                        if (y.params.slidesPerView > 1) {
                            for (e = y.activeIndex + y.params.slidesPerView; e < y.activeIndex + y.params.slidesPerView + y.params.slidesPerView; e++)
                                y.slides[e] && y.lazy.loadImageInSlide(e);
                            for (e = y.activeIndex - y.params.slidesPerView; e < y.activeIndex; e++)
                                y.slides[e] && y.lazy.loadImageInSlide(e)
                        } else {
                            var a = y.wrapper.children("." + y.params.slideNextClass);
                            a.length > 0 && y.lazy.loadImageInSlide(a.index());
                            var s = y.wrapper.children("." + y.params.slidePrevClass);
                            s.length > 0 && y.lazy.loadImageInSlide(s.index())
                        }
                },
                onTransitionStart: function() {
                    y.params.lazyLoading && (y.params.lazyLoadingOnTransitionStart || !y.params.lazyLoadingOnTransitionStart && !y.lazy.initialImageLoaded) && y.lazy.load()
                },
                onTransitionEnd: function() {
                    y.params.lazyLoading && !y.params.lazyLoadingOnTransitionStart && y.lazy.load()
                }
            },
            y.scrollbar = {
                set: function() {
                    if (y.params.scrollbar) {
                        var e = y.scrollbar;
                        e.track = t(y.params.scrollbar),
                        e.drag = e.track.find(".swiper-scrollbar-drag"),
                        0 === e.drag.length && (e.drag = t('<div class="swiper-scrollbar-drag"></div>'),
                        e.track.append(e.drag)),
                        e.drag[0].style.width = "",
                        e.drag[0].style.height = "",
                        e.trackSize = n() ? e.track[0].offsetWidth : e.track[0].offsetHeight,
                        e.divider = y.size / y.virtualSize,
                        e.moveDivider = e.divider * (e.trackSize / y.size),
                        e.dragSize = e.trackSize * e.divider,
                        n() ? e.drag[0].style.width = e.dragSize + "px" : e.drag[0].style.height = e.dragSize + "px",
                        e.divider >= 1 ? e.track[0].style.display = "none" : e.track[0].style.display = "",
                        y.params.scrollbarHide && (e.track[0].style.opacity = 0)
                    }
                },
                setTranslate: function() {
                    if (y.params.scrollbar) {
                        var e, a = y.scrollbar, t = (y.translate || 0,
                        a.dragSize);
                        e = (a.trackSize - a.dragSize) * y.progress,
                        y.rtl && n() ? (e = -e,
                        e > 0 ? (t = a.dragSize - e,
                        e = 0) : -e + a.dragSize > a.trackSize && (t = a.trackSize + e)) : 0 > e ? (t = a.dragSize + e,
                        e = 0) : e + a.dragSize > a.trackSize && (t = a.trackSize - e),
                        n() ? (a.drag.transform(y.support.transforms3d ? "translate3d(" + e + "px, 0, 0)" : "translateX(" + e + "px)"),
                        a.drag[0].style.width = t + "px") : (a.drag.transform(y.support.transforms3d ? "translate3d(0px, " + e + "px, 0)" : "translateY(" + e + "px)"),
                        a.drag[0].style.height = t + "px"),
                        y.params.scrollbarHide && (clearTimeout(a.timeout),
                        a.track[0].style.opacity = 1,
                        a.timeout = setTimeout(function() {
                            a.track[0].style.opacity = 0,
                            a.track.transition(400)
                        }, 1e3))
                    }
                },
                setTransition: function(e) {
                    y.params.scrollbar && y.scrollbar.drag.transition(e)
                }
            },
            y.controller = {
                LinearSpline: function(e, a) {
                    this.x = e,
                    this.y = a,
                    this.lastIndex = e.length - 1;
                    var t, s;
                    this.x.length,
                    this.interpolate = function(e) {
                        return e ? (s = r(this.x, e),
                        t = s - 1,
                        (e - this.x[t]) * (this.y[s] - this.y[t]) / (this.x[s] - this.x[t]) + this.y[t]) : 0
                    }
                    ;
                    var r = function() {
                        var e, a, t;
                        return function(s, r) {
                            for (a = -1,
                            e = s.length; e - a > 1; )
                                s[t = e + a >> 1] <= r ? a = t : e = t;
                            return e
                        }
                    }()
                },
                getInterpolateFunction: function(e) {
                    y.controller.spline || (y.controller.spline = y.params.loop ? new y.controller.LinearSpline(y.slidesGrid,e.slidesGrid) : new y.controller.LinearSpline(y.snapGrid,e.snapGrid))
                },
                setTranslate: function(e, a) {
                    function t(a) {
                        e = a.rtl && "horizontal" === a.params.direction ? -y.translate : y.translate,
                        "slide" === y.params.controlBy && (y.controller.getInterpolateFunction(a),
                        i = -y.controller.spline.interpolate(-e)),
                        i && "container" !== y.params.controlBy || (r = (a.maxTranslate() - a.minTranslate()) / (y.maxTranslate() - y.minTranslate()),
                        i = (e - y.minTranslate()) * r + a.minTranslate()),
                        y.params.controlInverse && (i = a.maxTranslate() - i),
                        a.updateProgress(i),
                        a.setWrapperTranslate(i, !1, y),
                        a.updateActiveIndex()
                    }
                    var r, i, n = y.params.control;
                    if (y.isArray(n))
                        for (var o = 0; o < n.length; o++)
                            n[o] !== a && n[o]instanceof s && t(n[o]);
                    else
                        n instanceof s && a !== n && t(n)
                },
                setTransition: function(e, a) {
                    function t(a) {
                        a.setWrapperTransition(e, y),
                        0 !== e && (a.onTransitionStart(),
                        a.wrapper.transitionEnd(function() {
                            i && (a.params.loop && "slide" === y.params.controlBy && a.fixLoop(),
                            a.onTransitionEnd())
                        }))
                    }
                    var r, i = y.params.control;
                    if (y.isArray(i))
                        for (r = 0; r < i.length; r++)
                            i[r] !== a && i[r]instanceof s && t(i[r]);
                    else
                        i instanceof s && a !== i && t(i)
                }
            },
            y.hashnav = {
                init: function() {
                    if (y.params.hashnav) {
                        y.hashnav.initialized = !0;
                        var e = document.location.hash.replace("#", "");
                        if (e)
                            for (var a = 0, t = 0, s = y.slides.length; s > t; t++) {
                                var r = y.slides.eq(t)
                                  , i = r.attr("data-hash");
                                if (i === e && !r.hasClass(y.params.slideDuplicateClass)) {
                                    var n = r.index();
                                    y.slideTo(n, a, y.params.runCallbacksOnInit, !0)
                                }
                            }
                    }
                },
                setHash: function() {
                    y.hashnav.initialized && y.params.hashnav && (document.location.hash = y.slides.eq(y.activeIndex).attr("data-hash") || "")
                }
            },
            y.disableKeyboardControl = function() {
                t(document).off("keydown", u)
            }
            ,
            y.enableKeyboardControl = function() {
                t(document).on("keydown", u)
            }
            ,
            y.mousewheel = {
                event: !1,
                lastScrollTime: (new e.Date).getTime()
            },
            y.params.mousewheelControl) {
                try {
                    new e.WheelEvent("wheel"),
                    y.mousewheel.event = "wheel"
                } catch (O) {}
                y.mousewheel.event || void 0 === document.onmousewheel || (y.mousewheel.event = "mousewheel"),
                y.mousewheel.event || (y.mousewheel.event = "DOMMouseScroll")
            }
            y.disableMousewheelControl = function() {
                return y.mousewheel.event ? (y.container.off(y.mousewheel.event, c),
                !0) : !1
            }
            ,
            y.enableMousewheelControl = function() {
                return y.mousewheel.event ? (y.container.on(y.mousewheel.event, c),
                !0) : !1
            }
            ,
            y.parallax = {
                setTranslate: function() {
                    y.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                        m(this, y.progress)
                    }),
                    y.slides.each(function() {
                        var e = t(this);
                        e.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                            var a = Math.min(Math.max(e[0].progress, -1), 1);
                            m(this, a)
                        })
                    })
                },
                setTransition: function(e) {
                    "undefined" == typeof e && (e = y.params.speed),
                    y.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                        var a = t(this)
                          , s = parseInt(a.attr("data-swiper-parallax-duration"), 10) || e;
                        0 === e && (s = 0),
                        a.transition(s)
                    })
                }
            },
            y._plugins = [];
            for (var A in y.plugins) {
                var N = y.plugins[A](y, y.params[A]);
                N && y._plugins.push(N)
            }
            return y.callPlugins = function(e) {
                for (var a = 0; a < y._plugins.length; a++)
                    e in y._plugins[a] && y._plugins[a][e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
            }
            ,
            y.emitterEventListeners = {},
            y.emit = function(e) {
                y.params[e] && y.params[e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                var a;
                if (y.emitterEventListeners[e])
                    for (a = 0; a < y.emitterEventListeners[e].length; a++)
                        y.emitterEventListeners[e][a](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                y.callPlugins && y.callPlugins(e, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
            }
            ,
            y.on = function(e, a) {
                return e = f(e),
                y.emitterEventListeners[e] || (y.emitterEventListeners[e] = []),
                y.emitterEventListeners[e].push(a),
                y
            }
            ,
            y.off = function(e, a) {
                var t;
                if (e = f(e),
                "undefined" == typeof a)
                    return y.emitterEventListeners[e] = [],
                    y;
                if (y.emitterEventListeners[e] && 0 !== y.emitterEventListeners[e].length) {
                    for (t = 0; t < y.emitterEventListeners[e].length; t++)
                        y.emitterEventListeners[e][t] === a && y.emitterEventListeners[e].splice(t, 1);
                    return y
                }
            }
            ,
            y.once = function(e, a) {
                e = f(e);
                var t = function() {
                    a(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]),
                    y.off(e, t)
                };
                return y.on(e, t),
                y
            }
            ,
            y.a11y = {
                makeFocusable: function(e) {
                    return e.attr("tabIndex", "0"),
                    e
                },
                addRole: function(e, a) {
                    return e.attr("role", a),
                    e
                },
                addLabel: function(e, a) {
                    return e.attr("aria-label", a),
                    e
                },
                disable: function(e) {
                    return e.attr("aria-disabled", !0),
                    e
                },
                enable: function(e) {
                    return e.attr("aria-disabled", !1),
                    e
                },
                onEnterKey: function(e) {
                    13 === e.keyCode && (t(e.target).is(y.params.nextButton) ? (y.onClickNext(e),
                    y.a11y.notify(y.isEnd ? y.params.lastSlideMessage : y.params.nextSlideMessage)) : t(e.target).is(y.params.prevButton) && (y.onClickPrev(e),
                    y.a11y.notify(y.isBeginning ? y.params.firstSlideMessage : y.params.prevSlideMessage)),
                    t(e.target).is("." + y.params.bulletClass) && t(e.target)[0].click())
                },
                liveRegion: t('<span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>'),
                notify: function(e) {
                    var a = y.a11y.liveRegion;
                    0 !== a.length && (a.html(""),
                    a.html(e))
                },
                init: function() {
                    if (y.params.nextButton) {
                        var e = t(y.params.nextButton);
                        y.a11y.makeFocusable(e),
                        y.a11y.addRole(e, "button"),
                        y.a11y.addLabel(e, y.params.nextSlideMessage)
                    }
                    if (y.params.prevButton) {
                        var a = t(y.params.prevButton);
                        y.a11y.makeFocusable(a),
                        y.a11y.addRole(a, "button"),
                        y.a11y.addLabel(a, y.params.prevSlideMessage)
                    }
                    t(y.container).append(y.a11y.liveRegion)
                },
                initPagination: function() {
                    y.params.pagination && y.params.paginationClickable && y.bullets && y.bullets.length && y.bullets.each(function() {
                        var e = t(this);
                        y.a11y.makeFocusable(e),
                        y.a11y.addRole(e, "button"),
                        y.a11y.addLabel(e, y.params.paginationBulletMessage.replace(/{{index}}/, e.index() + 1))
                    })
                },
                destroy: function() {
                    y.a11y.liveRegion && y.a11y.liveRegion.length > 0 && y.a11y.liveRegion.remove()
                }
            },
            y.init = function() {
                y.params.loop && y.createLoop(),
                y.updateContainerSize(),
                y.updateSlidesSize(),
                y.updatePagination(),
                y.params.scrollbar && y.scrollbar && y.scrollbar.set(),
                "slide" !== y.params.effect && y.effects[y.params.effect] && (y.params.loop || y.updateProgress(),
                y.effects[y.params.effect].setTranslate()),
                y.params.loop ? y.slideTo(y.params.initialSlide + y.loopedSlides, 0, y.params.runCallbacksOnInit) : (y.slideTo(y.params.initialSlide, 0, y.params.runCallbacksOnInit),
                0 === y.params.initialSlide && (y.parallax && y.params.parallax && y.parallax.setTranslate(),
                y.lazy && y.params.lazyLoading && (y.lazy.load(),
                y.lazy.initialImageLoaded = !0))),
                y.attachEvents(),
                y.params.observer && y.support.observer && y.initObservers(),
                y.params.preloadImages && !y.params.lazyLoading && y.preloadImages(),
                y.params.autoplay && y.startAutoplay(),
                y.params.keyboardControl && y.enableKeyboardControl && y.enableKeyboardControl(),
                y.params.mousewheelControl && y.enableMousewheelControl && y.enableMousewheelControl(),
                y.params.hashnav && y.hashnav && y.hashnav.init(),
                y.params.a11y && y.a11y && y.a11y.init(),
                y.emit("onInit", y)
            }
            ,
            y.cleanupStyles = function() {
                y.container.removeClass(y.classNames.join(" ")).removeAttr("style"),
                y.wrapper.removeAttr("style"),
                y.slides && y.slides.length && y.slides.removeClass([y.params.slideVisibleClass, y.params.slideActiveClass, y.params.slideNextClass, y.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"),
                y.paginationContainer && y.paginationContainer.length && y.paginationContainer.removeClass(y.params.paginationHiddenClass),
                y.bullets && y.bullets.length && y.bullets.removeClass(y.params.bulletActiveClass),
                y.params.prevButton && t(y.params.prevButton).removeClass(y.params.buttonDisabledClass),
                y.params.nextButton && t(y.params.nextButton).removeClass(y.params.buttonDisabledClass),
                y.params.scrollbar && y.scrollbar && (y.scrollbar.track && y.scrollbar.track.length && y.scrollbar.track.removeAttr("style"),
                y.scrollbar.drag && y.scrollbar.drag.length && y.scrollbar.drag.removeAttr("style"))
            }
            ,
            y.destroy = function(e, a) {
                y.detachEvents(),
                y.stopAutoplay(),
                y.params.loop && y.destroyLoop(),
                a && y.cleanupStyles(),
                y.disconnectObservers(),
                y.params.keyboardControl && y.disableKeyboardControl && y.disableKeyboardControl(),
                y.params.mousewheelControl && y.disableMousewheelControl && y.disableMousewheelControl(),
                y.params.a11y && y.a11y && y.a11y.destroy(),
                y.emit("onDestroy"),
                e !== !1 && (y = null)
            }
            ,
            y.init(),
            y
        }
    };
    s.prototype = {
        isSafari: function() {
            var e = navigator.userAgent.toLowerCase();
            return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
        }(),
        isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),
        isArray: function(e) {
            return "[object Array]" === Object.prototype.toString.apply(e)
        },
        browser: {
            ie: e.navigator.pointerEnabled || e.navigator.msPointerEnabled,
            ieTouch: e.navigator.msPointerEnabled && e.navigator.msMaxTouchPoints > 1 || e.navigator.pointerEnabled && e.navigator.maxTouchPoints > 1
        },
        device: function() {
            var e = navigator.userAgent
              , a = e.match(/(Android);?[\s\/]+([\d.]+)?/)
              , t = e.match(/(iPad).*OS\s([\d_]+)/)
              , s = e.match(/(iPod)(.*OS\s([\d_]+))?/)
              , r = !t && e.match(/(iPhone\sOS)\s([\d_]+)/);
            return {
                ios: t || r || s,
                android: a
            }
        }(),
        support: {
            touch: e.Modernizr && Modernizr.touch === !0 || function() {
                return !!("ontouchstart"in e || e.DocumentTouch && document instanceof DocumentTouch)
            }(),
            transforms3d: e.Modernizr && Modernizr.csstransforms3d === !0 || function() {
                var e = document.createElement("div").style;
                return "webkitPerspective"in e || "MozPerspective"in e || "OPerspective"in e || "MsPerspective"in e || "perspective"in e
            }(),
            flexbox: function() {
                for (var e = document.createElement("div").style, a = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), t = 0; t < a.length; t++)
                    if (a[t]in e)
                        return !0
            }(),
            observer: function() {
                return "MutationObserver"in e || "WebkitMutationObserver"in e
            }()
        },
        plugins: {}
    };
    for (var r = (function() {
        var a = function(e) {
            var a = this
              , t = 0;
            for (t = 0; t < e.length; t++)
                a[t] = e[t];
            return a.length = e.length,
            this
        }
          , t = function(t, s) {
            var r = []
              , i = 0;
            if (t && !s && t instanceof a)
                return t;
            if (t)
                if ("string" == typeof t) {
                    var n, o, l = t.trim();
                    if (l.indexOf("<") >= 0 && l.indexOf(">") >= 0) {
                        var p = "div";
                        for (0 === l.indexOf("<li") && (p = "ul"),
                        0 === l.indexOf("<tr") && (p = "tbody"),
                        (0 === l.indexOf("<td") || 0 === l.indexOf("<th")) && (p = "tr"),
                        0 === l.indexOf("<tbody") && (p = "table"),
                        0 === l.indexOf("<option") && (p = "select"),
                        o = document.createElement(p),
                        o.innerHTML = t,
                        i = 0; i < o.childNodes.length; i++)
                            r.push(o.childNodes[i])
                    } else
                        for (n = s || "#" !== t[0] || t.match(/[ .<>:~]/) ? (s || document).querySelectorAll(t) : [document.getElementById(t.split("#")[1])],
                        i = 0; i < n.length; i++)
                            n[i] && r.push(n[i])
                } else if (t.nodeType || t === e || t === document)
                    r.push(t);
                else if (t.length > 0 && t[0].nodeType)
                    for (i = 0; i < t.length; i++)
                        r.push(t[i]);
            return new a(r)
        };
        return a.prototype = {
            addClass: function(e) {
                if ("undefined" == typeof e)
                    return this;
                for (var a = e.split(" "), t = 0; t < a.length; t++)
                    for (var s = 0; s < this.length; s++)
                        this[s].classList.add(a[t]);
                return this
            },
            removeClass: function(e) {
                for (var a = e.split(" "), t = 0; t < a.length; t++)
                    for (var s = 0; s < this.length; s++)
                        this[s].classList.remove(a[t]);
                return this
            },
            hasClass: function(e) {
                return this[0] ? this[0].classList.contains(e) : !1
            },
            toggleClass: function(e) {
                for (var a = e.split(" "), t = 0; t < a.length; t++)
                    for (var s = 0; s < this.length; s++)
                        this[s].classList.toggle(a[t]);
                return this
            },
            attr: function(e, a) {
                if (1 === arguments.length && "string" == typeof e)
                    return this[0] ? this[0].getAttribute(e) : void 0;
                for (var t = 0; t < this.length; t++)
                    if (2 === arguments.length)
                        this[t].setAttribute(e, a);
                    else
                        for (var s in e)
                            this[t][s] = e[s],
                            this[t].setAttribute(s, e[s]);
                return this
            },
            removeAttr: function(e) {
                for (var a = 0; a < this.length; a++)
                    this[a].removeAttribute(e);
                return this
            },
            data: function(e, a) {
                if ("undefined" == typeof a) {
                    if (this[0]) {
                        var t = this[0].getAttribute("data-" + e);
                        return t ? t : this[0].dom7ElementDataStorage && e in this[0].dom7ElementDataStorage ? this[0].dom7ElementDataStorage[e] : void 0
                    }
                    return void 0
                }
                for (var s = 0; s < this.length; s++) {
                    var r = this[s];
                    r.dom7ElementDataStorage || (r.dom7ElementDataStorage = {}),
                    r.dom7ElementDataStorage[e] = a
                }
                return this
            },
            transform: function(e) {
                for (var a = 0; a < this.length; a++) {
                    var t = this[a].style;
                    t.webkitTransform = t.MsTransform = t.msTransform = t.MozTransform = t.OTransform = t.transform = e
                }
                return this
            },
            transition: function(e) {
                "string" != typeof e && (e += "ms");
                for (var a = 0; a < this.length; a++) {
                    var t = this[a].style;
                    t.webkitTransitionDuration = t.MsTransitionDuration = t.msTransitionDuration = t.MozTransitionDuration = t.OTransitionDuration = t.transitionDuration = e
                }
                return this
            },
            on: function(e, a, s, r) {
                function i(e) {
                    var r = e.target;
                    if (t(r).is(a))
                        s.call(r, e);
                    else
                        for (var i = t(r).parents(), n = 0; n < i.length; n++)
                            t(i[n]).is(a) && s.call(i[n], e)
                }
                var n, o, l = e.split(" ");
                for (n = 0; n < this.length; n++)
                    if ("function" == typeof a || a === !1)
                        for ("function" == typeof a && (s = arguments[1],
                        r = arguments[2] || !1),
                        o = 0; o < l.length; o++)
                            this[n].addEventListener(l[o], s, r);
                    else
                        for (o = 0; o < l.length; o++)
                            this[n].dom7LiveListeners || (this[n].dom7LiveListeners = []),
                            this[n].dom7LiveListeners.push({
                                listener: s,
                                liveListener: i
                            }),
                            this[n].addEventListener(l[o], i, r);
                return this
            },
            off: function(e, a, t, s) {
                for (var r = e.split(" "), i = 0; i < r.length; i++)
                    for (var n = 0; n < this.length; n++)
                        if ("function" == typeof a || a === !1)
                            "function" == typeof a && (t = arguments[1],
                            s = arguments[2] || !1),
                            this[n].removeEventListener(r[i], t, s);
                        else if (this[n].dom7LiveListeners)
                            for (var o = 0; o < this[n].dom7LiveListeners.length; o++)
                                this[n].dom7LiveListeners[o].listener === t && this[n].removeEventListener(r[i], this[n].dom7LiveListeners[o].liveListener, s);
                return this
            },
            once: function(e, a, t, s) {
                function r(n) {
                    t(n),
                    i.off(e, a, r, s)
                }
                var i = this;
                "function" == typeof a && (a = !1,
                t = arguments[1],
                s = arguments[2]),
                i.on(e, a, r, s)
            },
            trigger: function(a, t) {
                for (var s = 0; s < this.length; s++) {
                    var r;
                    try {
                        r = new e.CustomEvent(a,{
                            detail: t,
                            bubbles: !0,
                            cancelable: !0
                        })
                    } catch (i) {
                        r = document.createEvent("Event"),
                        r.initEvent(a, !0, !0),
                        r.detail = t
                    }
                    this[s].dispatchEvent(r)
                }
                return this
            },
            transitionEnd: function(e) {
                function a(i) {
                    if (i.target === this)
                        for (e.call(this, i),
                        t = 0; t < s.length; t++)
                            r.off(s[t], a)
                }
                var t, s = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], r = this;
                if (e)
                    for (t = 0; t < s.length; t++)
                        r.on(s[t], a);
                return this
            },
            width: function() {
                return this[0] === e ? e.innerWidth : this.length > 0 ? parseFloat(this.css("width")) : null
            },
            outerWidth: function(e) {
                return this.length > 0 ? e ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth : null
            },
            height: function() {
                return this[0] === e ? e.innerHeight : this.length > 0 ? parseFloat(this.css("height")) : null
            },
            outerHeight: function(e) {
                return this.length > 0 ? e ? this[0].offsetHeight + parseFloat(this.css("margin-top")) + parseFloat(this.css("margin-bottom")) : this[0].offsetHeight : null
            },
            offset: function() {
                if (this.length > 0) {
                    var a = this[0]
                      , t = a.getBoundingClientRect()
                      , s = document.body
                      , r = a.clientTop || s.clientTop || 0
                      , i = a.clientLeft || s.clientLeft || 0
                      , n = e.pageYOffset || a.scrollTop
                      , o = e.pageXOffset || a.scrollLeft;
                    return {
                        top: t.top + n - r,
                        left: t.left + o - i
                    }
                }
                return null
            },
            css: function(a, t) {
                var s;
                if (1 === arguments.length) {
                    if ("string" != typeof a) {
                        for (s = 0; s < this.length; s++)
                            for (var r in a)
                                this[s].style[r] = a[r];
                        return this
                    }
                    if (this[0])
                        return e.getComputedStyle(this[0], null).getPropertyValue(a)
                }
                if (2 === arguments.length && "string" == typeof a) {
                    for (s = 0; s < this.length; s++)
                        this[s].style[a] = t;
                    return this
                }
                return this
            },
            each: function(e) {
                for (var a = 0; a < this.length; a++)
                    e.call(this[a], a, this[a]);
                return this
            },
            html: function(e) {
                if ("undefined" == typeof e)
                    return this[0] ? this[0].innerHTML : void 0;
                for (var a = 0; a < this.length; a++)
                    this[a].innerHTML = e;
                return this
            },
            is: function(s) {
                if (!this[0])
                    return !1;
                var r, i;
                if ("string" == typeof s) {
                    var n = this[0];
                    if (n === document)
                        return s === document;
                    if (n === e)
                        return s === e;
                    if (n.matches)
                        return n.matches(s);
                    if (n.webkitMatchesSelector)
                        return n.webkitMatchesSelector(s);
                    if (n.mozMatchesSelector)
                        return n.mozMatchesSelector(s);
                    if (n.msMatchesSelector)
                        return n.msMatchesSelector(s);
                    for (r = t(s),
                    i = 0; i < r.length; i++)
                        if (r[i] === this[0])
                            return !0;
                    return !1
                }
                if (s === document)
                    return this[0] === document;
                if (s === e)
                    return this[0] === e;
                if (s.nodeType || s instanceof a) {
                    for (r = s.nodeType ? [s] : s,
                    i = 0; i < r.length; i++)
                        if (r[i] === this[0])
                            return !0;
                    return !1
                }
                return !1
            },
            index: function() {
                if (this[0]) {
                    for (var e = this[0], a = 0; null !== (e = e.previousSibling); )
                        1 === e.nodeType && a++;
                    return a
                }
                return void 0
            },
            eq: function(e) {
                if ("undefined" == typeof e)
                    return this;
                var t, s = this.length;
                return e > s - 1 ? new a([]) : 0 > e ? (t = s + e,
                new a(0 > t ? [] : [this[t]])) : new a([this[e]])
            },
            append: function(e) {
                var t, s;
                for (t = 0; t < this.length; t++)
                    if ("string" == typeof e) {
                        var r = document.createElement("div");
                        for (r.innerHTML = e; r.firstChild; )
                            this[t].appendChild(r.firstChild)
                    } else if (e instanceof a)
                        for (s = 0; s < e.length; s++)
                            this[t].appendChild(e[s]);
                    else
                        this[t].appendChild(e);
                return this
            },
            prepend: function(e) {
                var t, s;
                for (t = 0; t < this.length; t++)
                    if ("string" == typeof e) {
                        var r = document.createElement("div");
                        for (r.innerHTML = e,
                        s = r.childNodes.length - 1; s >= 0; s--)
                            this[t].insertBefore(r.childNodes[s], this[t].childNodes[0])
                    } else if (e instanceof a)
                        for (s = 0; s < e.length; s++)
                            this[t].insertBefore(e[s], this[t].childNodes[0]);
                    else
                        this[t].insertBefore(e, this[t].childNodes[0]);
                return this
            },
            insertBefore: function(e) {
                for (var a = t(e), s = 0; s < this.length; s++)
                    if (1 === a.length)
                        a[0].parentNode.insertBefore(this[s], a[0]);
                    else if (a.length > 1)
                        for (var r = 0; r < a.length; r++)
                            a[r].parentNode.insertBefore(this[s].cloneNode(!0), a[r])
            },
            insertAfter: function(e) {
                for (var a = t(e), s = 0; s < this.length; s++)
                    if (1 === a.length)
                        a[0].parentNode.insertBefore(this[s], a[0].nextSibling);
                    else if (a.length > 1)
                        for (var r = 0; r < a.length; r++)
                            a[r].parentNode.insertBefore(this[s].cloneNode(!0), a[r].nextSibling)
            },
            next: function(e) {
                return new a(this.length > 0 ? e ? this[0].nextElementSibling && t(this[0].nextElementSibling).is(e) ? [this[0].nextElementSibling] : [] : this[0].nextElementSibling ? [this[0].nextElementSibling] : [] : [])
            },
            nextAll: function(e) {
                var s = []
                  , r = this[0];
                if (!r)
                    return new a([]);
                for (; r.nextElementSibling; ) {
                    var i = r.nextElementSibling;
                    e ? t(i).is(e) && s.push(i) : s.push(i),
                    r = i
                }
                return new a(s)
            },
            prev: function(e) {
                return new a(this.length > 0 ? e ? this[0].previousElementSibling && t(this[0].previousElementSibling).is(e) ? [this[0].previousElementSibling] : [] : this[0].previousElementSibling ? [this[0].previousElementSibling] : [] : []);
            },
            prevAll: function(e) {
                var s = []
                  , r = this[0];
                if (!r)
                    return new a([]);
                for (; r.previousElementSibling; ) {
                    var i = r.previousElementSibling;
                    e ? t(i).is(e) && s.push(i) : s.push(i),
                    r = i
                }
                return new a(s)
            },
            parent: function(e) {
                for (var a = [], s = 0; s < this.length; s++)
                    e ? t(this[s].parentNode).is(e) && a.push(this[s].parentNode) : a.push(this[s].parentNode);
                return t(t.unique(a))
            },
            parents: function(e) {
                for (var a = [], s = 0; s < this.length; s++)
                    for (var r = this[s].parentNode; r; )
                        e ? t(r).is(e) && a.push(r) : a.push(r),
                        r = r.parentNode;
                return t(t.unique(a))
            },
            find: function(e) {
                for (var t = [], s = 0; s < this.length; s++)
                    for (var r = this[s].querySelectorAll(e), i = 0; i < r.length; i++)
                        t.push(r[i]);
                return new a(t)
            },
            children: function(e) {
                for (var s = [], r = 0; r < this.length; r++)
                    for (var i = this[r].childNodes, n = 0; n < i.length; n++)
                        e ? 1 === i[n].nodeType && t(i[n]).is(e) && s.push(i[n]) : 1 === i[n].nodeType && s.push(i[n]);
                return new a(t.unique(s))
            },
            remove: function() {
                for (var e = 0; e < this.length; e++)
                    this[e].parentNode && this[e].parentNode.removeChild(this[e]);
                return this
            },
            add: function() {
                var e, a, s = this;
                for (e = 0; e < arguments.length; e++) {
                    var r = t(arguments[e]);
                    for (a = 0; a < r.length; a++)
                        s[s.length] = r[a],
                        s.length++
                }
                return s
            }
        },
        t.fn = a.prototype,
        t.unique = function(e) {
            for (var a = [], t = 0; t < e.length; t++)
                -1 === a.indexOf(e[t]) && a.push(e[t]);
            return a
        }
        ,
        t
    }()), i = ["jQuery", "Zepto", "Dom7"], n = 0; n < i.length; n++)
        e[i[n]] && a(e[i[n]]);
    var o;
    return o = "undefined" == typeof r ? e.Dom7 || e.Zepto || e.jQuery : r,
    o && ("transitionEnd"in o.fn || (o.fn.transitionEnd = function(e) {
        function a(i) {
            if (i.target === this)
                for (e.call(this, i),
                t = 0; t < s.length; t++)
                    r.off(s[t], a)
        }
        var t, s = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], r = this;
        if (e)
            for (t = 0; t < s.length; t++)
                r.on(s[t], a);
        return this
    }
    ),
    "transform"in o.fn || (o.fn.transform = function(e) {
        for (var a = 0; a < this.length; a++) {
            var t = this[a].style;
            t.webkitTransform = t.MsTransform = t.msTransform = t.MozTransform = t.OTransform = t.transform = e
        }
        return this
    }
    ),
    "transition"in o.fn || (o.fn.transition = function(e) {
        "string" != typeof e && (e += "ms");
        for (var a = 0; a < this.length; a++) {
            var t = this[a].style;
            t.webkitTransitionDuration = t.MsTransitionDuration = t.msTransitionDuration = t.MozTransitionDuration = t.OTransitionDuration = t.transitionDuration = e
        }
        return this
    }
    )),
    s
});
!function(t, e) {
    "function" == typeof define ? define("newmsgnum/1.0.0/newmsgnum", [], function() {
        return e(t)
    }) : "object" == typeof exports ? module.exports = e(t) : t.NewMsgNum = e(t)
}(window, function(t) {
    function e(e, s, i) {
        "undefined" == typeof i && (i = ""),
        this.storage = t.localStorage;
        try {
            this.storage.setItem("test", "ok")
        } catch (n) {
            return
        }
        this.storage.removeItem("test"),
        this.storage_prefix = i,
        this.messageid = null == this.storage.getItem("chat_messageid") ? 0 : this.storage.getItem("chat_messageid"),
        this.new_msg_num = 0,
        this.mainURL = e,
        this.city = s,
        this.init()
    }
    var s = t.jQuery;
    return e.prototype.init = function() {
        if (this.storage)
            for (var t = 0, e = this.storage.length; e > t; t++) {
                var s = this.storage.key(t)
                  , i = this.storage.getItem(s);
                if (s.indexOf("_message") > 0 && "chat_messageid" != s)
                    for (var n = i.split(";"), g = n.length, o = 0; g > o; o++) {
                        var a = n[o].split(",");
                        "r" == a[0] && "0" == a[1] && ("" == this.storage_prefix ? this.new_msg_num++ : 0 == s.indexOf(this.storage_prefix) && this.new_msg_num++)
                    }
            }
    }
    ,
    e.prototype.getMsg = function(e) {
        if (this.storage) {
            var i = this;
            this.messageid = null == this.storage.getItem("chat_messageid") ? 0 : this.storage.getItem("chat_messageid"),
            void 0 === s && (s = t.$),
            void 0 !== s && s.ajax({
                url: "/im/?a=ajaxOfflineMsg",
                timeout: 5e3,
                dataType: "json",
                success: function(t) {
                    if (null != t && t.length > 0)
                        for (var s = 0, n = t.length; n > s; s++) {
                            var g = t[s].messageid
                              , o = t[s].form
                              , a = t[s].message
                              , r = t[s].agentname
                              , m = t[s].messagetime;
                            i.storageMsg(g, o, a, r, m)
                        }
                    i.new_msg_num > 99 && (i.new_msg_num = 99),
                    i.new_msg_num > 0 && (e.html(i.new_msg_num),
                    e.css("display", "inline-block")),
                    setTimeout(function() {
                        i.getMsg(e)
                    }, 6e4)
                },
                error: function() {
                    setTimeout(function() {
                        i.getMsg(e)
                    }, 6e4)
                }
            })
        }
    }
    ,
    e.prototype.storageMsg = function(t, e, s, i, n) {
        if (this.storage) {
            var g = e
              , o = g + "_message";
            g = g.replace("\u5ba2\u6237", "");
            var a = n.substring(5, 16)
              , r = "r,0," + a + "," + encodeURIComponent(s) + "," + this.city;
            if (null == this.storage.getItem(o) || "" == this.storage.getItem(o))
                this.storage.setItem(o, r);
            else {
                this.storage.getItem(o);
                this.storage.setItem(o, r + ";" + this.storage.getItem(o))
            }
            this.storage.setItem("chat_messageid", t),
            this.new_msg_num++
        }
    }
    ,
    e
});
define("modules/esf/newindex", ["jquery", "modules/esf/yhxw", "slideFilterBox/1.0.0/slideFilterBox", "iscroll/2.0.0/iscroll-lite", "hslider/1.0.0/hslider"], function(e, t, a) {
    "use strict";
    a.exports = function() {
        function t(e) {
            e.preventDefault()
        }
        function a() {
            document.addEventListener("touchmove", t)
        }
        function i() {
            document.removeEventListener("touchmove", t)
        }
        function s(e, t, a, i, s, r, o, d) {
            m.ajax({
                url: v.mainSite + "data.d?m=houseinfotj&city=" + e + "&housetype=" + t + "&houseid=" + a + "&newcode=" + i + "&type=" + s + "&housefrom=" + r + "&channel=" + o + "&agentid=" + d,
                async: !0
            })
        }
        function r(e) {
            e.hasClass("active") ? (C.addClass("tabSX"),
            S.show(),
            a()) : (C.removeClass("tabSX"),
            S.hide(),
            i())
        }
        function o(e) {
            var t = e;
            e.is("dl") && (t = e.parent());
            var a = e.find("dd.active").eq(0).prevAll().length;
            b && a > 0 && b.to("#" + t.attr("id"), 43 * -a)
        }
        function d(e, t, a, i) {
            var s, r, o, d, n;
            if (e.hasClass("active"))
                if (e.removeClass("active"),
                "\u591a\u9009" === i) {
                    for (s = e.parents(".chose-item"),
                    r = s.find("a"),
                    o = r.length,
                    d = [],
                    n = 0; n < o; n++)
                        r.eq(n).hasClass("active") && d.push(r.eq(n).attr("data-id"));
                    N[a + "Id"] = d
                } else
                    N[a + "Id"] = "";
            else if ("\u5355\u9009" === i)
                m("#" + t).find("a").removeClass("active"),
                e.addClass("active"),
                N[a + "Id"] = e.attr("data-id");
            else {
                s = e.parents(".chose-item"),
                r = s.find("a"),
                o = r.length,
                d = [],
                e.addClass("active");
                for (var c = 0; c < o; c++)
                    r.eq(c).hasClass("active") && d.push(r.eq(c).attr("data-id"));
                N[a + "Id"] = d
            }
        }
        function n(e) {
            var t, a = m("#" + e + "min").find("i").text(), i = m("#" + e + "max").find("i").text();
            a = "\u4e0d\u9650" === a ? "0" : a,
            i = "\u4e0d\u9650" === i ? "0" : i;
            var s = /^\d+$/;
            return s.test(a) === !1 || s.test(i) === !1 ? (alert("\u8bf7\u586b\u5199\u6709\u6548\u7684\u6574\u6570\uff01"),
            !1) : (t = v.esfSite + "?c=esf&a=index&city=" + v.city + "&subway_id=" + N.subwayId + "&station_id=" + N.stationId + "&district=" + N.districtId + "&comarea=" + N.comareaId,
            t += "&orderby=" + N.orderbyId + "&room=" + N.roomId + "&purpose=" + N.purposeId + "&equipment=" + N.equipmentId,
            t += "&buildclass=" + N.buildclassId + "&tags=" + N.tagsId + "&age=" + N.ageId + "&propertysubtype=",
            t += N.propertysubtypeId + "&keyword=" + v.keyword,
            "price" === e ? t += "&price=" + a + "," + i + "&area=" + N.areaId : "area" === e && (t += "&price=" + N.priceId + "&area=" + a + "," + i),
            "ds" === v.cstype && (t += "&cstype=ds"),
            "esfzy" === v.type && (t += "&type=esfzy"),
            "tab" === v.hf && (t += "&hf=tab"),
            v.isspecialprice && (t += "&tjftype=esf"),
            v.jhList && (t += "&jhtype=esf"),
            "xiaoqu" === v.src && (t += "&src=" + v.src + "&projcodes=" + v.projcodes),
            window.location = t,
            !0)
        }
        function c() {
            if (m("#search_category").find("a.active").html() === v.purpose) {
                N = {
                    districtId: v.district || "",
                    comareaId: v.comarea || "",
                    priceId: v.price.replace("^", ",") || "",
                    roomId: v.room || "",
                    tagsId: v.tags || "",
                    orderbyId: v.orderby || "",
                    ageId: v.age || "",
                    areaId: v.area.replace("^", ",") || "",
                    buildclassId: v.buildclass || "",
                    equipmentId: v.equipment || "",
                    propertysubtypeId: v.propertysubtype || "",
                    floorId: v.floor || "",
                    subwayId: v.subway_id || "",
                    stationId: v.station_id || "",
                    purposeId: v.purpose || "",
                    towardsId: X || "",
                    keyword: v.keyword || "",
                    projcodes: v.projcodes || ""
                };
                for (var e = 0; e < K.length; e++)
                    for (var t = K.eq(e), a = t.attr("id"), i = t.find("a"), s = 0; s < i.length; s++)
                        "true" === J[a][s] ? i.eq(s).addClass("active") : i.eq(s).removeClass("active")
            }
        }
        function l(e, t) {
            m(e).find(".flexbox").eq(0).find("a").eq(t).addClass("active")
        }
        function p(e, t, a, i, s, r, o, d, n, c, l, p) {
            v.localStorage && window.localStorage.setItem(String(n), encodeURIComponent(c) + ";" + p + ";" + encodeURIComponent(v.district + "\u7684")),
            m.ajax({
                url: v.mainSite + "data.d?m=houseinfotj&city=" + t + "&housetype=" + a + "&houseid=" + i + "&newcode=" + s + "&type=" + r + "&phone=" + o + "&channel=" + d + "&agentid=" + l,
                async: !1
            }),
            setTimeout(function() {
                var e = v.mainSite + "chat.d?m=chat&username=" + n + "&city=" + t;
                window.location = e
            }, 500)
        }
        function h(e, t, a, i, s, r, o, d) {
            m.ajax({
                url: v.mainSite + "data.d?m=houseinfotj&city=" + e + "&housetype=" + t + "&houseid=" + a + "&newcode=" + i + "&type=" + s + "&phone=" + r + "&channel=" + o + "&agentid=" + d,
                async: !0
            }),
            m.ajax({
                url: v.mainSite + "data.d?m=tel&city=" + e + "&housetype=" + t + "&id=" + a + "&phone=" + r,
                async: !0
            })
        }
        function f() {
            var e = m("#district")
              , t = m("#railway");
            if (y = [],
            e.hasClass("active"))
                m("#district_section").find("dd").each(function() {
                    var e = m(this);
                    if (e.hasClass("active")) {
                        var t = e.children().attr("data-id");
                        if (t) {
                            y.districtId = t;
                            var a = ""
                              , i = m("#comarea_dl_" + t);
                            i && i.find("dd").each(function() {
                                var e = m(this);
                                if (e.hasClass("active")) {
                                    if ("all" === e.children().attr("data-id"))
                                        return a = "",
                                        !1;
                                    a += a ? "," + e.children().attr("data-id") : e.children().attr("data-id")
                                }
                            })
                        }
                        return y.comareaId = a,
                        !1
                    }
                });
            else {
                if (!t.hasClass("active"))
                    return !1;
                m("#railway_section").find("dd").each(function() {
                    var e = m(this);
                    if (e.hasClass("active")) {
                        var t = e.children().attr("data-id");
                        if (t) {
                            y.railwayId = t;
                            var a = ""
                              , i = m("#station_dl_" + t);
                            i && i.find("dd").each(function() {
                                var e = m(this);
                                if (e.hasClass("active")) {
                                    if ("all" === e.children().attr("data-id"))
                                        return a = "",
                                        !1;
                                    a += a ? "," + e.children().attr("data-id") : e.children().attr("data-id")
                                }
                            })
                        }
                        return y.stationId = a,
                        !1
                    }
                })
            }
        }
        var u, y, m = e("jquery"), v = seajs.data.vars, g = e("modules/esf/yhxw"), b = e("slideFilterBox/1.0.0/slideFilterBox"), w = e("iscroll/2.0.0/iscroll-lite"), I = e("hslider/1.0.0/hslider"), _ = m("#position"), C = m("#tabSX"), j = m("#district_section"), x = m("#railway_section"), q = m("#comarea_section"), k = m("#station_section"), P = m("#searchnew"), S = (m("#sec_all"),
        m("#tabFloat")), O = m(".chose-item");
        g({
            type: 1,
            pageId: "mesflist"
        });
        var z = e("swipe/3.10/swiper");
        m(".moreChoo").css("padding-bottom", "20px");
        var F = m("#index_adhouse");
        if (F.length) {
            var L = F.attr("data-adshowtj")
              , B = L.split(",");
            s(B[0], B[1], B[2], B[3], B[4], B[5], B[6], B[7])
        }
        F.on("click", function() {
            var e = m(this).attr("data-adclicktj")
              , t = e.split(",");
            s(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7])
        });
        var A = x.find("dd.active").index()
          , T = j.find("dd.active").index();
        if (_.on("click", function() {
            m("#contFlexbox").is(":hidden") && (x.find("dd").eq(A).addClass("active").siblings().removeClass("active"),
            j.find("dd").eq(T).addClass("active").siblings().removeClass("active"))
        }),
        O.each(function(e, t) {
            var a = m(t)
              , i = a.find("a").index(a.find("a.active"));
            i > 3 && a.find(".flexbox").show().end().prev().find("a").removeClass("arr-down").addClass("arr-up")
        }),
        "apphjy" == v.utm_source || "waphjy" == v.utm_source) {
            var D = m(".img").find(".lazy");
            if (D.length) {
                var U = m(document).width();
                U = U > 640 ? 640 : U,
                D.css("height", .75 * U)
            }
        }
        e.async("lazyload/1.9.1/lazyload", function() {
            m("img.lazyload").lazyload({
                event: "scroll touchmove mousemove"
            }),
            m("img.lazy").lazyload()
        });
        var X = v.towards
          , N = {
            districtId: v.district || "",
            comareaId: v.comarea || "",
            priceId: v.price.replace("^", ",") || "",
            roomId: v.room || "",
            tagsId: v.tags || "",
            orderbyId: v.orderby || "",
            ageId: v.age || "",
            areaId: v.area.replace("^", ",") || "",
            buildclassId: v.buildclass || "",
            equipmentId: v.equipment || "",
            propertysubtypeId: v.propertysubtype || "",
            floorId: v.floor || "",
            subwayId: v.subway_id || "",
            stationId: v.station_id || "",
            purposeId: v.purpose || "",
            towardsId: X || "",
            keyword: v.keyword || "",
            projcodes: v.projcodes || ""
        };
        S.click(function() {
            if (m("#contFlexbox").is(":visible")) {
                f();
                var e, t = v.purpose;
                e = "\u5546\u94fa" === t ? v.mainSite + "esf_sp/" + v.city : "\u522b\u5885" === t ? v.mainSite + "esf_bs/" + v.city : "\u5199\u5b57\u697c" === v.purpose ? v.mainSite + "esf_xzl/" + v.city : v.esfSite + v.city,
                y.districtId && (e = e + "_" + y.districtId),
                y.comareaId && (e = e + "_b" + y.comareaId),
                "\u522b\u5885" !== t && y.railwayId && (e = e + "_j" + y.railwayId),
                "\u522b\u5885" !== t && y.stationId && (e = e + "_k" + y.stationId),
                e += "/";
                var a = !1;
                return v.price && (e = e + "m" + v.price.replace("^", ","),
                a = !0),
                v.room && (e = e + "h" + v.room,
                a = !0),
                v.area && (e = e + "a" + v.area.replace("^", ","),
                a = !0),
                v.tags && (e = e + "c" + v.tags,
                a = !0),
                v.floor && (e = e + "s" + v.floor,
                a = !0),
                v.equipment && (e = e + "d" + v.equipment,
                a = !0),
                v.orderby && (e = e + "x" + v.orderby,
                a = !0),
                v.age && (e = e + "f" + v.age,
                a = !0),
                v.towards && (e = e + "t" + v.towards,
                a = !0),
                a && (e += "/"),
                v.hasOwnProperty("zttype") && v.zttype.length && (e = e + "&zttype=" + v.zttype),
                v.hasOwnProperty("jituanid") && v.jituanid.length && (e = e + "&jituanid=" + v.jituanid),
                v.hasOwnProperty("cstype") && "ds" === v.cstype && (e += "&cstype=ds"),
                v.hasOwnProperty("type") && "esfzy" === v.type && (e += "&type=esfzy"),
                v.hasOwnProperty("hf") && "tab" === v.hf && (e += "&hf=tab"),
                v.hasOwnProperty("isspecialprice") && "1" === v.isspecialprice && (e += "&tjftype=esf"),
                v.hasOwnProperty("jhList") && "1" === v.jhList && (e += "&jhtype=esf"),
                v.hasOwnProperty("utm_source") && v.utm_source.length && (e = e + "&utm_source=" + v.utm_source),
                v.hasOwnProperty("schooltype") && v.schooltype.length && (e = e + "&schooltype=" + v.schooltype),
                v.hasOwnProperty("utm_term") && v.utm_term.length && (e = e + "&utm_term=" + v.utm_term),
                "xiaoqu" === v.src && (e = e + "&src=" + v.src + "&purpose=" + v.purpose),
                v.projcodes && (e = e + "&projcodes=" + v.projcodes),
                "\u522b\u5885" === t && v.buildclass && (e = e + "&buildclass=" + v.buildclass),
                "\u5546\u94fa" !== t && "\u5199\u5b57\u697c" !== t || !v.propertysubtype || (e = e + "&propertysubtype=" + v.propertysubtype,
                a = !0),
                e = e.replace("/&", "/?"),
                window.location = e,
                !1
            }
            var s = m(".column3:visible")
              , r = s.find(".active");
            if (s.length && !r.length) {
                var o = s.find("a:first")[0];
                window.location.href = o.href
            }
            C.removeClass("tabSX"),
            C.find(".lbTab > div").hide(),
            C.find(".lbTab > ul > li").removeClass("active"),
            m(this).hide(),
            i()
        }),
        m("#all").on("click", function() {
            c()
        }),
        C.find(".lbTab > ul > li").not("#position").on("click", function() {
            m("#contFlexbox").hide();
            var e = null
              , t = m(this)
              , a = t.attr("id")
              , i = m("#" + a + "_contFlexbox");
            if (t.toggleClass("active").siblings().removeClass("active"),
            i.toggle().siblings().not("ul").hide(),
            r(m(this)),
            "none" !== i.css("display")) {
                var s = i.children().first().attr("id");
                b.refresh("#" + s)
            }
            var o = m("#" + a + "Hslider");
            if (!e && i.find(o).length > 0) {
                e = new I({
                    max: o.attr("max"),
                    min: o.attr("min"),
                    step: 20,
                    oParent: o,
                    leftSign: o.find("div.active").eq(0),
                    rightSign: o.find("div.active").eq(1),
                    range: o.find("span")
                });
                var d = m(".in-qj");
                d.length > 0 && d.find("div").on("touchstart", function() {
                    m(this).addClass("hover"),
                    m(this).siblings().not("span").removeClass("hover")
                }).on("click", function() {
                    m(this).removeClass("hover")
                })
            }
            if (e && i.find(o).length > 0) {
                var n = o.attr("id")
                  , c = [];
                v.area && v.area.length && n.indexOf("area") > -1 ? c = v.area.split("^") : v.price && v.price.length && n.indexOf("price") > -1 && (c = v.price.split("^")),
                c.length > 1 && e._initPos(parseInt(c[0]), parseInt(c[1]))
            }
        }),
        _.on("click", function() {
            var e = m(this)
              , t = m("#contFlexbox");
            if (e.toggleClass("active").siblings().removeClass("active"),
            t.children().hide().end().siblings().not("ul").hide(),
            r(m(this)),
            t.toggle(),
            t.parent().siblings("div").hide(),
            "none" !== t.css("display") && t.parent().show(),
            t.is(":visible"))
                if (m("#confirmBtn").show(),
                P.toggle(),
                P.is(":visible") && b.refresh("#searchnew"),
                v.subway_id && v.subway_id.length > 0) {
                    if (m("#railway").addClass("active").siblings().removeClass("active"),
                    x.show(),
                    b.refresh("#railway_section"),
                    o(x),
                    v.station_id && v.station_id.length > 0 || !v.station_id && v.subway_id) {
                        k.show().find("dl").hide();
                        var a = m("#station_dl_" + v.subway_id);
                        a.show(),
                        b.refresh("#station_section"),
                        o(a)
                    }
                } else {
                    var i = m("#district");
                    i.addClass("active").siblings().removeClass("active"),
                    j.nextAll().hide().end().show(),
                    b.refresh("#district_section"),
                    (v.comarea && "" !== v.comarea || !v.comarea && v.district_name) && (q.show().find("dl").hide(),
                    m("#comarea_dl_" + v.dis_id).show(),
                    b.refresh("#comarea_section"))
                }
        }),
        P.find("dd").not("#school").on("click", function() {
            var e = m(this)
              , t = "#" + e.attr("id") + "_section";
            e.addClass("active").siblings().removeClass("active"),
            m(t).show().siblings().not("#searchnew").hide(),
            b.refresh(t),
            o(m(t))
        }),
        j.on("click", "dd", function() {
            var e = m(this);
            u = e.find("a").attr("data-id"),
            e.addClass("active").siblings().removeClass("active"),
            "" !== u && (q.show().find("dl").hide(),
            m("#comarea_dl_" + u).show(),
            b.refresh("#comarea_section"))
        }),
        x.on("click", "dd", function() {
            var e = m(this)
              , t = e.find("a").attr("data-id");
            if (e.addClass("active").siblings().removeClass("active"),
            "" !== t) {
                k.show().find("dl").hide();
                var a = m("#station_dl_" + t);
                a.show(),
                b.refresh("#station_section"),
                o(a)
            }
        });
        var E = m("#all_contFlexbox")
          , R = E.html()
          , Y = ""
          , M = "";
        E.on("click", ".chose-item a", function() {
            var e = m(this)
              , t = e.parent().parent().attr("id")
              , a = t.lastIndexOf("_")
              , i = t.slice(a + 1)
              , s = m(this).html();
            if ("\u4f4f\u5b85" === s || "\u522b\u5885" === s) {
                e.addClass("active").siblings().removeClass("active");
                var r, o = v.esfSite + "?c=esf&a=ajaxgetVmore";
                if ("\u4f4f\u5b85" === v.purpose) {
                    if ("" !== Y)
                        return "\u4f4f\u5b85" === s ? (E.html(R),
                        c(),
                        m("#search_category").find("a").eq(0).addClass("active").siblings().removeClass("active")) : (N.tagsId = "",
                        N.orderbyId = "",
                        N.buildclassId = "",
                        N.equipmentId = "",
                        N.propertysubtypeId = "",
                        N.floorId = "",
                        N.ageId = "",
                        N.towardsId = "",
                        0 === m("#searchArea").length && (N.areaId = ""),
                        0 === m("#searchPrice").length && (N.priceId = ""),
                        E.html(Y),
                        m("#search_category").find("a").eq(1).addClass("active").siblings().removeClass("active")),
                        m(".moreChoo").css("padding-bottom", "20px"),
                        new w("#sec_all",{
                            scrollY: !0
                        }),
                        !1;
                    r = "V"
                } else {
                    if ("" !== M)
                        return "\u522b\u5885" === s ? (E.html(R),
                        c(),
                        m("#search_category").find("a").eq(1).addClass("active").siblings().removeClass("active")) : (N.tagsId = "",
                        N.orderbyId = "",
                        N.buildclassId = "",
                        N.equipmentId = "",
                        N.propertysubtypeId = "",
                        N.floorId = "",
                        N.ageId = "",
                        N.towardsId = "",
                        0 === m("#searchArea").length && (N.areaId = ""),
                        0 === m("#searchPrice").length && (N.priceId = ""),
                        E.html(M),
                        m("#search_category").find("a").eq(0).addClass("active").siblings().removeClass("active")),
                        m(".moreChoo").css("padding-bottom", "20px"),
                        new w("#sec_all",{
                            scrollY: !0
                        }),
                        !1;
                    r = "R"
                }
                var n = {
                    purpose_: s,
                    purpose_operastion: r,
                    jhflag: v.jhflag,
                    jhList: v.jhList
                };
                return ("" === Y && "\u4f4f\u5b85" === v.purpose || "" === M && "\u522b\u5885" === v.purpose) && (N.tagsId = "",
                N.orderbyId = "",
                N.buildclassId = "",
                N.equipmentId = "",
                N.propertysubtypeId = "",
                N.floorId = "",
                N.ageId = "",
                N.towardsId = "",
                0 === m("#searchArea").length && (N.areaId = ""),
                0 === m("#searchPrice").length && (N.priceId = ""),
                m.ajax({
                    url: o,
                    data: n,
                    success: function(e) {
                        "\u4f4f\u5b85" === v.purpose ? Y = e : M = e,
                        E.html(e),
                        m(".moreChoo").css("padding-bottom", "20px"),
                        "\u4f4f\u5b85" === s ? m("#search_category").find("a").eq(0).addClass("active") : m("#search_category").find("a").eq(1).addClass("active"),
                        new w("#sec_all",{
                            scrollY: !0
                        })
                    }
                })),
                !1
            }
            "\u4f4f\u5b85" === v.purpose ? "search_orderby" === t || "search_equipment" === t ? d(e, t, i, "\u5355\u9009") : d(e, t, i, "\u591a\u9009") : "\u522b\u5885" === v.purpose ? "search_orderby" === t || "search_buildclass" === t || "search_equipment" === t ? d(e, t, i, "\u5355\u9009") : d(e, t, i, "\u591a\u9009") : "\u5199\u5b57\u697c" !== v.purpose && "\u5546\u94fa" !== v.purpose || ("search_tags" === t ? d(e, t, i, "\u591a\u9009") : d(e, t, i, "\u5355\u9009"))
        });
        var V = m("#drag");
        V.length > 0 && e.async("loadMore/1.0.0/loadMore", function(e) {
            e({
                url: v.esfSite + v.nowUrl + "c=esf&a=ajaxGetList&city=" + v.city,
                total: v.total,
                pagesize: v.pagesize,
                pageNumber: "10",
                contentID: "#content",
                moreBtnID: "#drag",
                loadPromptID: "#loading"
            })
        });
        var G = m(".tjf-list");
        if (G.length) {
            var H = G.find("li")
              , $ = H.length;
            G.find("ul").width(H.eq(0).width() * $ + 15 * $),
            new w(".tjf-list",{
                scrollX: !0
            })
        }
        m("#priceFormatUrl,#areaFormatUrl").on("click", function(e) {
            var t = m(this);
            n(t.attr("id").replace("FormatUrl", "")),
            e.stopPropagation()
        });
        for (var J = {}, K = E.find(".chose-item"), Q = 0; Q < K.length; Q++) {
            for (var W = K.eq(Q), Z = W.attr("id"), ee = W.find("a"), te = [], ae = 0; ae < ee.length; ae++)
                ee.eq(ae).hasClass("active") ? te.push("true") : te.push("false");
            J[Z] = te
        }
        E.on("click", ".sx", function() {
            var e, t = E.find("#search_category").find("a.active").html();
            if (e = "\u5546\u94fa" === t ? v.mainSite + "esf_sp/" + v.city : "\u522b\u5885" === t ? v.mainSite + "esf_bs/" + v.city : "\u5199\u5b57\u697c" === v.purpose ? v.mainSite + "esf_xzl/" + v.city : v.esfSite + v.city,
            "\u522b\u5885" === E.find("#search_category").find("a.active").html()) {
                N.districtId.length > 0 && (e = e + "_" + N.districtId),
                N.comareaId.length > 0 && (e = e + "_b" + N.comareaId),
                N.purposeId = "\u522b\u5885",
                e += "/?c=esf&a=index";
                for (var a in N)
                    if (N.hasOwnProperty(a) && N[a].length > 0) {
                        var i;
                        switch (a) {
                        case "subwayId":
                            i = "subway_id";
                            break;
                        case "stationId":
                            i = "station_id";
                            break;
                        default:
                            i = a.replace("Id", "")
                        }
                        "comarea" === i && "district" === i || (e += "object" == typeof N[a] ? "&" + i + "=" + N[a].join("_") : "&" + i + "=" + N[a])
                    }
                "esfzy" === v.type && (e += "&type=esfzy",
                "tab" === v.hf && (e += "&hf=tab"))
            } else {
                "\u522b\u5885" === N.purposeId && (N.purposeId = "\u4f4f\u5b85"),
                N.districtId.length > 0 && (e = e + "_" + N.districtId),
                N.comareaId.length > 0 && (e = e + "_b" + N.comareaId),
                e += "/?c=esf&a=index";
                for (var a in N)
                    if (N.hasOwnProperty(a) && N[a].length > 0) {
                        var i;
                        switch (a) {
                        case "subwayId":
                            i = "subway_id";
                            break;
                        case "stationId":
                            i = "station_id";
                            break;
                        default:
                            i = a.replace("Id", "")
                        }
                        "comarea" === i && "district" === i || (e += "object" == typeof N[a] ? "&" + i + "=" + N[a].join("_") : "&" + i + "=" + N[a])
                    }
                v.hasOwnProperty("zttype") && v.zttype.length && (e = e + "&zttype=" + v.zttype),
                v.hasOwnProperty("jituanid") && v.jituanid.length && (e = e + "&jituanid=" + v.jituanid)
            }
            v.hasOwnProperty("cstype") && "ds" === v.cstype && (e += "&cstype=ds"),
            v.hasOwnProperty("type") && "esfzy" === v.type && (e += "&type=esfzy"),
            v.hasOwnProperty("hf") && "tab" === v.hf && (e += "&hf=tab"),
            v.hasOwnProperty("isspecialprice") && "1" === v.isspecialprice && (e += "&tjftype=esf"),
            v.hasOwnProperty("jhList") && "1" === v.jhList && (e += "&jhtype=esf"),
            v.hasOwnProperty("utm_source") && v.utm_source.length && (e = e + "&utm_source=" + v.utm_source),
            v.hasOwnProperty("schooltype") && v.schooltype.length && (e = e + "&schooltype=" + v.schooltype),
            v.hasOwnProperty("utm_term") && v.utm_term.length && (e = e + "&utm_term=" + v.utm_term),
            "xiaoqu" === v.src && (e = e + "&src=" + v.src + "&projcodes=" + v.projcodes),
            window.location = e
        }),
        E.on("click", ".cz", function() {
            N.tagsId = "",
            N.orderbyId = "",
            N.buildclassId = "",
            N.equipmentId = "",
            N.propertysubtypeId = "",
            N.floorId = "",
            N.ageId = "",
            N.towardsId = "",
            0 === m("#searchArea").length && (N.areaId = ""),
            0 === m("#searchPrice").length && (N.priceId = "");
            var e = ["#sortFir"];
            O = E.find(".chose-item"),
            l(e),
            E.find("#all_category").find("span").html("\u4f4f\u5b85"),
            O.find("a").removeClass("active"),
            l("#search_orderby", 0),
            "\u4f4f\u5b85" === v.purpose ? l("#search_category", 0) : "\u522b\u5885" === v.purpose && l("#search_category", 1)
        });
        var ie = m(".tabNav");
        if (ie.find("a").length > 0) {
            var se = m("#bottonDiv a").eq(0).attr("id")
              , re = m("#bottonDiv")
              , oe = m(".typeListB");
            m("." + se).show(),
            re.find("a").eq(0).addClass("active"),
            re.on("click", "a", function() {
                var e = m(this);
                re.find("a").removeClass("active"),
                e.addClass("active"),
                oe.hide(),
                m("." + e.attr("id")).show(),
                e.attr("canSwiper") || (e.attr("canSwiper", !0),
                de(e))
            });
            var de = function(e) {
                new z("." + e.attr("id"),{
                    speed: 500,
                    loop: !1,
                    onSlideChangeStart: function(t) {
                        var a = m("." + e.attr("id")).find(".pointBox span");
                        a.removeClass("cur").eq(t.activeIndex).addClass("cur")
                    }
                })
            };
            de(m("#" + se))
        }
        var ne = 114;
        m(window).on("scroll", function(e) {
            if ("none" === m("#nav").css("display") && C.hasClass("tabSx") === !1) {
                var t = document.body.scrollTop || document.documentElement.scrollTop;
                t > ne || t < 114 ? C.removeClass("tabFixed") : C.addClass("tabFixed"),
                ne = t
            }
            e.stopPropagation()
        }),
        m(".call").on("click", function() {
            var e = m(this).attr("data-teltj")
              , t = e.split(",");
            h(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7])
        }),
        m(".mes").on("click", function() {
            var e = m(this).attr("data-chat")
              , t = e.split(",");
            p(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8], t[9], t[10], t[12])
        });
        var ce = m(".more-list-other");
        ce.on("click", function() {
            m(".floatAlert").show()
        }),
        m(".floatAlert").on("click", function() {
            m(".floatAlert").hide()
        });
        var le = !0
          , pe = ""
          , he = m("#content");
        he.on("click", "a", function() {
            if (!le)
                return window.location.href = pe,
                !1
        });
        var fe = m(".sf-maskFixed");
        if (m(".paixu").click(function() {
            fe.show(),
            a(),
            fe.is(":visible") && b.refresh("#orderNew")
        }),
        m("#orderNew").on("click", "li", function() {
            m(".houseList").find("a").addClass("noClick"),
            le = !1,
            pe = m(this).find("a").attr("href"),
            window.location.href = pe,
            setTimeout(function() {
                le = !0
            }, 300)
        }),
        fe.on("click", function() {
            return m(this).hide(),
            i(),
            !1
        }),
        v.jhList && setTimeout(function() {
            m(".ts-box").fadeOut()
        }, 3e3),
        v.localStorage)
            var ue = v.localStorage.getItem("mengceng");
        if (v.jhflag && !v.jhList && !ue) {
            var ye = m(".list-Tab").offset().top;
            if (ye = parseInt(ye) - 22,
            m(".ts-w").css({
                top: ye
            }),
            m(".jh-tsBox").show(),
            v.localStorage)
                var ue = v.localStorage.setItem("mengceng", "1")
        }
        m(".ts-btn").on("click", function() {
            m(".jh-tsBox").hide()
        }),
        m(".stationClick, .comareaClick").on("click", function() {
            var e = m(this).parent();
            "all" === e.children().attr("data-id") ? e.siblings().removeClass("active") : e.siblings().eq(0).removeClass("active"),
            e.hasClass("active") ? e.removeClass("active") : e.addClass("active"),
            e.parent().siblings().children().removeClass("active")
        }),
        m("#qktj").on("click", function() {
            x.find("dd").removeClass("active"),
            k.find("dd").removeClass("active"),
            j.find("dd").removeClass("active"),
            q.find("dd").removeClass("active")
        }),
        m("#qrtj").on("click", function() {
            f();
            var e, t = v.purpose;
            e = "\u5546\u94fa" === t ? v.mainSite + "esf_sp/" + v.city : "\u522b\u5885" === t ? v.mainSite + "esf_bs/" + v.city : "\u5199\u5b57\u697c" === v.purpose ? v.mainSite + "esf_xzl/" + v.city : v.esfSite + v.city,
            y.districtId && (e = e + "_" + y.districtId),
            y.comareaId && (e = e + "_b" + y.comareaId),
            "\u522b\u5885" !== t && y.railwayId && (e = e + "_j" + y.railwayId),
            "\u522b\u5885" !== t && y.stationId && (e = e + "_k" + y.stationId),
            e += "/";
            var a = !1;
            v.price && (e = e + "m" + v.price.replace("^", ","),
            a = !0),
            v.room && (e = e + "h" + v.room,
            a = !0),
            v.area && (e = e + "a" + v.area.replace("^", ","),
            a = !0),
            v.tags && (e = e + "c" + v.tags,
            a = !0),
            v.floor && (e = e + "s" + v.floor,
            a = !0),
            v.equipment && (e = e + "d" + v.equipment,
            a = !0),
            v.orderby && (e = e + "x" + v.orderby,
            a = !0),
            v.age && (e = e + "f" + v.age,
            a = !0),
            v.towards && (e = e + "t" + v.towards,
            a = !0),
            a && (e += "/"),
            v.hasOwnProperty("zttype") && v.zttype.length && (e = e + "&zttype=" + v.zttype),
            v.hasOwnProperty("jituanid") && v.jituanid.length && (e = e + "&jituanid=" + v.jituanid),
            v.hasOwnProperty("cstype") && "ds" === v.cstype && (e += "&cstype=ds"),
            v.hasOwnProperty("type") && "esfzy" === v.type && (e += "&type=esfzy"),
            v.hasOwnProperty("hf") && "tab" === v.hf && (e += "&hf=tab"),
            v.hasOwnProperty("isspecialprice") && "1" === v.isspecialprice && (e += "&tjftype=esf"),
            v.hasOwnProperty("jhList") && "1" === v.jhList && (e += "&jhtype=esf"),
            v.hasOwnProperty("utm_source") && v.utm_source.length && (e = e + "&utm_source=" + v.utm_source),
            v.hasOwnProperty("schooltype") && v.schooltype.length && (e = e + "&schooltype=" + v.schooltype),
            v.hasOwnProperty("utm_term") && v.utm_term.length && (e = e + "&utm_term=" + v.utm_term),
            "xiaoqu" === v.src && (e = e + "&src=" + v.src + "&purpose=" + v.purpose),
            v.projcodes && (e = e + "&projcodes=" + v.projcodes),
            "\u522b\u5885" === t && v.buildclass && (e = e + "&buildclass=" + v.buildclass),
            "\u5546\u94fa" !== t && "\u5199\u5b57\u697c" !== t || !v.propertysubtype || (e = e + "&propertysubtype=" + v.propertysubtype,
            a = !0),
            e = e.replace("/&", "/?"),
            window.location = e
        })
    }
});
define("backtop/1.0.0/backtop", ["jquery"], function(i) {
    "use strict";
    return function() {
        var e = i("jquery")
          , n = seajs.data.vars;
        if (n.jhList) {
            var o = '<a id="wapesfyx_D04_01" style="position:fixed; height:37px; width:37px;background: url(';
            o += n["public"] + "images/backtop.png",
            o += ') no-repeat center; background-size:37px 37px;right:8px;bottom:65px;z-index: 99;">&nbsp;</a>'
        } else {
            var o = '<a id="wapesfsy_D04_01" style="position:fixed; height:37px; width:37px;background: url(';
            o += n["public"] + "images/backtop.png",
            o += ') no-repeat center; background-size:37px 37px;right:8px;bottom:65px;z-index: 99;">&nbsp;</a>'
        }
        var t = e(o).appendTo(document.body)
          , p = e(window)
          , a = p.height();
        t.on("click", function() {
            e("body").animate({
                scrollTop: 0
            }, 200)
        }),
        p.on("resize", function() {
            a = p.height()
        }).on("scroll", function() {
            p.scrollTop() <= 2 * a - 60 ? t.is(":hidden") || t.hide() : t.is(":hidden") && t.show()
        })
    }
});
!function(a, p) {
    "function" == typeof define ? define("app/1.0.0/appdownload", [], function(o) {
        return p(a, o)
    }) : "object" == typeof module ? module.exports = p(a) : a.appdo = p(a)
}(window, function(a, p) {
    "use strict";
    function o(a, p, o) {
        var e = m.createElement("script");
        o && (e.charset = o),
        n(e, p, a),
        e.async = !0,
        e.src = a,
        s ? r.insertBefore(e, s) : r.appendChild(e)
    }
    function n(a, p, o) {
        function n(o) {
            a.onload = a.onerror = a.onreadystatechange = null,
            r.removeChild(a),
            a = null,
            p(o)
        }
        var e = "onload"in a;
        e ? (a.onload = n,
        a.onerror = function() {
            n(!0)
        }
        ) : a.onreadystatechange = function() {
            /loaded|complete/.test(a.readyState) && n()
        }
    }
    function e() {
        if (m.currentScript)
            return m.currentScript.src;
        var p;
        try {
            c.b.a()
        } catch (o) {
            p = o.stack,
            !p && a.opera && (p = (String(o).match(/of linked script \S+/g) || []).join(" "))
        }
        if (p)
            return p = p.split(/[@ ]/g).pop(),
            p = "(" == p[0] ? p.slice(1, -1) : p,
            p.replace(/(:\d+)?:\d+$/i, "");
        for (var n, e = r.getElementsByTagName("script"), t = 0; n = e[t++]; )
            if ("interactive" === n.readyState)
                return n.className = n.src
    }
    function t(p, o) {
        var n = this;
        n.apk = o,
        n.appdoUrl = p,
        1 != f && a.location.href.indexOf("from=weixin") > -1 && i(document).ready(function() {
            n.listen()(null)
        })
    }
    var m = a.document
      , r = m.head || m.getElementsByTagName("head")[0] || m.documentElement
      , l = a.seajs
      , d = l ? l.data.vars : ""
      , s = r.getElementsByTagName("base")[0]
      , i = a.$ || a.jQuery
      , f = ""
      , g = "";
    "undefined" == typeof _vars ? f = !1 : (f = _vars.isWeiXin,
    g = _vars["public"]),
    t.prototype = {
        listen: function(n) {
            var e = this;
            return function(n) {
                var t = e.appdoUrl + "jslib/app/1.0.1/appopen.js"
                  , c = function(p) {
                    "function" == typeof a.openApp && (p = a.openApp);
                    var o, t = e.apk && "object" != typeof e.apk ? e.apk : "//download.3g.fang.com/fang_android_31256.apk", c = t.lastIndexOf(".apk"), m = t.lastIndexOf("&f="), r = "";
                    c > -1 ? o = t.slice(c - 4, -4) : m > -1 && (o = t.slice(m + 3));
                    var l = "";
                    if ("object" != typeof e.apk) {
                        var s = i(n.target);
                        "icon-down" === s.attr("class") || "icon-down" === s.parent("a").attr("class") ? r = "http://a.app.qq.com/o/simple.jsp?pkgname=com.soufun.app&ckey=CK1358437680501" : "appDown" === s.attr("class") || "appDown" === s.parent("a").attr("class") || "down-btn-c" === s.attr("id") || "down-btn-c" === s.parent("a").attr("id") ? r = "http://a.app.qq.com/o/simple.jsp?pkgname=com.soufun.app&ckey=CK1358437780736" : "news" !== d.currentChannel || "detail" !== d.action || "appdown" !== s.attr("class") && !s.parents(".appdown").length || (r = "http://a.app.qq.com/o/simple.jsp?pkgname=com.soufun.app&ckey=CK1358437680505")
                    } else {
                        var f = e.apk.position || "downBtn";
                        l = e.apk.appUrl || "";
                        var g = {
                            indexTopBtn: {
                                company: 1302,
                                appUrl: "//download.3g.fang.com/fang_android_31302.apk",
                                wxUrl: "http://a.app.qq.com/o/simple.jsp?pkgname=com.soufun.app&ckey=CK1359051980880"
                            },
                            hezuoTopBtn: {
                                company: 1322,
                                appUrl: "//download.3g.fang.com/fang_android_31322.apk",
                                wxUrl: "http://a.app.qq.com/o/simple.jsp?pkgname=com.soufun.app&ckey=CK1371137304401"
                            },
                            indexCnxh: {
                                company: 1303,
                                appUrl: "//download.3g.fang.com/fang_android_31303.apk",
                                wxUrl: "http://a.app.qq.com/o/simple.jsp?pkgname=com.soufun.app&ckey=CK1359051980881"
                            },
                            xfCcjIndex: {
                                company: "1304",
                                appUrl: "//download.3g.fang.com/fang_android_31304.apk",
                                wxUrl: "http://a.app.qq.com/o/simple.jsp?pkgname=com.soufun.app&ckey=CK1359052085901"
                            },
                            ccjIndex: {
                                company: "1305",
                                appUrl: "//download.3g.fang.com/fang_android_31305.apk",
                                wxUrl: "http://a.app.qq.com/o/simple.jsp?pkgname=com.soufun.app&ckey=CK1359052219072"
                            },
                            xfTopBtn: {
                                company: 1299,
                                appUrl: "//download.3g.fang.com/fang_android_31299.apk",
                                wxUrl: "http://a.app.qq.com/o/simple.jsp?pkgname=com.soufun.app&ckey=CK1359051710048"
                            },
                            xfIndexMid: {
                                company: 1306,
                                appUrl: "//download.3g.fang.com/fang_android_31306.apk",
                                wxUrl: "http://a.app.qq.com/o/simple.jsp?pkgname=com.soufun.app&ckey=CK1359051980882"
                            },
                            xfDetailMid: {
                                company: 1315,
                                appUrl: "//download.3g.fang.com/fang_android_31315.apk",
                                wxUrl: "http://a.app.qq.com/o/simple.jsp?pkgname=com.soufun.app&ckey=CK1368630084683"
                            },
                            xfIm: {
                                company: 1307,
                                appUrl: "//download.3g.fang.com/fang_android_31307.apk",
                                wxUrl: "http://a.app.qq.com/o/simple.jsp?pkgname=com.soufun.app&ckey=CK1359052289763"
                            },
                            esfIndexTop: {
                                company: 1300,
                                appUrl: "//download.3g.fang.com/fang_android_31300.apk",
                                wxUrl: "http://a.app.qq.com/o/simple.jsp?pkgname=com.soufun.app&ckey=CK1359051710049"
                            },
                            esfIndexMid: {
                                company: 1308,
                                appUrl: "//download.3g.fang.com/fang_android_31308.apk",
                                wxUrl: "http://a.app.qq.com/o/simple.jsp?pkgname=com.soufun.app&ckey=CK1359052289764"
                            },
                            newsDetailTopBtn: {
                                company: 1309,
                                appUrl: "//download.3g.fang.com/fang_android_31309.apk",
                                wxUrl: "http://a.app.qq.com/o/simple.jsp?pkgname=com.soufun.app&ckey=CK1359052289765"
                            },
                            newsLookBtn: {
                                company: 1309,
                                appUrl: "//download.3g.fang.com/fang_android_31309.apk",
                                wxUrl: "http://a.app.qq.com/o/simple.jsp?pkgname=com.soufun.app&ckey=CK1359052289765"
                            },
                            indexBottomLogo: {
                                company: 1114,
                                appUrl: "//download.3g.fang.com/fang_android_31114.apk",
                                wxUrl: "http://a.app.qq.com/o/simple.jsp?pkgname=com.soufun.app&ckey=CK1359052289766"
                            },
                            downBtn: {
                                company: 1298,
                                appUrl: "//download.3g.fang.com/fang_android_31298.apk",
                                wxUrl: "http://a.app.qq.com/o/simple.jsp?pkgname=com.soufun.app&ckey=CK1359051280826"
                            },
                            newsDetailBtn: {
                                company: 1301,
                                appUrl: "//download.3g.fang.com/fang_android_31301.apk",
                                wxUrl: "http://a.app.qq.com/o/simple.jsp?pkgname=com.soufun.app&ckey=CK1359052219071"
                            },
                            askIndexTopBtn: {
                                company: 1311,
                                appUrl: "//download.3g.fang.com/fang_android_31311.apk",
                                wxUrl: "http://a.app.qq.com/o/simple.jsp?pkgname=com.soufun.app&ckey=CK1360859826782"
                            },
                            askDetailTopBtn: {
                                company: 1320,
                                appUrl: "//download.3g.fang.com/fang_android_31320.apk",
                                wxUrl: "http://a.app.qq.com/o/simple.jsp?pkgname=com.soufun.app&ckey=CK1368630199001"
                            },
                            esfdetail: {
                                company: 1312,
                                appUrl: "//download.3g.fang.com/fang_android_31312.apk",
                                wxUrl: "http://a.app.qq.com/o/simple.jsp?pkgname=com.soufun.app&ckey=CK1368630053177"
                            },
                            esfdsDetail: {
                                company: 1313,
                                appUrl: "//download.3g.fang.com/fang_android_31313.apk",
                                wxUrl: "http://a.app.qq.com/o/simple.jsp?pkgname=com.soufun.app&ckey=CK1368630198999"
                            },
                            esfjhDetail: {
                                company: 1314,
                                appUrl: "//download.3g.fang.com/fang_android_31314.apk",
                                wxUrl: "http://a.app.qq.com/o/simple.jsp?pkgname=com.soufun.app&ckey=CK1368630199000"
                            },
                            xqDetail: {
                                company: 1319,
                                appUrl: "//download.3g.fang.com/fang_android_31319.apk",
                                wxUrl: "http://a.app.qq.com/o/simple.jsp?pkgname=com.soufun.app&ckey=CK1368630528695"
                            },
                            xqDphd: {
                                company: 1323,
                                appUrl: "//download.3g.fang.com/fang_android_31323.apk",
                                wxUrl: "http://a.app.qq.com/o/simple.jsp?pkgname=com.soufun.app&ckey=CK1374526736197"
                            },
                            zfDetail: {
                                company: 1168,
                                appUrl: "//download.3g.fang.com/soufun_android_31168.apk",
                                wxUrl: ""
                            },
                            zhuantiofo: {
                                company: 1325,
                                appUrl: "//download.3g.fang.com/fang_android_31325.apk",
                                wxUrl: "http://a.app.qq.com/o/simple.jsp?pkgname=com.soufun.app&ckey=CK1375122840341"
                            }
                        };
                        t = g[f].appUrl,
                        r = g[f].wxUrl,
                        o = g[f].company
                    }
                    var u = n.data && n.data.ctmNo ? n.data.ctmNo : ""
                      , k = p({
                        url: t,
                        company: o,
                        log: e.log,
                        app: "sfapp",
                        ctm: "ctm=2.xf_search.tail." + u,
                        wxUrl: r,
                        appurl: l
                    });
                    k.openApp()
                };
                return n && (n.preventDefault(),
                n.stopPropagation()),
                "object" == typeof a.seajs ? p.async(["app/1.0.1/appopen"], c) : "function" == typeof a.openApp ? c() : o(t, c, "utf-8"),
                !1
            }
        },
        log: function(a, p, o) {
            i && i.get("/public/?c=public&a=ajaxOpenAppData", {
                type: a,
                rfurl: m.referrer,
                company: p,
                app: o
            })
        }
    };
    var u = function() {
        var p = ""
          , o = "";
        return "object" == typeof a.seajs ? (o = a.seajs.data.base,
        p = a.seajs.data.vars["public"]) : o = e() || "",
        p ? p : o.substr(0, o.indexOf("jslib"))
    }();
    return i.fn.openApp = function(a) {
        var p = new t(u,a)
          , o = i(this)
          , n = o.filter(":visible").index() + 1;
        o.on("click", {
            ctmNo: n
        }, p.listen())
    }
    ,
    i
});
