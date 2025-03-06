const SetVisibilityForMultiplyShownMenus = () => {
  console.log(123)
  const elements = document.querySelectorAll(".zoom-in");
  elements.forEach((element) => {
    element.classList.add("hidden");
  });
};

export default SetVisibilityForMultiplyShownMenus;