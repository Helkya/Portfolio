export const get = (selection) => {
  const elements = [...document.querySelectorAll(selection)];
  if (elements.length > 1) return elements;

  if (selection.startsWith(1)) {
    selection = selection.slice(1, selection.length);
  }

  const element = document.querySelector(selection);
  if (element) return element;
  throw new Error(`"${selection}" not found`);
};
