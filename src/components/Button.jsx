export default function Button(props) {
  return (
    <div className={"py-2 text-white font-medium px-4 bg-gray-50 text-purple-400 rounded-md" + (props.disabled ? " opacity-50" : "")}>
      {props.text}
    </div>
  );
}