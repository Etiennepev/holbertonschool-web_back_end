export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
	// eslint-disable-next-line
	task = true;
	// eslint-disable-next-line
	task2 = false;
  }

  return [task, task2];
}
