import React from "react";
import Template from "../components/cards/Template";
import Button from "../components/Button";
import { useFormik } from "formik";

function Modal(props) {
  return (
    <div className="justify-center bg-black bg-opacity-50 items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative w-auto my-6 mx-auto max-w-3xl">
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <div className="p-2 rounded-t-lg bg-purple-400 flex items-center justify-between">
            <h1 className="ml-2 text-white font-semibold mr-8">{props.meme.name} 🎉</h1>
            <button onClick={props.close}>
              <Button text="Close" />
            </button>
          </div>
          <div className="p-4 flex flex-col">
            <img alt={props.meme.name} className="rounded-lg" src={props.meme.data.url}></img>
            {/* <div className="flex mt-4">
              <Button text="Save" primary />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Boxes(props) {
  const [showModal, setShowModal] = React.useState(false);
  const meme = props.store.getState().meme;

  const initialValues = {};
  meme.fields.forEach((field, i) => {
    initialValues[i] = field.text || "";
  });

  const formik = useFormik({
    initialValues,
    onSubmit: values => {
      for (const key of Object.keys(values)) {
        meme.fields[key].setText(values[key]);
      }

      meme.caption()
        .then(response => {
          if (!response.success) return; // TODO: Handle errors

          meme.data = response.data;

          props.store.dispatch({ type: "SET_MEME", value: meme });
          setShowModal(true);
        })
        .catch(console.error);
    },
  });

  return (
    <div>
      <div className="grid grid-cols-4 gap-4">
        <Template template={meme} />
        <div className="flex flex-col">
          <form onSubmit={formik.handleSubmit}>
            <div className="flex flex-col">
              {meme.fields.map((_field, i) => {
                return (
                  <input
                    key={i}
                    id={i}
                    name={i}
                    type="text"
                    placeholder={meme.fields.length === 2 ? (i === 1 ? "Bottom" : "Top") + " text" : "Field #" + (i + 1)}
                    className="mb-2 rounded-md shadow p-2"
                    onChange={formik.handleChange}
                    value={formik.values[i]}
                  />
                );
              })}
            </div>
            <button type="submit">
              <Button primary text="Generate" />
            </button>
            {/* <button className="ml-2" onClick={() => {
              meme.fields.map(field => {
                return field.setText("");
              });
              props.store.dispatch({ type: "SET_MEME", value: meme });
            }}>
              <Button primary text="Reset" />
            </button> */}
          </form>        
        </div>
      </div>
      {showModal && <Modal meme={meme} close={() => setShowModal(false)} />}
    </div>
  );
}