
function linkvrts(link) {
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
