const encrypt = (data, standard1, standard2) => {
  const encryptedData = Math.pow(data, standard1) % standard2;
  return encryptedData;
};

const decryptedMessage = (data, standard1, standard2) => {
  const decryptedData = Math.ceil(Math.pow(data, standard1) % standard2);
  return decryptedData;
};

const eMessage = encrypt(2, 5, 14);
const dMessage = encrypt(eMessage, 20, 14);

console.log(eMessage, dMessage);

// const formula =  19d (%ff) = 1
