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

        //stack trace
        const button = () => console.trace("button clicked")
        button()
        button()

        const turtle = {
            name: 'bob',
            legs: 'four',
            shell: true,
            type: 'amphibious',
            meal : 10,
            diet : 'berries'
        }
        

        //wrong way to write it
        function feed(animal){
            return `feed ${animal.name} ${animal.meal} kilos of ${animal.diet}`;
        }

        //destructure is the right way

        function Feed({name, meal, diet}){
            return `feed ${name} ${meal} kilos of ${diet}`;
        }

        function Fed(animal){
            const {name, meal, diet} = animal;
            return `feed ${name} ${meal} kilos of ${diet}`;
        }
        console.log(Feed(turtle))
        console.log('😁');

        //string literals

        const horse = {
            name : 'Topher',
            size : 'large',
            skills : ['jousting', 'racing'],
            age : 7
        }

        //bad way

        let bio = horse.name + ' is a ' + horse.size + ' horse skilled in ' + horse.skills.join(' and ')

        console.log(bio)

        //good way is use backticks
        const {name, size, skills} = horse;
        bio = `${name}  is a ${size} horse skilled in ${skills.join(' & ')}`
        console.log(bio)
        
        //function programming

        function horseAge(str, age){
            const ageStr = age > 5 ? 'old' : 'young';
            return `${str[0]} ${ageStr} at ${age} years`;
        }

        const bio2 = horseAge `The horse is ${horse.age}`;
        console.log(bio2)