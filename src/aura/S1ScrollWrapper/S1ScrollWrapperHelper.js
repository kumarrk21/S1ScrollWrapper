({
	//Rest calculate redim tag and then adjust the window
    resizeWindow: function(cmp) {
        cmp.set('v.reCalculateDim', true);
        this.resizeScrollWrapper(cmp);
    },

    resizeScrollWrapper: function(cmp) {
        //Resize Scroller
        try {
            if (cmp.get('v.reCalculateDim')) {
            	//Get the main body
                var body = cmp.get('v.body');
                if (body.length) {
                    for (var i = 0; i < body.length; i++) {
                        var bodyCmp = body[i];
                        if (bodyCmp.isInstanceOf("c:S1ScrollWrapperBody")) {
                            cmp.set('v.scrollBody', bodyCmp)
                        } else if (bodyCmp.isInstanceOf("c:S1ScrollWrapperTop")) {
                            cmp.set('v.scrollTop', bodyCmp)
                        } else if (bodyCmp.isInstanceOf("c:S1ScrollWrapperBottom")) {
                            cmp.set('v.scrollBottom', bodyCmp)
                        }
                    }
                }

                var topHeight = cmp.get('v.topHeight');
                var bottomHeight = cmp.get('v.bottomHeight');
                var height = window.innerHeight - cmp.find('_stake').getElement().getBoundingClientRect().top - topHeight - bottomHeight;
                cmp.set('v.height', height + "px");
                cmp.set('v.reCalculateDim', false);
                cmp.set('v.addStyle', true);
            }
        } catch (e) {
            //console.log('Exception is ', e)
        }

    }

})