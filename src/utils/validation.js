const validator = require("validator");

const validateSchema = (req) => {
  const { firstName, lastName, email, password } = req.body || {};

  if (!firstName || !lastName) {
    throw new Error("Enter Valid Name");
  } else if (!validator.isEmail(email)) {
    throw new Error("Enter Valid email");
  } else if (!validator.isStrongPassword(password)) {
    throw new Error("Enter Strong Password");
  }

  const allowingFields = ["firstName", "lastName", "email", "password"];

  const inValidFields = Object.keys(req.body).filter(
    (item) => !allowingFields?.includes(item),
  );
  if (inValidFields?.length > 0) {
    throw new Error(`Invalid Fields: ${inValidFields.join(",")}`);
  }
};

const validateProfileEditFields = (req) => {
  const { firstName, lastName, about, age, gender, skills } = req.body;

  if (skills?.length > 2) {
    throw new Error("Skills must be less than or equal two");
  }

  const allowedFields = [
    "firstName",
    "lastName",
    "about",
    "age",
    "gender",
    "skills",
  ];

  const inValidFields = Object.keys(req.body).filter((key) =>
    !allowedFields?.includes(key),
  );

  if(inValidFields?.length > 0) {
    throw new Error(`Invalid fields: ${inValidFields.join(',')}`)
  }

  return true
};

module.exports = {
  validateSchema,
  validateProfileEditFields
};
