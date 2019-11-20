// let new_el = document.querySelector('.buttons');
//
// new_el.addEventListener('click', function() {
//      console.log("click");
// })

const el  = document.getElementsByTagName('button');
var news = 0;
for(i=0; i<el.length;i++)
{
    el[i].addEventListener('click', function()
    {
        console.log(i);
        console.log("click");
        news++;
        console.log(news);
    })
}
