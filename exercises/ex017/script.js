const user = 'Daniel'
console.log(user[5])

const users = ['abobora', 'limao', 'Amora']
console.log(users.slice(0, -1))
console.log(users[1])
console.log(users instanceof Array)

users[1] = 'goiaba'
console.log(users[1])

users.push('Laranja') // adiciona no fim
console.log(users)

users.unshift('daniel') // adiciona ao começo
console.log(users)

let del = users.pop() // remove o ultimo
console.log(users)
console.log(del)

del = users.pop() // remove o ultimo
console.log(users)
console.log(del)

del = users.shift()
console.log(users)
console.log(del)
