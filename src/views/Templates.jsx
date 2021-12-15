import React from "react";
import { getMemes } from "../Meme";
import Template from "../components/cards/Template";

export default class Templates extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoaded: false,
      templates: []
    };
  }

  componentDidMount() {
    getMemes()
      .then(memes => {
        this.setState({ isLoaded: true, templates: memes });
      });
  }

  render() {
    const { isLoaded, templates } = this.state;

    if (!isLoaded) {
      return (<h1>Fetching data...</h1>);
    }

    return (
      <div style={{
        columnCount: "auto",
        columnWidth: "16rem"
      }}>
        {templates.map((meme, i) => {
          return (
            <div className="mb-4 inline-block">
              <Template key={i} template={meme} />
            </div>
          );
        })}
      </div>
    );
  }
}