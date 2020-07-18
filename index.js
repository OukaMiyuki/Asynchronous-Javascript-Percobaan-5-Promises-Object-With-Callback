console.log('Before');

// const p = getUser(1);
// p.then(user => console.log(user));

getUser(1)
    .then(user => getRepositories(user.gitHubUsername)) //check Asynchronous_2
    .then(daftarRepo => getCommit(daftarRepo[0])) //parsing getRepositories result function to get commit check Asynchronous_2 or 3
    .then(commits => console.log('Daftar Commits : ', commits)) //result resolv from calling getCommit on line 8
    .catch(err => console.log('Error : ', err.message)); //if there's any error occur during Asynchronous process, this error function will be called

console.log('After');
function getUser(id){ //no need to use callback parameter
    return new Promise( (resolve, reject) => {
        setTimeout(()=>{
            console.log("Reading user from database...");
            resolve({ id: id, gitHubUsername: 'Testing' });
        }, 2000); //2 seconds
    });
}

function getRepositories(username){
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            console.log('The username ', username);
            resolve(['Repo1', 'Repo2', 'repo3']);
        }, 2000);
    });
}

function getCommit(repositori){
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            console.log('Commits = ', repositori);
            resolve(['Commit 1', 'Commit 2']);
        }, 2000);
    });
}

//That's it, the next will be practicing more with promises object in javascript