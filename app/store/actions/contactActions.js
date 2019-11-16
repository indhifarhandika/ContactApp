let currentID = 0

export const addContact = contact => {
    const { name, phone } = contact
    currentID = currentID + 1

    return {
        type: 'ADD_CONTACT',
        id: currentID,
        name,
        phone
    }
}

export const removeContact = id => {
    return {
        type: 'REMOVE_CONTACT',
        id
    }
}