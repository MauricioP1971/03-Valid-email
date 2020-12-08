const valid = (email) => {
  // TODO: return true if the `email` string has the right pattern!
  const regex = /\S+@\S+\.\S{2,}/;
  return regex.test(email);
};

console.log(valid("m.parra@hotmail.es"));

module.exports = valid; // Do not remove.
