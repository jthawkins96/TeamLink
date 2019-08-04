const showForm = (form, toggleModal, setModalTitle, setModalContent, title) => {
    toggleModal(true);
    setModalTitle(title);
    setModalContent(form);
}

export default showForm;