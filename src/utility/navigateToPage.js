const navigateToPage = (isSignedIn, history, path, toggleModal) => {
    if(isSignedIn) {
        history.push(path)
    }
    else
        toggleModal(true)
}

export default navigateToPage;