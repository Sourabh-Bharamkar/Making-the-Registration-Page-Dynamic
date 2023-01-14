
// const person3PromiseToShowTicketWhenWifeArrives = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('ticket'), 3000);
// });

// const getPopcorn = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('popcorn'), 3000);
// });

// const addButter = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('butter'), 3000);
// });

// const getColdDrinks = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('cold drinks')
//     }, 3000)
// })

// person3PromiseToShowTicketWhenWifeArrives.then((ticket) => {
//     console.log(`wife: i have the ${ticket}`);
//     console.log(`Husband:we should go in now`);
//     console.log(`Wife: "i am hungry"`);
//     return getPopcorn
// }).then((popcorn)=>{
//     console.log(`Husband: here is ${popcorn}`);
//     console.log(`Husband:we should go in now`);
//     console.log(`Wife: "I dont like popcorn without butter!"`);
//     return addButter;
// }).then((butter)=>{
//     console.log(`added ${butter}`);
//     console.log('wife: I want some cold drinks')
//     return getColdDrinks;
// }).then((cold_drinks)=>{
//     console.log(` Husband: here are ${cold_drinks}`);

//     console.log(`Husband:Anything else darling`);
//     console.log(`Wife: lets go we are going to miss the preivew`);
//     console.log(`Husband: thanks for the reminder *grin*`);
//     console.log("person 3 shows ticket")
// })



// the above code using async await is as follows 


console.log('person1 shows ticket');
console.log('person2 shows ticket');

const preMovie = async () => {

    const person3PromiseToShowTicketWhenWifeArrives = new Promise((resolve, reject) => {
        setTimeout(() => resolve('ticket'), 3000);
    });

    const getPopcorn = new Promise((resolve, reject) => {
        setTimeout(() => resolve('popcorn'), 3000);
    });

    const addButter = new Promise((resolve, reject) => {
        setTimeout(() => resolve('butter'), 3000);
    });

    const getColdDrinks = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('cold drinks')
        }, 3000)
    })


    let ticket = await person3PromiseToShowTicketWhenWifeArrives;

    console.log(`wife: i have the ${ticket}`);
    console.log(`Husband:we should go in now`);
    console.log(`Wife: "i am hungry"`);

    let popcorn = await getPopcorn;
    console.log(`Husband: here is ${popcorn}`);
    console.log(`Husband:we should go in now`);
    console.log(`Wife: "I dont like popcorn without butter!"`);

    let butter = await addButter;
    console.log(`added ${butter}`);
    console.log('wife: I want some cold drinks')

    let cold_drinks = await getColdDrinks;
    console.log(` Husband: here are ${cold_drinks}`);


    console.log(`Husband:Anything else darling`);
    console.log(`Wife: lets go we are going to miss the preivew`);
    console.log(`Husband: thanks for the reminder *grin*`);

    return ticket;

};

preMovie().then((t) => console.log(`person3 shows ${t}`));

console.log('person4 shows ticket');
