let money = '136812748647816.2346274'
let splitArr = money.split('.')

console.log(parseInt(splitArr[0]).toLocaleString() + '.' + splitArr[1]);