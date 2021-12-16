import fetch from "node-fetch";

const API_URL = process.env.REACT_APP_API_URL || "https://api.imgflip.com";

let memesCache = [];
export async function getMemes() {
  if (memesCache.length > 0) return Promise.resolve(memesCache);

  return fetch(API_URL + "/get_memes")
    .then(response => response.json())
    .then(response => {
      if (!response.data) return;
      if (!response.success) return;

      const memes = response.data.memes.map(meme => new Meme(meme));
      memesCache = memes;

      return memes;
    })
    .catch(error => Promise.reject(error));
};

class Field {
  constructor(text) {
    this.text = text || "";
  }

  setText(text) {
    this.text = text;
    return this;
  }
}

export default class Meme {
  constructor({ id, name, url, box_count }) {
    this.id = id;
    this.name = name;
    this.url = url;
    this.boxCount = box_count;
    this.fields = [];
    for (let i = 0; i < this.boxCount; i++) {
      this.fields.push(new Field());
    }
    // this.fields = Array(this.boxCount).fill(new Field());
  }

  async caption() {
    const params = new URLSearchParams();
    params.append("template_id", this.id);
    params.append("username", process.env.REACT_APP_USERNAME);
    params.append("password", process.env.REACT_APP_PASSWORD);

    for (const key of Object.keys(this.fields)) {
      const field = this.fields[key];
      params.append("boxes[" + key + "][text]", field.text);
    }

    return fetch(API_URL + "/caption_image", {
      method: "POST",
      body: params
    })
      .then(response => response.json());
  }
};