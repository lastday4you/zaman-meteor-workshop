FlowRouter.route('/', {
    action: function(params, queryParams) {
        BlazeLayout.render('main_layout', {main: 'showForum'});
    }
});

FlowRouter.route('/post', {
    action: function(params, queryParams) {
         BlazeLayout.render('main_layout', {main: 'postforum'});
    }
});