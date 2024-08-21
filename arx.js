if (document.title == 'Just a moment...') {
    await sleep(2000);
    if (document.title == 'Just a moment...') {
        return;
    }
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

var currentURL = window.location.href;
var newerURL = currentURL.replace('https://linkvertise.com/376138/arceus-x-neo-key-system-1?o=sharing', 'https://lootdest.com/s?qljL');
var pageTitle = document.title;
var arceusapi = "https://spdmteam.com/api/keysystem?step=";
if (currentURL.includes("https://linkvertise.com/376138/arceus-x-neo-key-system-1?o=sharing")) {
    window.location.replace(newerURL);
} else if (pageTitle.includes("NEO") && pageTitle.includes("1")) {
    window.location.href = arceusapi + "1&advertiser=linkvertise&OS=ios";
} else if (currentURL.includes("https://spdmteam.com/key-system-2?hwid=")) {
    window.location.replace("https://loot-link.com/s?mYit");
} else if (pageTitle.includes("NEO") && pageTitle.includes("2")) {
    window.location.replace(arceusapi + "2&advertiser=linkvertise&OS=ios");
} else if (currentURL.includes("https://spdmteam.com/key-system-3?hwid=")) {
    window.location.replace("https://loot-link.com/s?qlbU");
} else if (pageTitle.includes("NEO") && pageTitle.includes("3")) {
    window.location.replace(arceusapi + "3&advertiser=linkvertise&OS=ios");
} else if (currentURL.includes("/key-system-getkey")) {
    alert("Whitelisted successfully!")
}
console.log("Malware bypasser loaded");
