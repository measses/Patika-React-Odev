import axios from "axios"

const getData = async function getData(user_id){
    const {data:users} = await axios("https://jsonplaceholder.typicode.com/users/"+user_id);

    const {data:post} = await axios("https://jsonplaceholder.typicode.com/posts/"+user_id);
    //console.log(post)
    const userInfo = {...users,...post}
    console.log(userInfo)
    // console.log(`User-${user_id} Info:`,userInfos)
   
    // console.log(`User-${user_id} Info:`,users); 
    // console.log(`Post-${user_id} Info:`,post);  
}

export default getData;