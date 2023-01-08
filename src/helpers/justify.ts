/** Justify a text content with a number parameter */
const justify = (text: string, length: number = 80) => {
  const result = [];
  const textSplit = text.split(' ');

  if (text.length < length) {
    return text;
  }

  let line = '';
  // Justify until all words is parsed.
  while (line.length < length && textSplit.length !== 0) {
    const word = textSplit[0];
    if (word.length + line.length + 1 < length) {
      // Trigger if the length of the word, the line and a space is lower than the number used to justify the content.
      line = line.length === 0 ? word : `${line} ${word}`;
      textSplit.shift();
    } else if (line.length !== 0) {
      // Trigger if the line is full.
      result.push(`${line}\n`);
      line = '';
    } else {
      // Trigger at the end.
      textSplit.shift();
      result.push(word);
    }
  }
  if (line.length !== 0) {
    // Trigger if we have only one word with a length upper than the justify number.
    result.push(`${line}`);
  }
  return result.join('');
};

export default justify;
