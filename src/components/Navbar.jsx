import React from 'react';

function Link(props) {
  return (
    <a href={props.to} target={props.target || "_blank"}>
      <div className={`py-2 font-medium ${props.isImportant && "px-4 bg-gray-50 text-purple-400 rounded-md"}`}>
        {props.text}
      </div>
    </a>
  );
} 

export default class Navbar extends React.Component {
  constructor() {
    super();
    this.items = [
      {
        text: "GitHub",
        isImportant: true,
        to: "https://github.com/chmilhane/meme-generator"
      }
    ];
  }

  render() {
    return (
      <div className="flex justify-between p-4 bg-purple-400 shadow items-center">
        <div className="flex">
          <h1 className="font-bold mt-1">Meme Generator</h1>
        </div>
        <div className="flex">
          {this.items.map((item, i) => {
            return (<Link key={i} text={item.text} isImportant={item.isImportant} to={item.to} />);
          })}
        </div>
      </div>
    );
  }
};