import { useState } from 'react'

const services = [
  {
    icon: 'fa-pen-nib',
    title: 'UI/UX Design',
    description:
      'Creating clean, intuitive, and user-friendly interfaces focused on usability and visual consistency.',
    tags: ['Figma', 'Wireframing', 'Prototyping', 'User Interface'],
  },
  {
    icon: 'fa-code',
    title: 'Front-End Development',
    description:
      'Building responsive and modern websites using clean HTML, CSS and JavaScript.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
  },
  {
    icon: 'fa-laptop',
    title: 'Responsive Web Design',
    description:
      'Creating websites that look and work perfectly across desktop, tablet and mobile devices.',
    tags: ['Mobile First', 'Flexbox', 'CSS Grid', 'Media Queries'],
  },
  {
    icon: 'fa-magnifying-glass',
    title: 'SEO Optimization',
    description:
      'Improving website visibility and search performance through effective SEO techniques.',
    tags: ['Keyword Research', 'On-Page SEO', 'Meta Tags', 'Content Optimization'],
  },
]

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0)

  const toggleService = (index) => {
    setActiveIndex((current) => (current === index ? null : index))
  }

  return (
    <section className="services" id="services">
      <div className="services-header">
        <h2>
          My <span>Services</span>
        </h2>
        <p>
          The services I offer to companies and
          <br />
          clients
        </p>
      </div>

      <div className="services-list">
        {services.map((service, index) => (
          <div
            key={service.title}
            className={`service-item${activeIndex === index ? ' active' : ''}`}
          >
            <div className="service-title">
              <div className="service-icon">
                <i className={`fa-solid ${service.icon}`}></i>
              </div>
              <div className="service-info">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
              <button
                className="service-arrow"
                aria-label={`Toggle ${service.title} details`}
                onClick={(event) => {
                  event.preventDefault()
                  event.stopPropagation()
                  toggleService(index)
                }}
              >
                <i className="fa-solid fa-chevron-down"></i>
              </button>
            </div>

            <div className="service-content">
              {service.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
