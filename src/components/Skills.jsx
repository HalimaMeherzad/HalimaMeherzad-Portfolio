const skillCards = [
  {
    icon: 'fa-solid fa-code',
    title: 'Front-End',
    skills: [
      { icon: 'devicon-html5-plain colored', label: 'HTML' },
      { icon: 'devicon-css3-plain colored', label: 'CSS' },
      { icon: 'devicon-javascript-plain colored', label: 'JavaScript' },
      { icon: 'devicon-react-original colored', label: 'React' },
      { icon: 'devicon-github-original colored', label: 'Git & GitHub' },
    ],
  },
  {
    icon: 'fa-solid fa-pen-nib',
    title: 'Design',
    skills: [
      { icon: 'devicon-figma-plain colored', label: 'Figma' },
      { icon: 'fa-solid fa-pen-ruler', label: 'UI Design' },
      { icon: 'fa-solid fa-layer-group', label: 'Prototyping' },
      { icon: 'fa-solid fa-object-group', label: 'Wireframing' },
      { icon: 'devicon-photoshop-plain colored', label: 'Photoshop' },
    ],
  },
  {
    icon: 'fa-solid fa-magnifying-glass',
    title: 'SEO',
    skills: [
      { icon: 'fa-solid fa-key', label: 'Keyword Research' },
      { icon: 'fa-solid fa-globe', label: 'On-Page SEO' },
      { icon: 'fa-solid fa-file-lines', label: 'Content Optimization' },
      { icon: 'fa-solid fa-tag', label: 'Meta Tags' },
    ],
  },
]

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills-header">
        <h2>
          My <span>Skills </span>
        </h2>
        <p>
          my skills are those I have learned and developed <br /> over the years.
        </p>
      </div>
      <div className="skill-cards">
        {skillCards.map((card) => (
          <div className="skill-card" key={card.title}>
            <div className="skill-card-header">
              <i className={card.icon}></i>
              <h3>{card.title}</h3>
            </div>
            <div className="skill-list">
              {card.skills.map((skill) => (
                <div className="skill-item" key={skill.label}>
                  <i className={skill.icon}></i>
                  <span>{skill.label}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
