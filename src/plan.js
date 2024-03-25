const PEOPLE = {
  YOHA: 'Yoha',
  LENY: 'Leny',
  SHEL: 'Shel',
};

const CHORES = {
  BREAKFAST: 'desayuno',
  LUNCH: 'almuerzo',
  DINNER: 'cena',
};

const PERIODICITIES = {
  DAILY: 'daily',
};

export const plan = [
  {
    periodicity: PERIODICITIES.DAILY,
    chores: [
      {
        person: PEOPLE.YOHA,
        activity: CHORES.BREAKFAST
      },
      {
        person: PEOPLE.LENY,
        activity: CHORES.LUNCH
      },
      {
        person: PEOPLE.SHEL,
        activity: CHORES.DINNER
      },
    ]
  },
  {
    periodicity: PERIODICITIES.DAILY,
    chores: [
      {
        person: PEOPLE.YOHA,
        activity: CHORES.BREAKFAST
      },
      {
        person: PEOPLE.SHEL,
        activity: CHORES.LUNCH
      },
      {
        person: PEOPLE.LENY,
        activity: CHORES.DINNER
      },
    ]
  },
  {
    periodicity: PERIODICITIES.DAILY,
    chores: [
      {
        person: PEOPLE.LENY,
        activity: CHORES.BREAKFAST
      },
      {
        person: PEOPLE.YOHA,
        activity: CHORES.LUNCH
      },
      {
        person: PEOPLE.SHEL,
        activity: CHORES.DINNER
      },
    ]
  },
  {
    periodicity: PERIODICITIES.DAILY,
    chores: [
      {
        person: PEOPLE.LENY,
        activity: CHORES.BREAKFAST
      },
      {
        person: PEOPLE.SHEL,
        activity: CHORES.LUNCH
      },
      {
        person: PEOPLE.YOHA,
        activity: CHORES.DINNER
      },
    ]
  }
];