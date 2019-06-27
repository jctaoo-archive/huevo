hexo.extend.generator.register('life', function(locals){
    return {
        path: 'life/index.html',
        data: locals.posts,
        layout: ['life'],
    }
});
