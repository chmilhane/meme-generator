import React from "react";
import { getMemes } from "../Meme";
import Template from "../components/cards/Template";

export default class Templates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      error: null,
      templates: []
    };
  }

  componentDidMount() {
    getMemes()
      .then(memes => {
        this.setState({ isLoaded: true, templates: memes });
      })
      .catch(error => {
        this.setState({ isLoaded: true, error, templates: undefined });
      });
  }

  render() {
    const { isLoaded, error, templates } = this.state;

    if (!isLoaded) {
      return (<h1>Fetching data...</h1>);
    }

    if (error) {
      return (<h1>An error occurred!</h1>);
    }

    const state = this.props.store.getState();
    return (
      <div style={{
        columnCount: "auto",
        columnWidth: "16rem"
      }}>
        {templates.map((meme, i) => {
          return (
            <div key={i} className="mb-4 inline-block">
              <button className="text-center" onClick={() => this.props.store.dispatch({ type: "SET_MEME", value: meme })}>
                <Template template={meme} selected={+((state.meme ? state.meme.id : 0) === meme.id)} />
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}