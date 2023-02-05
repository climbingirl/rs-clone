import createElement from './element';

const createButton = (title: string, className?: string, commonClassName?: string) => {
  const btn = <HTMLButtonElement>createElement('button', 'button');
  if (className) btn.classList.add(className);
  if (commonClassName) btn.classList.add(commonClassName);
  btn.textContent = title;
  return btn;
};

export default createButton;
