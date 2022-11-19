export default function Button(props) {
  const { color, children, style, handler } = props;

  return (
    <button style={style} onClick={handler}>
      {children}
    </button>
  );
}
