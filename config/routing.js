/**
 * Routing directive
 */

module.exports = function(app){
    app.get('/', app.controller.index.index);
    app.post('/post', app.controller.index.post);
    app.get('/user/list', app.controller.user.list);
};