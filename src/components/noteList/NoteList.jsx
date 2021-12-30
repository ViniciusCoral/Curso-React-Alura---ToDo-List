import React, { Component } from "react";
import NoteCard from "../noteCard/NoteCard";

import "./NoteList.css"

class NoteList extends Component {

    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <ul className="note-list">
                {
                    this.props.notes.map((note, index) => {
                        return (
                            <li className="note-list-item" key={index}>
                                {/* <div>{category}</div> */}
                                <NoteCard title={note.title} text={note.text}/>
                            </li>
                        );
                    })
                }
            </ul>
        );
    }

}

export default NoteList;