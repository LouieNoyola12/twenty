var oscrorep = 0

var oscrorep = 0
alert("Welcome to BOOTLEG BLACKJACK! The point of the game is to see who gets closer to 20 - you or computer, Have fun! we'll start with the computer:");

do {
    var scorep = 0

    var scorec = 0

    do{
        var num1 = Math.floor(Math.random() * 10) + 1
        scorec = scorec + num1
        alert(`${num1} is the new number, ${scorec} is the computer's score.`);

    }   while (scorec < 16)

    alert(`The computer has reached ${scorec} and will no longer draw.`)

    if(scorec = 20){
        alert("the computer has gone over 20; you win automatically!")
        oscrorep = oscorec + 1
        alert(`Overall score is YOU: ${oscrorep} COMPUTER: ${oscorec}.`)
        var play = prompt("would you like to play again? type y/n")
        if (play = "n") {
            alert(`Final scores! YOU: ${oscrorep} COMPUTER: ${oscorec} - thank you for playing BOOTLEG BLACKJACK!`)
            break
        }
    } else {
        alert("you and the computer are both under 20.")
        if(scorep > scorec) {
            alert(`you win with ${scorep}! Computer loses with ${scorec}`)
            oscorep = oscorep + 1
            alert(`Final scores! YOU: ${oscorep} COMPUTER: ${oscorec}.`)
            var play = prompt("Would you like to play again? Type y/n")
            if(play == "n"){
                alert(`Final scores! YOU: ${oscrorep} COMPUTER: ${oscorec} - thank you for playing BOOTLEG BLACKJACK!`)
                break
            }
        } else if (scorep <scorec) {
            alert(`you lose with ${scorep}. Computer wins with ${scorec}!`)
            oscorec = oscorec + 1
            alert(`Overall score is YOU: ${oscorep} COMPUTER: ${oscorec}.`)
            var play = prompt("would you like to play again? Type y/n")
            if (play = "n") {
                alert(`you are tied, no points given`)
                alert(`Overall score is YOU: ${oscrorep} COMPUTER: ${oscorec}.`)
                var play = prompt("Would you like to play again? Type y/n")
                if(play == "n"){
                    alert(`Final scores! YOU: ${oscrorep} COMPUTER: ${oscorec} - thank you for playing BOOTLEG BLACKJACK!`)
                    break
                }
            }
        }
    }
} while(play == "y")

