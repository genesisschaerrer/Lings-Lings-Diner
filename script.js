let startOrderButton = document.querySelector('.oder-btn')


// let breatkfastItems = {
//   tofuPudding: 5,
//   steamedBuns: 4,
//   blackBeanMoonCakes: 6
// }

// let breakfastDrinks = {
//   coffee: 2,
//   tea: 2
// }
let entreeItems = {
  whiteRice: 4,
  undonNoodles: 6,
  friedRice: 6
}

let sideItems = {
  pekingDuck: 8,
  sweetAndSourPork: 6,
  bokChoy: 4,
  beefAndBroccoli: 6,
  centuryEgg: 10
}

let addOnItems = {
  eggRoll: 1,
  springRoll: 1,
}

let total = []


let comments = [
  "You Picked My Personal Favorite!",
  "Great Choice!",
  "One Of Our Most Popular Items!",
  "I Can Tell Your A Foodie!",
  "You Sophisticated Palate!!"
]

// function randomComment(){
//   let serverComment = comments[Math.floor(Math.random())*comments.length]
//   return serverComment
// }

// randomComment()
// var randomServerComment = serverComment



function entree (){
  let orderEntree = prompt("Yíngjiē to Lings Lings Diner!\n\nPlease Enter One Entree Item:\n\nWhite Rice\nUndon Noodles\nFried Rice")
  orderEntree = orderEntree.toLowerCase().trim()
  if(orderEntree === 'white rice'){
    let choseWhiteRice = entreeItems.whiteRice
    // total += entreeItems.whiteRice
    total.push(choseWhiteRice)
    alert(`\n\nThe Cost Of ${orderEntree.toUpperCase()}  is $${total[0]}.00\n\nClick Ok To Continue See Sides Menu`)
    side()
  } else if(orderEntree === 'undon noodles'){
    let choseNoodles = entreeItems.undonNoodles
    total.push(choseNoodles)
    alert(`\n\nThe Cost Of ${orderEntree.toUpperCase()}  is $${total[0]}.00\n\nClick Ok To Continue See Sides Menu`)
    side()
  } else if(orderEntree === 'fried rice'){
    let choseFriedRice = entreeItems.friedRice
    total.push(choseFriedRice)
    alert(`\n\nThe Cost Of ${orderEntree.toUpperCase()}  is $${total[0]}.00\n\nClick Ok To Continue See Sides Menu`)
    side()
  } else {
    alert("Sorry Your Entry Is Invalid, Please Reload The Page & Try Again :)")
  }
  
}

startOrderButton.addEventListener("click", entree)
console.log(total)

function side(){
  orderSide = prompt("Great Choice On Your Entree!\n\nPlease Enter Your Side Item:\n\nPeking Duck\nSweet And Sour Pork\nBok Choy\nBeef And Broccoli\nCentury Egg")
  orderSide = orderSide.toLowerCase().trim()
  if(orderSide === "peking duck"){
    let chosePekingDuck = sideItems.pekingDuck
    total.push(chosePekingDuck)
    alert(`\n\nThe Cost Of ${orderSide.toUpperCase()}  is $${total[1]}.00\n\nClick Ok To Continue See Our Add-Ons`)
    addOns()
  } else if(orderSide === 'sweet and sour pork'){
    let choseSweetAndSourPork = sideItems.sweetAndSourPork
    total.push(choseSweetAndSourPork)
    alert(`\n\nThe Cost Of ${orderSide.toUpperCase()}  is $${total[1]}.00\n\nClick Ok To Continue See Our Add-Ons`)
    addOns()
  } else if (orderSide === 'bok choy'){
    let choseBokChoy = sideItems.bokChoy
    total.push(choseBokChoy)
    alert(`\n\nThe Cost Of ${orderSide.toUpperCase()}  is $${total[1]}.00\n\nClick Ok To Continue See Our Add-Ons`)
    addOns()
  } else if(orderSide === 'beef and broccoli') {
    let choseBeefAndBroccoli = sideItems.beefAndBroccoli
    total.push(choseBeefAndBroccoli)
    alert(`\n\nThe Cost Of ${orderSide.toUpperCase()}  is $${total[1]}.00\n\nClick Ok To Continue See Our Add-Ons`)
    addOns()
  } else if(orderSide === 'century egg'){
    let choseCenturyEgg = sideItems.centuryEgg
    total.push(choseCenturyEgg)
    alert(`\n\nThe Cost Of ${orderSide.toUpperCase()}  is $${total[1]}.00\n\nClick Ok To Continue See Our Add-Ons`)
    addOns()
  } else (
    alert("Sorry Your Entry Is Invalid, Please Reload The Page & Try Again :)")
  )
}


console.log(total)

function addOns (){
  orderAddOns = prompt("No Meal Is Complete With Out Some Spring Rolls!\n\nPlease Enter An Add-On Item:\n\nEgg Roll\nSpring Roll")
  orderAddOns = orderAddOns.toLowerCase().trim()
  if (orderAddOns === 'egg roll'){
    let choseEggRoll = addOnItems.eggRoll
    total.push(choseEggRoll)
    alert(`\n\nThe Cost Of ${orderAddOns.toUpperCase()}  is $${total[2]}.00\n\nClick Ok To Place Order`)
  } else if (orderAddOns === 'spring roll') {
    choseSpringRoll = addOnItems.springRoll
    total.push(choseSpringRoll)
    alert(`\n\nThe Cost Of ${orderAddOns.toUpperCase()}  is $${total[2]}.00\n\nClick Ok To Place Order`)
  } else {
    alert("Sorry Your Entry Is Invalid, Please Reload The Page & Try Again :)")
  }

  returnTotal()
}

console.log(total)

// console.log(total)

// function placeOrder(initial, currentValue){
//   return initial + currentValue
// }

// total = [1, 2, 3, 4, 5, 6]

const returnTotal = () => {
  let finalTotal = 0
  total.map( num => {
    finalTotal += num
  })
  // alert(`Chef Zhāng Ling Has Dashed To The Kitchen\nYour Order Will Be Up In 15 Minutes!\n\n\nYour Total is $${finalTotal}.00\n\n\nps. dont forget your fortune cookie >.<`)
  alert(`\n\nChef Zhāng Ling Has Dashed To The Kitchen\nYour Order Will Be Up In 15 Minutes!`)

  alert(`\n\n***LINGS LINGS DINER***\n2141 Jamaica Ave, Brooklyn, NY\n\n\n***Total:            $${finalTotal}.00\n\nps. don't forget your fortune cookie >.<`)
}

console.log(total)

// function returnTotal(initial, currentValue){
//   return initial + currentValue
// }



//console.log(total.reduce(placeOrder))



let fortuneDisplay = document.querySelector('.fortune-quote')
let fortuneButton = document.querySelector('.fortune-btn')

const fortuneQuotes = [
"Buh-lah-kay your fortunes will multiply",
"Jay-quellin your wisdom is like a deep river",
"Ay-ay-ron your friends are your greatest strength",
"De-nice litsen to the counsel of the many",
"Timothy you will find what you are searching for at da club",
]

function displayFortune(){
  console.log('got here from fortune')
  let randomQuote = fortuneQuotes[Math.floor(Math.random()*fortuneQuotes.length)]
  fortuneDisplay.innerHTML = randomQuote
}

fortuneButton.addEventListener("click", displayFortune)



console.log(total)


// function displayFortune(){ 
// let randomQuote = Math.floor(Math.random()*fortuneQuotes.length) 
// let randomQuoteDisplay = fortuneQuotesrandomQuote 
// let fortuneDisplay.innerHTML = randomQuoteDisplay // return randomQuoteDisplay }