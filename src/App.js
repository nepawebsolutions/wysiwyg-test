import React, { useState, useEffect } from 'react';
import {Editor, EditorState} from './components/draft-js/';
import './App.css';

const App = () => {

  const [editorState, setEditorState] = useState(null)
  const [editor, setEditor] = useState(null);

  useEffect(() => {
    if(editor){
      editor.focus();
    }
  })

  var onChange = (newEditorState) => {
    setEditorState(newEditorState)
  }

  return <>
    <Editor
      ref={setEditor}
      editorState={editorState}
      onChange={onChange}></Editor>
  </>
}

export default App;
