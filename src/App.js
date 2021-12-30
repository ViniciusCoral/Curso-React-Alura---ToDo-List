import { Component } from "react";
import CreationForm from "./components/creationForm/CreationForm";
import NoteList from "./components/noteList/NoteList"

import "./assets/index.css"
import "./assets/App.css"

class App extends Component {

  constructor() {
    super();
    
    this.state = {
      notes: []
    }
  }

  createNote = (title, text) => {
    const newNote = {title, text};
    const newNotesArray = [...this.state.notes, newNote];
    const newState = {
      notes: newNotesArray,
    };
    this.setState(newState);
  }

  render() {
      return (
        <section className="content">
          <CreationForm createNote={this.createNote} />
          <NoteList notes={this.state.notes} />
        </section>
      );
  }
}

export default App;
