import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
import ModalEvents from './ModalEvents';
import notification from '@iso/components/Notification';
import calendarActions from '@iso/redux/calendar/actions';

import { CalendarStyleWrapper } from './Calendar.styles';

const Localizer = momentLocalizer(moment);
const DragAndDropCalendar = withDragAndDrop(Calendar);
const { changeView, changeEvents } = calendarActions;

const mapToRBCFormat = e =>
  Object.assign({}, e, {
    start: new Date(e.start),
    end: new Date(e.end),
  });

const getIndex = (events, selectedEvent) =>
  events.findIndex(event => event.id === selectedEvent.id);

export default function DndCalendar() {
  const { events, view } = useSelector(state => state.Calendar);
  const dispatch = useDispatch();
  const [state, setState] = React.useState({
    view: view,
    modalVisible: false,
    selectedData: undefined,
  });

  const onSelectEvent = selectedData => {
    setState({ ...state, modalVisible: 'update', selectedData });
  };
  const onSelectSlot = selectedData => {
    setState({ ...state, modalVisible: 'new', selectedData });
  };

  const onView = view => {
    dispatch(changeView(view));
  };
  const moveEvent = ({ event, start, end, isAllDay: droppedOnAllDaySlot }) => {
    let allDay = event.allDay;
    if (!event.allDay && droppedOnAllDaySlot) {
      allDay = true;
    } else if (event.allDay && !droppedOnAllDaySlot) {
      allDay = false;
    }

    const updatedEvent = { ...event, start, end, allDay };
    const idx = getIndex(events, updatedEvent);
    const nextEvents = [...events];
    nextEvents.splice(idx, 1, updatedEvent);
    dispatch(changeEvents(nextEvents));

    notification(
      'success',
      'Move event successfully',
      `${event.title} was dropped onto ${event.start}`
    );
  };

  const resizeEvent = ({ event, start, end }) => {
    const nextEvents = events.map(existingEvent => {
      return existingEvent.id === event.id
        ? { ...existingEvent, start, end }
        : existingEvent;
    });

    dispatch(changeEvents(nextEvents));

    notification(
      'success',
      'Resize event successfully',
      `${event.title} was resized to ${start}-${end}`
    );
  };

  const setModalData = (type, selectedData) => {
    const newEvents = [...events];
    const { modalVisible } = state;
    if (type === 'cancel') {
      setState({
        ...state,
        modalVisible: false,
        selectedData: undefined,
      });
    } else if (type === 'delete') {
      const idx = getIndex(newEvents, selectedData);
      if (idx > -1) {
        newEvents.splice(idx, 1);
      }
      dispatch(changeEvents(newEvents));
      setState({
        ...state,
        modalVisible: false,
        selectedData: undefined,
      });
    } else if (type === 'updateValue') {
      setState({ ...state, selectedData });
    } else {
      if (modalVisible === 'new') {
        newEvents.push(selectedData);
      } else {
        const idx = getIndex(newEvents, selectedData);
        if (idx > -1) {
          newEvents[idx] = selectedData;
        }
      }
      dispatch(changeEvents(newEvents));
      setState({
        ...state,
        modalVisible: false,
        selectedData: undefined,
      });
    }
  };

  return (
    <CalendarStyleWrapper className="isomorphicCalendarWrapper">
      <ModalEvents
        modalVisible={state.modalVisible}
        selectedData={state.selectedData}
        setModalData={setModalData}
      />
      <DragAndDropCalendar
        className="isomorphicCalendar"
        selectable
        localizer={Localizer}
        events={events.map(mapToRBCFormat)}
        onEventDrop={moveEvent}
        resizable
        onEventResize={resizeEvent}
        onSelectEvent={onSelectEvent}
        onSelectSlot={onSelectSlot}
        onView={onView}
        defaultView="month"
        defaultDate={new Date()}
        step={60}
      />
    </CalendarStyleWrapper>
  );
}
