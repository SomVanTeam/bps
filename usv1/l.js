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
    if (timeout) config.timeout = timeout*1000;
    GM_notification(config);
}

if (s_e!=true) {
    return;
}
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
var currentURL = window.location.href;
function linkspf(link) {
  return new Promise((resolve, reject) => {
    GM.xmlHttpRequest({
      method: "GET",
      url: link,
      headers: { Referer: 'https://linkvertise.com/' },
      onload: response => resolve(response.responseText),
      onerror: error => reject(error)
    });
  });
}
function linkver() {
  notif("Waiting 10 seconds before bypassing...",9)
  await sleep(10000)
  try {
    let response = await fetch("https://api.bypass.vip/bypass?url=" + currentURL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    if (data.result.startsWith("https://")) {
      window.location.href = data.result;
    }
  } catch (e) {
    
  }
}
linkver();
