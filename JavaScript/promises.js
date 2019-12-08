var data = ["patrick", "patrick1", "patrick2", "patrick3"]

function retroCall()
{
    data.forEach((name)=>{console.log(name)})
}

function retro(name)
{
    return new Promise((resolve, reject)=>{
        setTimeout(
            () => {
                data.push(name)

                const error = false;

                if(!error)
                {
                    resolve()
                }
                else
                {
                    reject("sorry not possible")
                }
            }
        )
    })
}

// retro("Aditya").then(retroCall)

async function init()
{
    await retro("aditya")
    retroCall()
}