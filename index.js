import readlineSync from 'readline-sync';

const userChoice = readlineSync.question(`Что выбираете, камень, ножницы или бумагу? (слово нужно написать как в выборе) `).toLowerCase();

console.log(`Вы показали ${userChoice}`);

let computerChoice = Math.random();
if (computerChoice < 0.34) {
    computerChoice = 'камень';
} else if (computerChoice < 0.68) {
    computerChoice = 'ножницы';
} else {
    computerChoice = 'бумагу';
};

console.log(`Компьютер показывает ${computerChoice}`);

if (userChoice === computerChoice) {
    console.log('Ничья');
} else if (userChoice === 'камень') {
    if (computerChoice === 'ножницы') {
        console.log('Вы победили');
    } else if (computerChoice === 'бумагу') {
        console.log('Победил компьютер');
    };
} else if (userChoice === 'ножницы') {
    if (computerChoice === 'камень') {
        console.log('Победил компьютер');
    } else if (computerChoice === 'бумагу') {
        console.log('Вы победили');
    };
} else if (userChoice === 'бумагу') {
    if (computerChoice === 'камень') {
        console.log('Вы победили');
    } else if (computerChoice === 'ножницы') {
        console.log('Победил компьютер');
    };
} else {
    console.log('Напишите правильно');
};
 

