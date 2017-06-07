({
    init: function(cmp, evt, helper) {
        var iter = [];
        for (var i = 1; i <= 100; i++) {
            iter.push(i);
        }
        cmp.set('v.iter', iter);
    },

    showModal: function(cmp,evt,helper){
    	$A.util.removeClass(cmp.find('_modal'),"slds-hide")
    },

    hideModal: function(cmp,evt,helper){
    	$A.util.addClass(cmp.find('_modal'),"slds-hide")
    }
})