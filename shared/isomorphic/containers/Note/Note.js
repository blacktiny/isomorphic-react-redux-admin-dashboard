import React from 'react';
import { Layout } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import noteActions from '@iso/redux/notes/actions';
import NoteList from './NoteList';
import { ColorChoser } from '@iso/components/';
import Button from '@iso/components/uielements/button';
import IntlMessages from '@iso/components/utility/intlMessages';
import NoteComponentWrapper from './Note.styles';
import { Textarea } from '@iso/components/uielements/input';

const { changeNote, addNote, editNote, deleteNote, changeColor } = noteActions;
const { Header, Content } = Layout;
export default function Notes() {
  const { notes, selectedId, colors, seectedColor } = useSelector(
    state => state.Notes
  );
  const dispatch = useDispatch();
  function updateNote(event) {
    dispatch(editNote(selectedId, event.target.value));
  }
  const selectedNote =
    selectedId !== undefined
      ? notes.filter(note => note.id === selectedId)[0]
      : null;
  return (
    <NoteComponentWrapper className="isomorphicNoteComponent">
      <div style={{ width: '340px' }} className="isoNoteListSidebar">
        <NoteList
          notes={notes}
          selectedId={selectedId}
          changeNote={id => dispatch(changeNote(id))}
          deleteNote={id => dispatch(deleteNote(id))}
          colors={colors}
        />
      </div>
      <Layout className="isoNotepadWrapper">
        <Header className="isoHeader">
          {selectedId !== undefined ? (
            <div className="isoColorChooseWrapper">
              <ColorChoser
                colors={colors}
                changeColor={v => dispatch(changeColor(v))}
                seectedColor={seectedColor}
              />{' '}
              <span>
                <IntlMessages id="notes.ChoseColor" />
              </span>
            </div>
          ) : (
            ''
          )}
          <Button
            type="primary"
            className="isoAddNoteBtn"
            onClick={() => dispatch(addNote())}
          >
            <IntlMessages id="notes.addNote" />
          </Button>
        </Header>
        <Content className="isoNoteEditingArea">
          {selectedId !== undefined ? (
            <Textarea
              className="isoNoteTextbox"
              value={selectedNote.note}
              onChange={updateNote}
              autoFocus
            />
          ) : (
            ''
          )}
          {/*{selectedId !== undefined ? <span>{`created at ${selectedNote.createTime}`}</span> : ''}*/}
        </Content>
      </Layout>
    </NoteComponentWrapper>
  );
}
