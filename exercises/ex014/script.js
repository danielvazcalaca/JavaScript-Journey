let age = '1'
console.log(age, typeof age)

age = parseInt(age)
console.log(age, typeof age)

age = '35.32'
age = parseFloat(age)
console.log(age, typeof age)

age = +age
console.log(age, typeof age)

age = Number(age)
age = Boolean(age)
console.log(age, typeof age)

age = String(age)
console.log(age, typeof age)

age = age.toString()
console.log(age, typeof age)
