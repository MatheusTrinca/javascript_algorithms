function search(string, frag) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < frag.length; j++) {
      if (frag[j] !== string[i + j]) {
        break;
      }
      if (j === frag.length - 1) {
        count++;
      }
    }
  }
  return count;
}

const string = 'Eu comi arroomiz e feijao';
const frag = 'omi';

console.log(search(string, frag));
