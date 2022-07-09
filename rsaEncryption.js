function generateEncryptionKey(standard1, standard2) {
  const product_N = standard1 * standard2;
  const fineFactor = (standard1 - 1) * (standard2 - 1);

  let coPrimeNumbers = [];

  for (let number = 1; number <= fineFactor; number++) {
    if (
      number % standard1 !== 0 &&
      number % standard2 !== 0 &&
      fineFactor % number !== 0
    )
      coPrimeNumbers.push(number);
  }

  // console.log(coPrimeNumbers);

  const encryptionNumber = coPrimeNumbers.find((number) => {
    if (product_N % number !== 0 && fineFactor % number !== 0) return number;
  });

  return [encryptionNumber, product_N, fineFactor];
}
let encryptionKey = generateEncryptionKey(2, 7);
console.log(encryptionKey);

/////////////RSA DECRYPTION KEY GENERATOR////////////////////////

const generateDecryptionKey = (encryptionKey) => {
  let decryptionKey = 1;

  while (decryptionKey) {
    if (
      (decryptionKey * encryptionKey[0]) % encryptionKey[2] === 1 &&
      decryptionKey !== encryptionKey[0]
    )
      return [decryptionKey, encryptionKey[1]];
    decryptionKey++;
  }
};

const decryptionKey = generateDecryptionKey(encryptionKey);
console.log(decryptionKey);

//////////////////////////////////

// const encryptMessage = (data, encryptionKey) => {
//   const encryptedData = Math.pow(data, encryptionKey[0]) % encryptionKey[1];
//   return encryptedData;
// };

// const message = encryptMessage(2, encryptionKey);
// console.log(message);

//////////////////////////////////

// const decryptMessage = (data, decryptionKey) => {
//   const decryptedData = Math.ceil(
//     Math.pow(data, decryptionKey[0]) % decryptionKey[1]
//   );
//   return decryptedData;
// };

// const dMessage = decryptMessage(message, decryptionKey);
// console.log(dMessage);
