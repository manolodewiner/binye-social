const 
    FETCH_DATA_ERROR =  'FETCH_DATA_ERROR',
    FETCH_DATA_PENDING = 'FETCH_DATA_PENDING',
    FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';

export function generateProfile(user) {
    localStorage.setItem('user', "new user")

    fetch('http://localhost/profile/', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstParam: 'yourValue',
                secondParam: 'yourOtherValue',
            }),
        }).then((response) => response.json())
        .then((responseJson) => {
            return responseJson.movies;
        })
        .catch((error) => {
            console.error(error);
        });

    return {
        type: 'GENERATE_PROFILE',
        name: user,
        password: 'osuiado5g'
    }
}

export function logout() {
    localStorage.clear()
    window.location.href = '/'
}

export function showProfile() {
    return {
        type: 'SHOW_PROFILE',
        user: 'none'
    }
}

export async function submitProfile(name) {

    // Store to mongoDB
    const profile = {
        name: 'name',
        origin: 'origin',
        history: 'history'
    }
    //await mdb.insert('profile', profile)
    console.log('inserted to mongodb new profile')

    // Redux
    return {
        type: 'CREATE_PROFILE',
        user_name: name
    }
}

export function fetchData() {
    return {
      types: [
        FETCH_DATA_PENDING,
        FETCH_DATA_SUCCESS,
        FETCH_DATA_ERROR,
      ],
      shouldCallAPI: state =>  state.dataArr.length === 0,
      callAPI: async() =>{
        console.log('fetching')
        return await fetch('http://localhost:8080/getProfiles').then(res => res.json())
      }
    }
  }