function getActualFrqSums(word) {
    let count;
    let letterAmount = new Map();
    let frqSum = 0;

    for (let i = 0; i < word.length; i++) {
        if (!letterAmount.has(word[i])) {
            letterAmount.set(word[i], 0);
        }
        count = letterAmount.get(word[i]);
        letterAmount.set(word[i], count + 1);
    }
    for (let [k, v] of letterAmount) {
        letterAmount.set(k, v / word.length);
    }
    return letterAmount;  //частоты букв
}


function calculateShannonEntropy(numberMap) {
    let totalCount = numberMap.size;

    let entropy = 0;
    numberMap.forEach((value) => {
      const probability = value / totalCount;
      entropy -= probability * Math.log2(probability);
    });
  
    return entropy;
  }

  
let word = "abrakadabra";

console.log(getActualFrqSums(word)); //считаем таблицу частот букв строки

console.log(calculateShannonEntropy(getActualFrqSums(word))); //считаем энтропию для строки