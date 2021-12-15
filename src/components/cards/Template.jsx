export default function Template(props) {
  return (
    <div className="flex flex-col transition ease-in-out hover:shadow-lg p-4 rounded-md bg-white border-0 border-purple-400 shadow">
      <img className="rounded-md" src={props.template.url} alt={props.template.name}></img>
      <h1>{props.template.name}</h1>
    </div>
  );
}