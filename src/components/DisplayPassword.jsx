import CopyIcon from "./CopyIcon";
const DisplayPassword = ({ state }) => {
  const { password, copyToClipboard } = state;
  return (
    <div onClick={()=>copyToClipboard(password)}>
      <h5 className="mt-4">Your Generated Password</h5>
      <li className="mt-3">
        {password}
        <span>
          {" "}
          <CopyIcon />
        </span>
      </li>
    </div>
  );
};

export default DisplayPassword;
