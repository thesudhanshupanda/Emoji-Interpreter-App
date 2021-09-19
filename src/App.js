import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😍": " Smiling Face with Heart-Eyes",
  "😂": "face with tear of joy",
  "🙁": "sad",
  "😴": "sleeping face",
  "🤔": "thinking",
  "😊": "Smiling",
  "😑": "annoyance",
  "😳": "disbelief",
  "😔": "sad"
};

var emojiWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function empojiInputhandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "we dont have this in our database";
    }
    setMeaning(meaning);
  }

  function emojiClickhandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>The Emoji Interpreter!</h1>
      <input onChange={empojiInputhandler}></input>
      <h3> {meaning}</h3>
      <h3> Emoji's We Know</h3>
      {emojiWeKnow.map(function (emoji) {
        return (
          <span
            keys={emoji}
            onClick={() => emojiClickhandler(emoji)}
            style={{ fontSize: "2rem", padding: "1rem", cursor: "pointer" }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
