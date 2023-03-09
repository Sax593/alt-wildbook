export default function Skill({ name, votes }) {
  return (
    <li>
      {name}
      <span className="votes">{votes}</span>
    </li>
  );
}
