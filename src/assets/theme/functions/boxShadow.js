
function boxShadow(offset = [], radius = [], color, inset = "") {
  const [x, y] = offset;
  const [blur, spread] = radius;

  return `${inset} ${x / 16}rem ${y / 16}rem ${blur / 16}rem ${spread / 16}rem ${color}`;
}

export default boxShadow;
