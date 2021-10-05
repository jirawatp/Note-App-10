import React from 'react';
import { string, number } from 'prop-types';
import DeleteIcon from '@mui/icons-material/Delete';

function Note({
  title, content, id, deleteNote,
}) {
  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button type="button" onClick={() => deleteNote(id)}>
        <DeleteIcon />
      </button>
    </div>
  );
}

Note.propTypes = {
  content: string,
  id: number,
  title: string,
  deleteNote: () => {},
};

Note.defaultProps = {
  content: string,
  id: number,
  title: string,
  deleteNote: () => {},
};

export default Note;
