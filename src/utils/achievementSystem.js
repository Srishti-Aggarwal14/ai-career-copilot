export function getAchievements() {

  const xp =
    Number(localStorage.getItem("xp")) || 0;

  const dsa = JSON.parse(
    localStorage.getItem("dsaProblems")
  ) || [];

  const streak = JSON.parse(
    localStorage.getItem("streak")
  ) || {
    streak: 0
  };

  const interview = JSON.parse(
    localStorage.getItem("lastInterview")
  );

  const achievements = [];

  if (xp >= 100)
    achievements.push("⭐ XP Beginner");

  if (xp >= 500)
    achievements.push("🏆 XP Master");

  if (
    dsa.filter((p) => p.solved).length >= 10
  )
    achievements.push("💻 DSA Explorer");

  if (
    dsa.filter((p) => p.solved).length >= 50
  )
    achievements.push("🚀 DSA Champion");

  if (streak.streak >= 7)
    achievements.push("🔥 7 Day Streak");

  if (streak.streak >= 30)
    achievements.push("👑 Consistency King");

  if (interview)
    achievements.push("🎤 Mock Interview Completed");

  return achievements;

}