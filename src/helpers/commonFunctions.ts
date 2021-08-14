export function getFileExtension(filename: string) {
  return filename.slice(((filename.lastIndexOf(".") - 1) >>> 0) + 2);
}

export function getUrlExtension(url: string) {
  const regexMatch = url.match(
    /^https?:\/\/.*[\\\/][^\?#]*\.([a-zA-Z0-9]+)\??#?/
  );
  return regexMatch?.[1] || "";
}
