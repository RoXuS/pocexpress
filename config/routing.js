/**
 * Routing directive
 */

module.exports = function(){
    Common.app.get('/', Common.app.controller.index.index);
    Common.app.post('/post', Common.app.controller.index.post);
    Common.app.get('/user/list', Common.app.controller.user.list);
};