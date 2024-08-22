var s_e = true
if (document.title == 'Just a moment...') {
    return;
}

function notif(message, timeout) {
    const config = {
        text: message,
        title: "VYPASS",
        silent: true,
    };
    if (timeout) config.timeout = timeout;
    GM_notification(config);
}

if (s_e!=true) {
    return;
}
