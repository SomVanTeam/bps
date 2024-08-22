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
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
var currentURL = window.location.href;
let alpha = new URL(window.location.href).searchParams.get("id"), beta = await (await fetch("https://api-gateway.platoboost.com/v1/authenticators/8/" + alpha)).json();
if (beta.key) return;
let gamma = new URL(window.location.href).searchParams.get("tk");
if (gamma) await sleep(3e3), await (await fetch(`https://api-gateway.platoboost.com/v1/sessions/auth/8/${e}/${a}`, {
    method: "PUT"
})).json().then(async alpha => {
    window.location.assign(alpha.redirect)
}).catch(alpha => {
    alert(alpha)
});
else {
    let epsilon = t.captcha,
        zeta = await fetch("https://api-gateway.platoboost.com/v1/sessions/auth/8/" + alpha, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                captcha: epsilon ? await getTurnstileResponse() : "",
                type: epsilon ? "Turnstile" : ""
            })
         });
    zeta = await zeta.json(), await sleep(1e3);
    let eta = await (await fetch(`https://bypass.rblx.workers.dev/delta-decrypt?url=${encodeURIComponent(n.redirect)}`)).text(),
        theta = new URL(eta).searchParams.get("r"),
        iota = atob(theta);
    window.location.assign(iota)
}
