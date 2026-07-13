export function updateStreak() {

  const today = new Date().toDateString();

  const streakData = JSON.parse(
    localStorage.getItem("streak")
  ) || {
    streak: 0,
    lastLogin: ""
  };

  if (streakData.lastLogin === today) {

    return {
        ...streakData,
        newDay: false
    };

}

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  if (streakData.lastLogin === yesterday.toDateString()) {

    streakData.streak++;

  } else {

    streakData.streak = 1;

  }

  streakData.lastLogin = today;
  streakData.newDay = true;

  localStorage.setItem(
    "streak",
    JSON.stringify(streakData)
  );

  return streakData;
}

export function getStreak() {

  return JSON.parse(
    localStorage.getItem("streak")
  ) || {
    streak: 0,
    lastLogin: ""
  };

}