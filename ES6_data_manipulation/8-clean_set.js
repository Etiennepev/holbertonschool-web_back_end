export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') {
    return '';
  }
  const endString = [];
  set.forEach((value) => {
    if (typeof value === 'string' && value.startsWith(startString)) {
      endString.push(value.slice(startString.length));
    }
  });
  return endString.join('-');
}
