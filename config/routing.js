/**
 * Routing directive
 */

module.exports = function(){
    PocExpress.app.get('/', PocExpress.app.controller.index.index);
    PocExpress.app.post('/post', PocExpress.app.controller.index.post);
    PocExpress.app.get('/user/list', PocExpress.app.controller.user.list);
};