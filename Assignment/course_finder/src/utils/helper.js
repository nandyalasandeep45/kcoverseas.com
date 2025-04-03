const deviceWidth = () => {
  const width = window.innerWidth;
  return width <= 768 ? "Mobile" : "Desktop";
};

export { deviceWidth };
