// new Valine({
//     el:'#comments',
//     appId: 'WgzuYsVSKDgSVjsNNIMV7aAi-gzGzoHsz',
//     appKey: 'r1tOb4wVhwY51l3KIPuCIcfy',
// });
var gitalk = new Gitalk({
  clientID: '6a759fb67a04cf64e3d2',
  clientSecret: 'ea903c58d334b1bcd0adcf07381de7920d418873',
  repo: 'huevo',
  owner: 'hello-acuario',
  admin: ['hello-acuario'],
  id: location.pathname,      // Ensure uniqueness and length less than 50
  distractionFreeMode: false  // Facebook-like distraction free mode
});

gitalk.render('comments');