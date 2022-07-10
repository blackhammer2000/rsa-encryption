/////////RSA ENCRYPTION KEY GENERATOR///////////////////////////

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

  const encryptionNumber = coPrimeNumbers.find((number) => {
    if (product_N % number !== 0 && fineFactor % number !== 0) return number;
  });

  return [encryptionNumber, product_N, fineFactor];
}
const encryptionKey = generateEncryptionKey(2, 7);
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

///////////////////FUNCTION THAT ENCRYPTS THE ASCII CODE OF EVERY CHARACTER////////////////////////////////

const encryptAsciiCode = (asciiCode, encryptionKey) => {
  const encryptedAsciiCode = Math.ceil(
    Math.pow(asciiCode, encryptionKey[0]) % encryptionKey[1]
  );
  return encryptedAsciiCode;
};

const eCode = encryptAsciiCode(10, encryptionKey);
console.log(eCode);

///////////////////FUNCTION THAT DECRYPTS THE ASCII CODE OF EVERY CHARACTER////////////////////////////////

const decryptAsciiCode = (asciiCode, decryptionKey) => {
  const decryptedAsciiCode = Math.ceil(
    Math.pow(asciiCode, decryptionKey[0]) % decryptionKey[1]
  );

  return decryptedAsciiCode;
};

const dCode = decryptAsciiCode(eCode, decryptionKey);
console.log(dCode);

/////////////////////////MAIN ENCRYPTION FUNCTION////////////////////////////////

const encrypt = (message, encryptionKey, encryptAsciiCode) => {
  const messageArray = message.split("");
  let encryptedAsciiCodes = [];
  let encryptedCharacters = [];

  messageArray.forEach((character) => {
    const asciiCode = character.charCodeAt();
    const encryptedAsciiCode = encryptAsciiCode(asciiCode, encryptionKey);
    const encryptedCipherCharacter = String.fromCharCode(encryptedAsciiCode);

    encryptedAsciiCodes.push(encryptedAsciiCode);
    encryptedCharacters.push(encryptedCipherCharacter);
  });

  return encryptedAsciiCodes;
};

const testMessage = "a";
console.log(testMessage.charCodeAt());
const testEncryption = encrypt(testMessage, encryptionKey, encryptAsciiCode);
console.log(testEncryption);

/////////////////////MAIN DECRYPTION FUNCTION///////////////////////////////

const decrypt = (encryptedCodes, decryptionKey, decryptAsciiCode) => {
  let decryptedAsciiCodes = [];
  let decryptedCharacters = [];

  encryptedCodes.forEach((code) => {
    const decryptedCode = decryptAsciiCode(code, decryptionKey);
    const decryptedCipherCharacter = String.fromCharCode(decryptedCode);

    decryptedAsciiCodes.push(decryptedCode);
    decryptedCharacters.push(decryptedCipherCharacter);
  });

  return decryptedAsciiCodes;
};

const testDecryption = decrypt(testEncryption, decryptionKey, decryptAsciiCode);
console.log(testDecryption);
