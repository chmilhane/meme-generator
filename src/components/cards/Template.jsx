export default function Template(props) {
  return (
    <div className={
      `flex flex-col transition ease-in-out lg p-4 rounded-xl bg-white shadow ${props.selected ? "border-4 shadow-lg border-purple-400" : ""}`
      }>
      <img className="rounded-xl border border-gray-100" src={props.template.url} alt={props.template.name}></img>
      <div className="flex flex-col mt-4">
        <h1 className="font-semibold">{props.template.name}</h1>
        <h1 className="text-gray-400">{props.template.boxCount} Boxes</h1>
      </div>
    </div>
  );
}