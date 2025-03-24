export default function appendToEachArrayValue(array, appendString) {
	for (let idx in array) {
	  const value = array[idx];
	  array[idx] = appendString + value;
	  idx++
	}
  
	return array;
  }
