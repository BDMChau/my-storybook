export enum ACTIVITIES {
  ASSIGNMENT = 1,
  PARTICIPATION = 2,
  POP_QUIZ = 3,
  TEST = 4,
  TEST_IN_CLASS = 6,
  LESSON = 5,
}

export enum Status {
  pressing = 'Pressing',
  late = 'Late',
  extra = 'Extra Time',
}

export enum Tabs {
  assigned = 'Assigned',
  done = 'Done',
  missed = 'Missed',
}

export enum EMPTY_PAGE {
  TITLE_ASSIGNED = 'No assigned tasks',
  TITLE_PLANNED = 'Your planned list is empty.',
  SUB_ASSIGNED = 'Check back later for new activity',
  SUB_PLANNED = 'Tips: Planning is a key to get success.',
  IMG_TYPE = 'tasks',
}

export enum PlanTaskStatus {
  done = 1,
  unDone = 2,
}
