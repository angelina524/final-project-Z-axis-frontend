const flexJustifyAlign = (justifyContent = 'center', alignItems = 'center') => {
  return `
    display: flex;
    justify-content: ${justifyContent};
    align-items: ${alignItems};
  `
}

export default flexJustifyAlign
