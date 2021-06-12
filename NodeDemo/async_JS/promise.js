console.log('a');
getUser(1).then(user=>{
        console.log(user.name)
        return getRepos(user.name)
    })
    .then((repos)=>{
        console.log(`Repos  - ${repos}`);
    })  
    .catch(err=>console.log(err.message));

const user1 =getUser(1);    
const user2 = getUser(2);
Promise.all(user1, user2).then((users)=>{
    console.log(users);
}).catch(err=>console.log(err));    


function getUser(id){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("got the user from db for id : " + id);
            resolve({id : id, name : 'Jay'+ id });
        }, 2000)
    }) 
}

function getRepos(username){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const repos =['repo1','repo2','repo3'];
            console.log("returnig repos for user : " + username);
            resolve(repos);
        }, 2000)
    });
}
