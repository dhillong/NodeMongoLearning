console.log('a');
getUser(1,processUserInfo);
console.log('b');

function getUser(id, processUserInfo){
    setTimeout(()=>{
        console.log("got the user from db" + id);
        processUserInfo({id : 1, name : 'Jay'}) 
    }, 2000)
}

function processUserInfo(user){
    console.log("displayUserInfo :User Info :" + user.name);
    getRepos(user.name, displayRepos)
}

function getRepos(username, displayRepos){
    setTimeout(()=>{
        const repos =['repo1','repo2','repo3']
        displayRepos(username, repos);
    }, 2000)
}

function displayRepos(username, repos){
    console.log(`${username} - ${repos}`)
}