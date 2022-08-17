export default function Child({ handleClick, thisName, value }) {
  return (
    <div>
      <input
        type="radio"
        name={thisName}
        onClick={(event) => handleClick(value)}
      />
    </div>
  );
}
