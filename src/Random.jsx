export default function Random(props) {
  const { text, number } = props.fact;
  return (
    <div className="flex items-center gap-2 rounded-sm bg-sky-200 p-1">
      <div className="rounded-sm bg-red-500 p-2 text-2xl drop-shadow-md">
        {number}
      </div>
      <div className="text-sm italic">{text}</div>
    </div>
  );
}
