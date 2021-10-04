// #1a

const mcuShows = [
'Loki',
'What If'
];

// #1b
const starWarsShows = [
'The Mandalorian',
 'The Bad Batch'
];

// #1c
const disneyPlusShows = [
...mcuShows,
...starWarsShows,
'Monsters At Work'
];

// #1d
console.log(disneyPlusShows);

// #2a
const netflixMovies = {
    action: `Extraction`,
    crime: `The Irishman`,
    };

// #2b
const amazonPrimeMovies = {
    action: 'The Tomorrow Show',
    drama: 'One Night In Miami'
};

// #2c
const streamingMovies = {
    ...amazonPrimeMovies,
    ...netflixMovies,
    musical: "Hamilton"
};

// #2d
console.log(streamingMovies);

// #3a
const disneyJunior = ["Mickey Mouse Clubhouse", "Spidey and His Amazing Friends"];

// #3b
const [Mickey,Spidey,] = disneyJunior;

// #3c
console.log(disneyJunior);

// #4a
const avengers = {
    warMachine: "James Rhodes",
    theHulk: "Bruce Banner"
}

// #4b
const { warMachine,theHulk } = avengers;

// #4c
console.log(warMachine,theHulk);

// #4d
const moreAvengers = {
    blackWidow: 'Natasha Romanoff',
    hawkeye: 'Clink Barton',
    ironMan: 'Tony Stark'
}
// #4e
const {nat, ...others} = moreAvengers;

// #4f
console.log(nat,others);

// Bonus
// #5a
// const bonus = {
    // first: [1, 2, 3],
    // second: [4, 5, 6],
    // third: [7, 8, 9]};

    const first  = [1, 2, 3];
    const second = [4, 5, 6];
    const third = [7, 8, 9];
  const all = first.concat(second, third);
  console.log(all);

// #5b
const {
 one = 1,
 two = 2,
 three = 3,
 four = 4,
 five = 5,
 six = 6,
 seven = 7,
 eight = 8,
 nine = 9
 } = all;
   


console.log(all);

