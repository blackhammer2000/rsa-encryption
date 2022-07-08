function generateEncryptionKey(standard1, standard2) {
  const product_N = standard1 * standard2;
  const fineFactor = (standard1 - 1) * (standard2 - 1);

  let coPrimeNumbers = [];

  for (let number = 1; number <= product_N; number++) {
    if (
      number % standard1 !== 0 &&
      number % standard2 !== 0 &&
      product_N % number !== 0
    )
      coPrimeNumbers.push(number);
  }

  const encryptionNumber = coPrimeNumbers.find((number) => {
    if (product_N % number !== 0 && fineFactor % number !== 0) return number;
  });

  return [encryptionNumber, product_N, fineFactor];
}

let encKey = generateEncryptionKey(2, 7);
console.log(encKey);

/////////////RSA DECRYPTION KEY GENERATOR////////////////////////

const generateDecryptionKey = (encryptionKey, fineFactor) => {
  // formula = (encryptionKey * decryptionKey) % finefactor = 1

  let decryptionKey = 1;

  while (((decryptionKey * encryptionKey) % fineFactor) - 1 === 0) {
    decryptionKey++;
  }
  return decryptionKey;
};

console.log(generateDecryptionKey(encKey[0], encKey[2]));
//////////////////////////////////

// const encrypt = (data, encryptionKey) => {
//   const encryptedData = Math.pow(data, encryptionKey[0]) % encryptionKey[1];
//   return encryptedData;
// };

//////////////////////////////////

// const decryptedMessage = (data, encryptionKey) => {
//   const decryptedData = Math.ceil(Math.pow(data, encryptionKey[0]) % encryptionKey[1]);
//   return decryptedData;
// };
