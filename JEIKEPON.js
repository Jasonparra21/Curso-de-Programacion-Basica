let Pets = ['Drawid','Orchiwet','Toprock','Vessptox','Frogblex','WhitePhoenix','Massivehummingbird','xcorpion']
let Attacks =['Wind','Fire','Water','Earth' ]
let playerattack 
let enemyAttack
let playerLives = 3 
let enemyLives  = 3
function startgame(){
    let restartButton = document.getElementById('Restart')
    restartButton.style.display = 'none'
    let chooseAttack = document.getElementById('Choose_attack')
    chooseAttack.style.display  = 'none'
    let petButton = document.getElementById('pet-button')
    petButton.addEventListener('click', petchoose)
    let windButton = document.getElementById('wind-button')
    windButton.addEventListener('click', windAttack)
    let fireButton = document.getElementById('fire-button')
    fireButton.addEventListener('click', fireAttack)
    let waterButton = document.getElementById('water-button')
    waterButton.addEventListener('click', waterAttack)
    let earthButton = document.getElementById('earth-button')
    earthButton.addEventListener('click', earthAttack)
    restartButton.addEventListener('click', restart)
}
function randomselector (min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}
function petchoose(){
    let choosePet = document.getElementById('Choose_pet')
    choosePet.style.display  = 'none'
    let chooseAttack = document.getElementById('Choose_attack')
    chooseAttack.style.display  = 'flex'
    let a = 0
    for (var i = 0; i < 8 ; i++){
        let pet = document.getElementById(Pets[i])
        let spanPlayerPet =document.getElementById('playerPet')
        if (pet.checked){
            //alert('you choose ' + Pets[i])
            spanPlayerPet.innerHTML = Pets[i]
        } else {
            a=a+1
            if (a==6) {
                alert('Choose at least 1 pet')
                location.reload()
            }
        }
    }
    enemyspetchoose()
}
 function enemyspetchoose(){
    let enemy = randomselector(1,8)
    let Enemyspet = document.getElementById(Pets[enemy-1])
    let spanEnemysPet = document.getElementById('enemysPet')
    spanEnemysPet.innerHTML = Enemyspet
    
}
function windAttack(){
    playerattack = 'Wind'
    enemyRandomAttack()
}
function fireAttack(){
    playerattack = 'Fire'
    enemyRandomAttack()
}
function waterAttack(){
    playerattack = 'Water'
    enemyRandomAttack()
}
function earthAttack(){
    playerattack = 'Earth'
    enemyRandomAttack()
}
function enemyRandomAttack (){
    let RandomAttack = randomselector(1,4)
    enemyAttack = Attacks[RandomAttack-1]
    combat()
}
function combat() {
    let spanPlayerLives = document.getElementById('playerLives')
    let spanEnemysLives = document.getElementById('enemyLives')
    if (playerattack == enemyAttack){
        messageCreator('Draw!')
    }else if ((playerattack == Attacks[2] && enemyAttack == Attacks[1]) || (playerattack == Attacks[2] && enemyAttack == Attacks[0])||(playerattack == Attacks[1] && enemyAttack == Attacks[3])||(playerattack == Attacks[1] && enemyAttack == Attacks[0])|| (playerattack == Attacks[0] && enemyAttack == Attacks[3])||(playerattack == Attacks[3] && enemyAttack == Attacks[2])){
        messageCreator('Win!')
        enemyLives--
        spanEnemysLives.innerHTML= enemyLives
    }else {
        messageCreator('lost!')
        playerLives--
        spanPlayerLives.innerHTML= playerLives
    }
    countLives()
}
function countLives(){
    if (enemyLives == 0){
        finalMessage("Congratulations, you win!")
    }else if (playerLives == 0){
        finalMessage("Unfortunately, you lost!")
    }
}
function messageCreator(result){
    let messageSection = document.getElementById('Result')
    let player_attacks = document.getElementById('player-attacks')
    let enemy_attacks = document.getElementById('enemy-attacks')
    
    let newPlayerAttack= document.createElement('p')
    let newEnemyAttack = document.createElement('p')
    
    messageSection.innerHTML = result
    newPlayerAttack.innerHTML = playerattack
    newEnemyAttack.innerHTML = enemyAttack
    
    player_attacks.appendChild(newPlayerAttack)
    enemy_attacks.appendChild(newEnemyAttack)
}
function finalMessage(finalResult){
    let messageSection = document.getElementById('Result')
    messageSection.innerHTML = finalResult
    let windButton = document.getElementById('wind-button')
    windButton.disabled =true
    let fireButton = document.getElementById('fire-button')
    fireButton.disabled =true
    let waterButton = document.getElementById('water-button')
    waterButton.disabled =true
    let earthButton = document.getElementById('earth-button')
    earthButton.disabled =true
    let restartButton = document.getElementById('Restart')
    restartButton.style.display ='block'
}
function restart(){
    location.reload()
}
window.addEventListener('load',startgame)




