// let new_el = document.querySelector('.buttons');
//
// new_el.addEventListener('click', function() {
//      console.log("click");
// })

(function()
{

    const el  = document.getElementsByTagName('button');
    var news = 0;
    console.log(this);
    // console.log(this.alert(10));
    console.log(el)
    // var name = prompt("hello");
    console.log(name);
    for(var i=0; i<el.length;i++)
    {
        el[i].addEventListener('click', function()
        {
            console.log("id:", this);
            console.log("click");
            console.log(i);
        })
    }

})()
