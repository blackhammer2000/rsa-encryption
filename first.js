function generateEncryptionKey(standard1, standard2) {
  const product_N = standard1 * standard2;
  let coPrimeNumbers = [];

  for (let number = 1; number <= product_N; number++) {
    if (
      number % standard1 !== 0 &&
      number % standard2 !== 0 &&
      product_N % number !== 0
    )
      coPrimeNumbers.push(number);
  }

  const fineFunctionOfTheEquation = (standard1 - 1) * (standard2 - 1);

  const encryptionNumber = coPrimeNumbers.find((number) => {
    if (product_N % number !== 0 && fineFunctionOfTheEquation % number !== 0)
      return number;
  });

  return [encryptionNumber, product_N];
}

console.log(generateEncryptionKey(2, 7));

const generateDecryptionKey = (standard1, standard2) => {};
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
