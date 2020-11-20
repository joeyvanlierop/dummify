const randomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const src = (
  minWidth: number,
  minHeight: number,
  maxWidth?: number,
  maxHeight?: number,
  textColor: string = "#888",
  backgroundColor: string = "#ccc"
) => {
  const width = maxWidth ? randomNumber(minWidth, maxWidth) : minWidth;
  const height = maxHeight ? randomNumber(minHeight, maxHeight) : minHeight;
  const sizeString = `${width}×${height}`;
  const fontSize = width / 3.5 / (sizeString.length * 0.3) - sizeString.length;

  return (
    "data:image/svg+xml," +
    encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" width="' +
        width +
        'px" height="' +
        height +
        'px">' +
        '<rect x="0" y="0" width="100%" height="100%" fill="' +
        backgroundColor +
        '"/>' +
        '<line opacity="0.5" x1="0%" y1="0%" x2="100%" y2="100%" stroke="' +
        textColor +
        '" stroke-width="2" />' +
        '<line opacity="0.5" x1="100%" y1="0%" x2="0%" y2="100%" stroke="' +
        textColor +
        '" stroke-width="2" />' +
        '<text stroke="' +
        backgroundColor +
        '" stroke-width="2em" x="50%" y="50%" alignment-baseline="middle" text-anchor="middle" font-size="' +
        fontSize +
        '" font-family="sans-serif">' +
        sizeString +
        "</text>" +
        '<text fill="' +
        textColor +
        '" x="50%" y="50%" alignment-baseline="middle" text-anchor="middle" font-size="' +
        fontSize +
        '" font-family="sans-serif">' +
        sizeString +
        "</text>" +
        "</svg>"
    )
  );
};
