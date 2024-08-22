var s_e = true
if (document.title == 'Just a moment...') {
    return;
}
if (s_e!=true) {
    return;
}
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
  gmnotifdecl("Waiting 10 seconds before bypassing...",9)
  await gmsleepdecl(10000)
  try {
    let response = await fetch("https://api.bypass.vip/bypass?url=" + gmcurrentURLdecl);
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
