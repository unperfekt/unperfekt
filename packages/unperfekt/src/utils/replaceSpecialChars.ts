// https://ricardometring.com/javascript-replace-special-characters
export const replaceSpecialChars = (str: string) => {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Removes all occurrences of diacritical characters
    .replace(/([^\w]+|\s+)/g, "-") // Replace space and other characters by hyphen
    .replace(/--+/g, "-") // Replaces multiple hyphens by one hyphen
    .replace(/(^-+|-+$)/, "") // Remove extra hyphens from beginning or end of the string
}
