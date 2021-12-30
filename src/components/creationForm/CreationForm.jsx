import React, { Component } from "react";

import "./CreationForm.css"

class CreationForm extends Component {

    constructor(props) {
        super(props);
        this._title = "";
        this._text = "";
    }

    _handleTitleChange = (e) => {
        e.stopPropagation();
        this._title = e.target.value;
    }

    _handleTextChange = (e) => {
        e.stopPropagation();
        this._text = e.target.value;
    }

    _createNote = (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.props.createNote(this._title, this._text);
    }

    render() {
        return (
            <form className="creation-form"
                onSubmit={this._createNote}
            >
                <input
                    type="text"
                    placeholder="Title"
                    className="creation-form-input"
                    onChange={this._handleTitleChange}
                />
                <textarea
                    rows={15}
                    placeholder="Write your note"
                    className="creation-form-input"
                    onChange={this._handleTextChange}
                />
                <button
                    className="creation-form-input creation-form-submit">
                    Create Note
                </button>
            </form>
        );
    }

}

export default CreationForm;