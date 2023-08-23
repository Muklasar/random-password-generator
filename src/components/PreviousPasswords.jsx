import CopyIcon from "./CopyIcon";

const PreviousPasswords = ({ state }) => {
  const { previousPasswords, copyToClipboard } = state;
  return (
    <div className="card">
      {/* <ul class="list-group list-group-flush">
        <li class="list-group-item">An item</li>
        <li class="list-group-item">A second item</li>
        <li class="list-group-item">A third item</li>
      </ul> */}
      <ul class="list-group list-group-flush">
        {previousPasswords.map((prevPassword, index) => (
          <li
            class="list-group-item"
            key={index}
            onClick={() => copyToClipboard(prevPassword)}
          >
            {prevPassword}
            <span>
              <CopyIcon />
            </span>
          </li>
        ))}
      </ul>
      {/* <ul>
        {previousPasswords.map((prevPassword, index) => (
          <li key={index} onClick={()=>copyToClipboard(prevPassword)}>
            {prevPassword}
            <span>
              <CopyIcon />
            </span>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default PreviousPasswords;
