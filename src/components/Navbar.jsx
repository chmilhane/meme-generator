import React from "react";
import Button from "./Button";

export default class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [
        {
          text: "API",
          to: "https://imgflip.com/api"
        },
        {
          text: "GitHub",
          to: "https://github.com/chmilhane/meme-generator"
        }
      ]
    };
  }

  render() {
    const { items } = this.state;

    return (
      <div className="flex justify-between p-4 bg-purple-400 shadow items-center">
        <div className="flex">
          <h1 className="font-bold mt-1 text-white">Meme Generator</h1>
        </div>
        <div className="flex">
          {items.map((item, i) => {
            return (
              <a key={i} className="ml-2" href={item.to} target={item.target || "_blank"}>
                <Button text={item.text} />
              </a>
            );
          })}
        </div>
      </div>
    );
  }
};