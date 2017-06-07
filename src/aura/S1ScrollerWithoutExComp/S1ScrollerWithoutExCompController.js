({
    init: function(cmp, evt, helper) {
        var iter = [];
        for (var i = 1; i <= 100; i++) {
            iter.push(i);
        }
        cmp.set('v.iter', iter);
    }
})