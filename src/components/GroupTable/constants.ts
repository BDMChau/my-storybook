const PROGRESS_STATUS = {
  MISSING: -3,
  MISSED: -2,
  LATE_TURN_IN: -1,
  NOT_TURN_IN: 0,
  COMPLETED: 2,
  TURN_IN: 3,
  GRADED: 4,
  REJECTED: 5,
};

const OPTIONS_STATUS = {
  [PROGRESS_STATUS.MISSING]: {
    label: 'Missing',
    hotKey: 'M',
  },
  [PROGRESS_STATUS.MISSED]: {
    label: 'Missed',
  },
  [PROGRESS_STATUS.TURN_IN]: {
    label: 'Turned In',
    hotKey: 'T',
  },
  [PROGRESS_STATUS.LATE_TURN_IN]: {
    label: 'Turned In (Late)',
    hotKey: 'L',
  },
};

const EventKeysCell = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Tab', 'Enter', 'Delete', 'Escape'];

const MappingHotKeys = {
  KeyM: PROGRESS_STATUS.MISSING,
  KeyT: PROGRESS_STATUS.TURN_IN,
  KeyL: PROGRESS_STATUS.LATE_TURN_IN,
};

const warningText = 'Unable to grade as the student was added to the course after the course activity closed.';

const lockText = 'Unable to edit grade after 7 days since the last day of term.';

export { PROGRESS_STATUS, OPTIONS_STATUS, EventKeysCell, MappingHotKeys, warningText, lockText };
