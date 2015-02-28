var fs = require('fs')
var postcss = require('postcss')

module.exports.parse = function parse (css) {
    var root = postcss.parse(css)
    var res = []

    root.eachComment(function (node, i) {
        if (node.type === 'comment') {
            var text = node.text
            var tmp = {}


            var names = text.match(/\@.+?(\n|$|\s.+?(\n|$))/g)
            if (names) {
                names.forEach(function (name, i) {
                    // Parsing annotation with value
                    // e.g. @foo bar
                    if (name.match(/\@(.+?)\s(.+?)(\n|$)/g)) {
                        var key = RegExp.$1
                        var val = RegExp.$2

                        // Parsing multiple annotations
                        // e.g. @array foo, bar, baz
                        if (val.match(/\,/)) {
                            val = val.split(',')
                            val.forEach(function (v, i) {
                                val[i] = v.trim()
                            })
                        }

                        // Extend the existing value
                        if (tmp[key] !== undefined && tmp[key] !== true) {
                            // Turn value in array
                            if (!Array.isArray(tmp[key])) {
                                tmp[key] = [tmp[key]]
                            }
                            tmp[key] = tmp[key].concat(val)
                        }
                        // Set the initial value
                        else {
                            tmp[key] = val
                        }
                    }
                    // Parsing annotation without value
                    // e.g. @foo
                    if (name.match(/\@(\w+)\s*(\n|$)/g)) {
                        var key = RegExp.$1
                        tmp[key] = tmp[key] || true
                    }
                })
            }


            var parent = node.parent

            if (parent.type ==='atrule') {
                tmp.atrule = parent.name
                tmp.params = parent.params
            }

            if (parent.type === 'rule') {
                tmp.rule = parent.selector
            }

            res.push(tmp)
        }
    })

    return res
}



module.exports.read = function read (commentText) {
    var tmp = {}

    var names = commentText.match(/\@.+?(\n|$|\s.+?(\n|$))/g)
    if (names) {
        names.forEach(function (name, i) {
            if (name.match(/\@(.+?)\s(.+?)(\n|$)/g)) {
                var key = RegExp.$1
                var val = RegExp.$2

                if (val.match(/\,/)) {
                    val = val.split(',')
                    val.forEach(function (v, i) {
                        val[i] = v.trim()
                    })
                }

                if (tmp[key] !== undefined && tmp[key] !== true) {
                    if (!Array.isArray(tmp[key])) {
                        tmp[key] = [tmp[key]]
                    }
                    tmp[key] = tmp[key].concat(val)
                }
                else {
                    tmp[key] = val
                }
            }

            if (name.match(/\@(\w+)\s*(\n|$)/g)) {
                var key = RegExp.$1
                tmp[key] = tmp[key] || true
            }
        })
    }

    return tmp
}
