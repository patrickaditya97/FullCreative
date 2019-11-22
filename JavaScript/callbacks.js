var func = function fun(num)
{
    console.log("this is fun", num);
}
function fun1(callbacks)
{
    callbacks(2)
}

fun1(func)
