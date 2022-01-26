const url="http://hp-api.herokuapp.com/api/characters"
fetch(url,{
    method:'GET'
}).then((response)=> {
    console.log(response)
})

const url1="http://hp-api.herokuapp.com/api/characters/students"
fetch(url1,{
    method:'GET'
}).then((promise)=> {
    console.log(promise)
})

const url2="http://hp-api.herokuapp.com/api/characters/staff"
fetch(url2,{
    method:'GET'
}).then((harry)=> {
    console.log(harry)
})

const url3="http://hp-api.herokuapp.com/api/characters/house/gryffindor"
fetch(url3,{
    method:'GET'
}).then((potter)=> {
    console.log(potter)
})
