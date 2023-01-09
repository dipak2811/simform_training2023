var students = [{ name: "dipak", role: 10 }, { name: "meet", role: 11 }]
function list() {
    var str = [];
    var role = []
    students.forEach(function (student) {
        str += `<li> ${student.name}</li>`
        role += `<li> ${student.role} </li>`
    });
    document.getElementById('para').innerHTML = str;
    document.getElementById('para1').innerHTML = role;
    console.log("Details fetched" + str)
}
list()
console.log("Details fetched1")

var newst = [{ name: "mukul", role: 12 }, { name: "sahil", role: 13 }]

function appendlist(student)
{
    return new Promise(function (resolve,reject){
        setTimeout(function ()
        {
            let St=[].concat(student,students);
            console.log([])
            students=St
            var error=0
            if(!error)
            {
                resolve()
            }
            else{
                reject()
            }
        },3000)
    })
}
appendlist(newst).then(list).catch(console.log("list didn't added"))
list()

