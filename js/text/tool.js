export function autoNewLined(text, lineLength) {
  // this is not that much accurate
  const result = [];
  for (let i = 0; i < text.length; i += lineLength) {
    result.push(text.substring(i, i + lineLength));
  }
  return result;
}