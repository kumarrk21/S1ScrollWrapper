({
    init: function(cmp, evt, helper) {
        //When window is resized..for e.g., Potrait to Landscape, resize the scroll container
        if (window.addEventListener) {
            window.addEventListener("resize", function(result) {
                helper.resizeWindow(cmp);
            }, false);
        } else {
            window.attachEvent("onresize", function(result) {
                helper.resizeWindow(cmp);
            });
        }
        var cmpGlobalID = cmp.getGlobalId()
        cmpGlobalID = cmpGlobalID.replace(/\D+/g, '')
        cmp.set('v.topCSSName','scrollTop'+cmpGlobalID);
        cmp.set('v.bottomCSSName','scrollBottom'+cmpGlobalID);
        cmp.set('v.bodyCSSName','scrollContainerBody'+cmpGlobalID);

    },

    // After component renders
    onRender: function(cmp, evt, helper) {
        //helper.resizeScrollWrapper(cmp);
    }

})