import profil from "../assets/profile.png";
import Skill from "./Skill";

export default function Wilder({ name, skills }) {
  return (
    <article className="card">
      <img src={profil} alt="Jane Doe Profile" />
      <h3>{name}</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <h4>Wild Skills</h4>
      <ul className="skills">
        {skills.map((skill) => (
          <Skill name={skill.name} votes={skill.votes} />
        ))}
      </ul>
    </article>
  );
}
