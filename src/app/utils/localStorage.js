export function getLocalFollowingUsers(idUser) {
    const storageKey = `following-${idUser}`;
    return JSON.parse(localStorage.getItem(storageKey)) || [];
}

export function setLocalFollowingUsers(idUser, users) {
    const storageKey = `following-${idUser}`;
    localStorage.setItem(storageKey, JSON.stringify(users));
}

export function getLocalMessages() {
    return (
        Object.keys(localStorage).reduce((arr, key) => {
            if (key.startsWith(`messages-`)) {
                arr = [...arr, ...(JSON.parse(localStorage.getItem(key)) || [])];
            }
            return arr;
        }, []) || []
    );
}

export function getLocalMessagesFromUser(idUser) {
    const storageKey = `messages-${idUser}`;
    return JSON.parse(localStorage.getItem(storageKey)) || [];
}

export function storeLocalMessage(message, idUser) {
    const storageKey = `messages-${idUser}`;
    const current = getLocalMessagesFromUser(idUser);
    localStorage.setItem(storageKey, JSON.stringify([message, ...current]));
}
