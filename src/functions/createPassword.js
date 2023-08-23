import { toast } from "react-toastify";

export const createPassword = (
  setPassword,
  setPreviousPasswords,
  includeNumbers,
  includeAlphabets,
  includeSpecialChars,
  previousPasswords
) => {
  const numbers = "0123456789";
  const alphabets = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const specialChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";

  let possibleChars = "";
  if (
    includeNumbers === false &&
    includeAlphabets === false &&
    includeSpecialChars === false
  ) {
    toast.error("Please select one or more checkbox to generate new password");
    return;
  }
  if (includeNumbers) possibleChars += numbers;
  if (includeAlphabets) possibleChars += alphabets;
  if (includeSpecialChars) possibleChars += specialChars;

  let newPassword = "";
  const length = 12; // Change this to desired password length

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * possibleChars.length);
    newPassword += possibleChars[randomIndex];
  }

  setPassword(newPassword);

  // Store the new password in previousPasswords
  setPreviousPasswords((prevPasswords) => [
    newPassword,
    ...prevPasswords.slice(0, 4),
  ]);

  const newPrev = [newPassword, ...previousPasswords.slice(0, 4)];

  // Update local storage
  localStorage.setItem("previousPasswords", JSON.stringify(newPrev));
  toast.success(`New Password Generated`)
};
