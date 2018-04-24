var parse = require('css-annotation').parse

module.exports = function plugin (css, options) {
    options = options || {}

    var annotations = parse(css)
    var importants = []
    annotations.forEach(function (annotation) {
        if (annotation.important) {
            importants.push({
                important: (typeof annotation.important === 'string' ? [annotation.important] : annotation.important),
                rule: annotation.rule
            })
        }
    })

    return function (root) {
        root.walkRules(function (rule) {
            if (checkImportant(rule)) {
                importants.forEach(function (important) {
                    if (important.important === true) {
                        root.walkRules(function (rule) {
                            if (rule.selector === important.rule) {
                                rule.each(function (child) {
                                    if (child.type === 'decl') {
                                        child.important = true
                                    }
                                })
                            }
                        })
                    }
                    else {
                        rule.each(function (child) {
                            if (child.type === 'decl') {
                                important.important.forEach(function (property) {
                                    if (child.prop === property) {
                                        child.important = true
                                    }
                                })
                            }
                        })
                    }
                })
            }
        })
    }
}

function checkImportant (rule) {
    if (rule.nodes) {
        var children = rule.nodes
        var text = ''
        children.forEach(function (child) {
            if (child.type === 'comment') text = child.text
        })
        if (text.match(/\@important/)) return true
    }
    return false
}

