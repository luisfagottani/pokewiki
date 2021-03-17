const progressBarColor = (progress) => {
  if (progress < 60) {
    return 'blue';
  } else if (progress >= 60 && progress <= 70) {
    return 'yellow';
  } else {
    return 'red';
  }
};

export { progressBarColor };
