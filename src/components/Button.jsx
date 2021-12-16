export default function Button(props) {
  return (
    <div className={"py-2 font-medium px-4 rounded-md shadow" + (props.disabled ? " opacity-50" : "") + (props.primary ? " bg-purple-400 text-white" : " bg-gray-50 text-purple-400")}>
      {props.text}
    </div>
  );
}