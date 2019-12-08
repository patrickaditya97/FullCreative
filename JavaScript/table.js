// (function()
// {
//     console.log("started function");
//     console.log(remove_elem)

    // var remove_elem  = document.getElementsByClassName('btn_rm');

    // for (var i = 0; i < remove_elem.length; i++) {
    //     remove_elem[i].addEventListener('click', function()
    //     {
    //         console.log("id:", event.target.id);
    //         console.log("click");
    //         console.log(this)
    //         this.closest("tr").remove();
    //     })
    // }





    let add_elem  = document.getElementById('btn_add');
    var click = 0;

    
    add_elem.addEventListener('click', function_add, false)

    function function_add()
    {
        // alert()

        var table_elem = document.getElementById('dyn_tr')
        var tr_elem = document.createElement('tr')
        var click_count = ++click;
        tr_elem.innerHTML = '<tr id="dyn_td"><td>132</td>' +
                    '<td>Patrick</td>' +
                    '<td>9176424449</td>' +
                    '<td>mpatrick97@gmail.com</td>' +
                    '<td><button type="button" class="btn_rm" name="button" id="btn'+ click_count +'" >Delete</button></td></tr>';

        console.log(tr_elem) 
        
        table_elem.appendChild(tr_elem)
        
    }
    
    
    var tablebody = document.getElementById("dyn_tab")
    console.log(tablebody)

    tablebody.addEventListener('click', function(e)
    {
        if(!event.target.classList.contains('btn_rm'))
        {
            // alert()
            return
        }
        event.target.parentNode.parentNode.remove()
        event.preventDefault()
    })
    

// })()