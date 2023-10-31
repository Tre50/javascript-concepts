/**
 * 1. loops
 * 2. for loops
 * 3.for each
 * 4.while
 * 5. map
 */

// 1.for Loops - for(let 1=0, i < studentsArray.length; i = i+) {}


//const stude
{id: 1, name:'John', field: 'Doctor'}
{id: 1, name:'John', field: 'Doctor'}
{id: 1, name:'John', field: 'Doctor'}
{id: 1, name:'John', field: 'Doctor'}
{id: 1, name:'John', field: 'Doctor'}
{id: 1, name:'John', field: 'Doctor'}
{id: 1, name:'John', field: 'Doctor'}
{id: 1, name:'John', field: 'Doctor'}
{id: 1, name:'John', field: 'Doctor'}

// gjgjg
studentsArray.array.forEach((item, index), => {
    console,log(index '->', item)
})





// 3.map
studentsArray.array.map((item, index), => {
    console.log (index, '->', item)
    item.age = index + 10 

   

    
})

//map function one-liner

studentsArray.map() ((item,index) => '<h2> item ${item.field}<h2/>')

// loop on an array and if id is a multiple of 3 console fizz
// if id is multiple of 5 console buzz

functionfizzBuzz(){

    studentsArray.map((item,index) => {
        if(item.id % 3 === 0){
            return 'fizzbuzz'
        }else if (item.id % 5 === 0){
            return 'buzz'
        }else if (item.id % 3 === 0){
            return 'fizz'
        }
     } )
        return 
    
}


