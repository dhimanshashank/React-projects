import styles from "./ButtonsContainer.module.css";

function Buttons() {
  const buttonName = [
    "AC",
    "+/-",
    "%",
    "/",
    "7",
    "8",
    "9",
    "x",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "0",
    ".",
    "=",
  ];
  return (
    <>
      <div className={`${styles.buttonContainer} container text-center`}>
        {buttonName.map((buttonName) => (
          <button key={buttonName} className={`${styles.button}`}>
            {buttonName}
          </button>
        ))}
      </div>
    </>
  );
}

export default Buttons;
