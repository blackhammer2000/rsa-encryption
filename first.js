const encrypt = (data, standard1, standard2) => {
  const asciiCode = data.charCodeAt();
  const encryptedDataAscii = Math.pow(asciiCode, standard1) % standard2;
  return encryptedDataAscii;
};

const decryptedMessage = (data, standard1, standard2) => {};

// const formula =  19d (%ff) = 1
