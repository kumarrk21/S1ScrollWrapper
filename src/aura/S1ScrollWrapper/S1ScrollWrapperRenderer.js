({
	afterRender : function(cmp,helper){
		this.superAfterRender();
		helper.resizeScrollWrapper(cmp);
	}
})