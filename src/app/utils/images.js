import defaultUserImage from 'static/images/default_user.svg';
import loginImage from 'static/images/login_image.png';

export function getDefaultUserPhoto() {
    return defaultUserImage;
}

export function getLoginImage() {
    return loginImage;
}

export function handleOnErrorImageLoad(event) {
    event.currentTarget.onerror = null;
    event.currentTarget.src = defaultUserImage;
}
