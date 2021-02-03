const posts = [
    {title: 'Post one', body: 'this is post one'},
    {title: 'Post two', body: 'this is post two'}
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000)
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        posts.push(post);

        const error = false;

        if(!error) {
            resolve()
        } else {
            reject('error: something went wrong');
        }
    }, 2000);
    });
}

// createPost({title: 'post three', body: 'this is post three'})
//     .then(getPosts)
//     .catch(err => console.log(err));

// Async / Await
// async function init() {
//     await createPost({title: 'post three', body: 'this is post three'});

//     getPosts();
// }
// init();

// Async / Await with fetch
async function fetchUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');

    const data = await res.json()

    console.log(data);
}

fetchUsers();

// promise.all
// const promise1 = Promise.resolve('hello world');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 2000, 'Goodbye')
// })
// const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json());
// Promise.all([
//     promise1,
//     promise2,
//     promise3,
//     promise4
// ]).then((values) => console.log(values));


// let p = new Promise((resolve, reject) => {
//     let a = 1 + 1
//     if (a === 2) {
//         resolve('success')
//     }else {
//         reject('failed')
//     }
// })

// p.then((message) => {
//     console.log('this is then ' + message)
// }).catch((message) => {
//     console.log('this is in catch ' + message);
// })

// const userLeft = false;
// const userWatchingCatMeme = true;

// function watchTutorialPromise() {
//     return new Promise((resolve, reject) => {
//         if (userLeft) {
//             reject({
//                 name: 'User Left',
//                 message: ':('
//             })
//         } else if (userWatchingCatMeme) {
//             reject({
//                 name: 'User Watching Cat Meme',
//                 message: 'webDevsimplified < cat'
//             })
//         } else {
//             resolve('thumbs up and Subscribe')
//         }
//     })
// }

// watchTutorialPromise().then((message) => {
//     console.log('Success: ' + message)
// }).catch((error) => {
//     console.log(error.name + '' + error.message);
// })