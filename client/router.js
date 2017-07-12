Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', {template: 'main'});
Router.route('/notice', {template: 'notice'});
Router.route('/hoho', {template: 'hoho'});
Router.route('/detail', {template: 'detail'});