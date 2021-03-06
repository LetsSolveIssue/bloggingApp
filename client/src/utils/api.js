
const baseURL = 'http://13.127.208.242:9000/api/v1'


const signInUserURL = `${baseURL}/usersignin`
const createUserURL = `${baseURL}/usersignup`
const createPostURL = `${baseURL}/post`

const postsURl = `${baseURL}/getallpost`
const deletePostURL = `${baseURL}/deletePost`




const getToken = () => localStorage.getItem('token')

//Fetch api to signin
const signInUser = user => {

    return fetch(signInUserURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        
      },
      credentials: 'include',
      body: JSON.stringify({
        email: user.userEmail,
        password: user.userPassword
      })
    }).then(res => res.json())
      .catch(e => console.log(e))
  }

  //fetch api for signup

  const createUser = user => {
    return fetch(createUserURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        fullName: user.fullName,
        email: user.email,
        password: user.password
      })
    }).then(res => res.json())
  }


  //Fetch api to create post
  const createPost = post => {
    const token = getToken()
    return fetch(createPostURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        title: post.title,
        description: post.description,
      })
    }).then(res => res.json())
  }


  //Api to get all post
  const getPosts = () =>{
   return  fetch(postsURl, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    }).then(res => res.json())

  }

  //Api to delete post
  const deletePost = id =>
  fetch(`${deletePostURL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getToken()}`
    }
  }).then(res => res.json())
  export {signInUser,createUser,createPost,getPosts,deletePost};