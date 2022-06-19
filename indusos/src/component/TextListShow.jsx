import { dataEmoji } from "../secureAxios/util";

const TextListShow = (props) => {
  const { showData = [] } = props
  return (
    <div >
      <ul>
        {showData.map((data) => {
          const { id, inputText } = data;
          const showListData = dataEmoji(inputText)
          return (
            <li
              key={id}
              style={{
                border: "1px solid",
                textAlign: "center",
                width: "50%",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "15px",
              }}
            >
              {showListData}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default TextListShow;