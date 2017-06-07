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
        console.log('Inited')

    },

    // After component renders
    onRender: function(cmp, evt, helper) {
        //helper.resizeScrollWrapper(cmp);
    }

})