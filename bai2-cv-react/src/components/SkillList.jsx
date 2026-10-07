function SkillList({ skills }) {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <div className="skill" key={skill.name}>
          <div className="skill-top">
            <span>{skill.name}</span>
            <span>{skill.level}%</span>
          </div>
          <div className="progress">
            <div
              className="progress-value"
              style={{ width: `${skill.level}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default SkillList;
