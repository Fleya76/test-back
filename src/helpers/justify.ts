/** Justify a text content with a number parameter */
const justify = (text: string, length: number = 80) => {
  const result = [];
  const textSplit = text.split(' ');

  if (text.length < length) {
    return text;
  }

  let line = '';
  while (line.length < length && textSplit.length !== 0) {
    const word = textSplit[0];
    if (word.length + line.length + 1 < length) {
      line = line.length === 0 ? word : `${line} ${word}`;
      textSplit.shift();
    } else if (line.length !== 0) {
      result.push(`${line}\n`);
      line = '';
    } else {
      textSplit.shift();
      result.push(word);
    }
  }
  if (line.length !== 0) {
    result.push(`${line}`);
  }
  return result.join('');
};

export default justify;
