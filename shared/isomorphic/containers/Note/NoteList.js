import React from 'react';
import { timeDifference } from '@iso/lib/helpers/utility';
import Button from '@iso/components/uielements/button';
import { InputSearch } from '@iso/components/uielements/input';
import { NoteListWrapper } from './Note.styles';
import Scrollbars from '@iso/components/utility/customScrollBar';

function filterNotes(notes, search) {
  search = search.toUpperCase();
  if (search) {
    return notes.filter(note => note.note.toUpperCase().includes(search));
  }
  return notes;
}
export default function(props) {
  const [search, setSearch] = React.useState('');

  function singleNote(note) {
    const { selectedId, deleteNote, changeNote, colors } = props;

    const activeClass = selectedId === note.id ? 'active' : '';
    const onChange = () => changeNote(note.id);
    const onDelete = () => deleteNote(note.id);
    return (
      <div className={`isoList ${activeClass}`} key={note.id}>
        <div
          className="isoNoteBGColor"
          style={{ width: '5px', background: colors[note.color] }}
        />
        <div className="isoNoteText" onClick={onChange}>
          <h3>{note.note}</h3>
          <span className="isoNoteCreatedDate">
            {timeDifference(note.createTime)}
          </span>
        </div>
        <Button
          className="isoDeleteBtn"
          icon="close"
          type="default"
          onClick={onDelete}
        />
      </div>
    );
  }
  function onChange(event) {
    setSearch(event.target.value);
  }
  const notes = filterNotes(props.notes, search);
  return (
    <NoteListWrapper className="isoNoteListWrapper">
      <InputSearch
        placeholder="Search Notes"
        className="isoSearchNotes"
        value={search}
        onChange={onChange}
      />
      <div className="isoNoteList">
        {notes && notes.length > 0 ? (
          <Scrollbars style={{ height: 'calc(100vh - 70px)' }}>
            {notes.map(note => singleNote(note))}
          </Scrollbars>
        ) : (
          <span className="isoNoResultMsg">No note found</span>
        )}
      </div>
    </NoteListWrapper>
  );
}
