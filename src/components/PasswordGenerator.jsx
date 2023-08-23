import { useState } from "react";
import { createPassword } from "../functions/createPassword";

const PasswordGenerator = ({ state }) => {
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeAlphabets, setIncludeAlphabets] = useState(false);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(false);

  const { setPassword, setPreviousPasswords, previousPasswords } = state;

  const generatePassword = () => {
    createPassword(
      setPassword,
      setPreviousPasswords,
      includeNumbers,
      includeAlphabets,
      includeSpecialChars,
      previousPasswords
    );
    setIncludeAlphabets(false)
    setIncludeNumbers(false)
    setIncludeSpecialChars(false)
  };

  return (
    <div className="card p-4" style={{ width: "18rem;" }}>
      <div className="options">
        <div className="form-check mb-2">
          <label className="form-check-label">Include Numbers</label>
          <input
            className="form-check-input"
            type="checkbox"
            checked={includeNumbers}
            onChange={() => setIncludeNumbers(!includeNumbers)}
          />
        </div>
        <div className="form-check mb-2">
          <label className="form-check-label">
            <input
              className="form-check-input"
              type="checkbox"
              checked={includeAlphabets}
              onChange={() => setIncludeAlphabets(!includeAlphabets)}
            />
            Include Alphabets
          </label>
        </div>
        <div className="form-check">
          <label className="form-check-label">
            <input
              className="form-check-input"
              type="checkbox"
              checked={includeSpecialChars}
              onChange={() => setIncludeSpecialChars(!includeSpecialChars)}
            />
            Include Special Characters
          </label>
        </div>
      </div>
      <button className="btn btn-success mt-5" onClick={generatePassword}>Generate Password</button>
    </div>
  );
};

export default PasswordGenerator;
