export default function Template(props) {
  return (
    <div className="flex flex-col transition ease-in-out hover:shadow-lg p-4 rounded-md bg-white border-0 border-purple-400 shadow">
      <img className="rounded-md" src={props.template.url} alt={props.template.name}></img>
      <div className="flex flex-col mt-4">
        <h1 className="font-semibold">{props.template.name}</h1>
        <h1 className="text-gray-400">{props.template.boxCount} Boxes</h1>
      </div>
    </div>
  );
}