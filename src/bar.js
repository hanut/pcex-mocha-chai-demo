const Errors = {
  INVALID_NAME: "Invalid name argument",
  INVALID_NAME_NO_ADMIN: "Name argument cannot be 'admin'",
  INVALID_AGE: "Invalid age argument",
};

module.exports = {
  Bar: function Bar(name, age) {
    if (!name || typeof name !== "string" || name === "") {
      throw new Error(Errors.INVALID_NAME);
    }
    if (!age || typeof age !== "number") {
      throw new Error(Errors.INVALID_AGE);
    }
    if (!(10 <= age <= 80)) {
      throw new Error(Errors.INVALID_AGE);
    }
    if (name === "admin") {
      throw new Error(INVALID_NAME_NO_ADMIN);
    }
    return {
      name,
      age,
    };
  },
};
