const posts = [{ title: 'Post One', body: 'This is post one', createdAt: new Date().getTime() }, { title: 'Post Two', body: 'This is post two', createdAt: new Date().getTime() }]

let intervalId;

function getPosts() {

    clearInterval(intervalId)
    intervalId = setInterval(() => {

        let output = ""
        posts.forEach((post, index) => {
            output += `<li>${post.title} - last updated ${Math.floor((new Date().getTime() - post.createdAt) / 1000)}seconds ago</li> `
        });
        document.body.innerHTML = output;

    }, 1000)

}

function createPost(post, callback, callback1) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push({ ...post, createdAt: new Date().getTime() });
            callback();
            callback1();
            posts.forEach(element => {
                console.log(element)
            });
            const error = false;
            if (!error)
                resolve();
            else
                reject()

        }, 1000);
    })

}



function deletePost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            if (posts.length != 0) {
                posts.pop();
                resolve('post deleted successfully')
            }

            else {
                reject('Error: There is no any post to delete')
            }
        }, 3000)
    })
}

function updateUsersLastActivityTime() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log(`User's last activity time is ${new Date()}`)
            resolve(`updated`);
        }, 1000)
    })
}


// creating third post,delete these three posts then create another post and delete it too.
// here we have handeled dependent promises by using promise.then() 

// createPost({ title: 'Post Three', body: 'This is post three' }, getPosts, updateUsersLastActivityTime)
//     .then(deletePost)
//     .then(deletePost)
//     .then(deletePost)
//     .then(() => { createPost({ title: 'Post Four', body: 'This is Post four' }, getPosts, updateUsersLastActivityTime) })
//     .then(deletePost).then(deletePost).catch((error) => { console.log(error) })


// above code we can write using async await 
async function init() {
    await createPost({ title: 'Post Three', body: 'This is post three' }, getPosts, updateUsersLastActivityTime)
    await deletePost()
    await deletePost()
    await deletePost()
    await createPost({ title: 'Post Four', body: 'This is Post four' }, getPosts, updateUsersLastActivityTime)
    // await deletePost()
    await deletePost()

}

init().then((values) => { console.log('success') }).catch((error) => { console.log(error) })






