export function Imena() {
  const countries = ["Slovenia", "Spain", "Portugal", "Ireland"];

  return (
    <div>
      {countries
        .filter((x) => x.startsWith("S"))
        .map((x) => (
          <div>{x}</div>
        ))}
    </div>
  );
}
