import { v4 as uuidv4 } from 'uuid';
import { getLocalMessages, storeLocalMessage, getLocalFollowingUsers } from 'utils/localStorage';
import messages from 'mocks/messages.json';
import users from 'mocks/users.json';

export function getMessages(username, isMain = false) {
    if (!username) return Promise.reject('A user is needed');
    const user = users.find((user) => user.username === username);
    if (!user) return Promise.reject('User does not exist');
    const totalMessages = [...getLocalMessages(), ...messages];
    let result;
    if (isMain) {
        // get all messages from himself and followed users
        const includeIds = [user.id, ...user.following, ...getLocalFollowingUsers(user.id)];
        result = totalMessages.filter((message) => includeIds.includes(message.idUser));

        // in order to obtain the needed data for the user of each message,
        // we are searching each user for that here, but THIS IS NOT the desired
        // way to do that. It's better to obtain in a SQL join operation
        // WARNING worst idea ever in real case, we can have a lot of users so
        // this map creation could be too expensive
        const usersMap = users.reduce((map, user) => {
            map[user.id] = user;
            return map;
        }, {});
        result = result.map((message) => ({ ...message, user: usersMap[message.idUser] }));
    } else {
        // return all message from a specific user
        result = totalMessages.filter((message) => message.idUser === user.id);

        // like isMain, we don't need to search for every user of every message
        // because all these messages are from the same user, but we need
        // to add the information in order to obtain the same structure
        result = result.map((message) => ({ ...message, user }));
    }

    // sort the messages descending by timestamp

    return Promise.resolve(
        result.sort((a, b) => {
            if (a.timestamp < b.timestamp) return 1;
            if (a.timestamp > b.timestamp) return -1;
            return 0;
        }),
    );
}

export function createMessage(message, idUser) {
    if (!message) return Promise.reject('No missage to save');
    const objectMessage = {
        id: uuidv4(),
        idUser,
        message,
        timestamp: Math.floor(Date.now() / 1000),
    };
    storeLocalMessage(objectMessage, idUser);
    return Promise.resolve();
}
