import data from 'mocks/users.json';

export function login(username) {
    if (!username) return Promise.reject();
    // use mockdata to get user data. Here we need a connection to an API
    const user = data.find((user) => user.username === username);
    if (!user) return Promise.reject();
    return Promise.resolve(user);
}
