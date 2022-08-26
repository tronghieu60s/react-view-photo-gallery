/**
 * @param  {any[]} arr
 */
export function shuffleArr(arr: any[]) {
  let currentIndex = arr.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]];
  }

  return arr;
}

/**
 * @param  {string} filename
 */
export function getFileExtension(filename: string) {
  return filename.slice(((filename.lastIndexOf('.') - 1) >>> 0) + 2);
}

/**
 * @param  {string} url
 */
export function getUrlExtension(url: string) {
  const regexMatch = url.match(/^https?:\/\/.*[\\\/][^\?#]*\.([a-zA-Z0-9]+)\??#?/);
  return regexMatch?.[1] || '';
}
