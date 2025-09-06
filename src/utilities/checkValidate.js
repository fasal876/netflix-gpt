export const checkValidate = (email, password) => {
  const checkEmail = /^\S+@\S+\.\S+$/.test(email);
  const checkPassword =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
      password
    );
  if (!checkEmail) {
    return "Enter a valid email address";
  }
  if (!checkPassword) {
    return "Enter a valid password";
  }
  return null;
};
