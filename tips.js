//style console variable
console.log('%c this_var', 'color: yellow; font-size: 1.2rem' );


//computer property names
const foo ={isaac:'programmer', age:'16' }
const girlfriend ={no:'girlfriend', why:'too poor' }
const change ={million:'50', rich:'yes' }

    console.log({foo, girlfriend,change})

    //console table 
    console.table([foo, girlfriend,change])


        //console time
        console.time('looper') //start
        let i =0;
        while(i < 1000000) //loop through a million times
        {
            i++; //counts show 
        }
        console.timeEnd('looper') //endtime

