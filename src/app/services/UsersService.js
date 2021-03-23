import data from 'mocks/users.json';
import { getLocalFollowingUsers, setLocalFollowingUsers } from 'utils/localStorage';

export function getFollowingUsers(idUser) {
    if (!idUser) return Promise.reject(`No user to search`);

    // maybe not the best solution, but we don't have DB to make a query with joins
    const user = data.find((user) => user.id === idUser);
    if (!user) return Promise.reject(`User doesn't exist`);

    // we need to get also de localFollowing
    const localFollowing = getLocalFollowingUsers(idUser);
    const following = [...user.following, ...localFollowing];

    return Promise.resolve(
        following.reduce((array, id) => {
            const follow = data.find((user) => user.id === id);
            if (follow) array.push(follow);
            return array;
        }, []) || [],
    );
}

export function searchUsers(text, authIdUser) {
    const loggedUser = data.find((user) => user.id === authIdUser);

    // we need to get also de localFollowing
    const localFollowing = getLocalFollowingUsers(authIdUser);

    const followedUsers = [authIdUser, ...localFollowing, ...loggedUser.following];
    const finalText = text?.toLowerCase() || '';
    return Promise.resolve(
        data.reduce((array, user) => {
            const isMatch = finalText
                ? user.username.toLowerCase().indexOf(finalText) !== -1 ||
                  user.firstName.toLowerCase().indexOf(finalText) !== -1 ||
                  user.lastName.toLowerCase().indexOf(finalText) !== -1
                : true;
            if (isMatch && !followedUsers.includes(user.id)) {
                array.push(user);
            }
            return array;
        }, []),
    );
}

export function followUser(idUser, authIdUser) {
    if (!idUser) return Promise.reject('A user to follow is needed');
    if (!authIdUser) return Promise.reject('User not authenticated');

    // we store the followed users in localStorage because we don't have DB
    const localFollowing = getLocalFollowingUsers(authIdUser);
    setLocalFollowingUsers(authIdUser, [idUser, ...localFollowing]);
}

export function getUserInfo(username) {
    if (!username) return Promise.reject('Non selected user');

    return Promise.resolve(data.find((user) => user.username === username) || null);
}
