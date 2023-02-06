const rotateArrow = (arrow: HTMLImageElement) => {
  arrow.style.transform = arrow.style.transform === 'rotate(180deg)' ? 'rotate(0deg)' : 'rotate(180deg)';
};

export default rotateArrow;