const function gmnotifaab(message, timeout) {
    const config = {
        text: message,
        title: "VYPASS",
        silent: true,
    };
    if (timeout) config.timeout = timeout*1000;
    GM_notification(config);
}
