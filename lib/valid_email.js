const valid = (email) => {
  // TODO: return true if the `email` string has the right pattern!
  const regex = /\S+@\S+\.\S{2,}/;
  return regex.test(email);
};

module.exports = valid; // Do not remove.
