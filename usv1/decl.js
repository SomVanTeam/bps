const function gmnotifdecl(message, timeout) {
    const config = {
        text: message,
        title: "VYPASS",
        silent: true,
    };
    if (timeout) config.timeout = timeout*1000;
    GM_notification(config);
}
const gmsleepdecl = (ms) => new Promise(resolve => setTimeout(resolve, ms));
const gmcurrentURLdecl = window.location.href;
