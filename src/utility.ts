export const getDateDifference = (incoming: string) => {
  const datePrevious = new Date(incoming).getTime();
  const dateNow = new Date().getTime();
  let delta = Math.abs(dateNow - datePrevious) / 1000;

  let days = Math.floor(delta / 86400);
  if (days) {
    return `${days} days`;
  }
  delta -= days * 86400;

  let hours = Math.floor(delta / 3600) % 24;
  if (hours) {
    return `${hours} hrs`;
  }
  delta -= hours * 3600;

  let minutes = Math.floor(delta / 60) % 60;
  if (minutes) {
    return `${minutes} mins`;
  }
  delta -= minutes * 60;

  let seconds = delta % 60;
  return `${seconds.toFixed(0)} seconds`;
};
