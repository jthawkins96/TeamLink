const checkCookieForUser = props => {
    const lastLoggedIn = localStorage.getItem('lastLoggedIn')
    let currentDate = new Date();
    currentDate.setDate(currentDate.getDate() - 7);

    let username = "";
    let userSignedInFromCookie = false;

    if (lastLoggedIn && new Date(lastLoggedIn) >= currentDate) {
      localStorage.setItem('lastLoggedIn', new Date().toUTCString())
      username = localStorage.getItem('username');
      userSignedInFromCookie = true;
    }

    if (userSignedInFromCookie) {
      props.setUser(username);
    }
}

export default checkCookieForUser;
