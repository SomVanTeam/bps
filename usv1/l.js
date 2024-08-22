const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
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
  await sleep(10000)
  try {
    let response = await fetch("https://api.bypass.vip/bypass?url=" + window.location.href);
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
