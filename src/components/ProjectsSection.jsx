import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import projects from '../data/projects'

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-image">
        <img src={project.image} alt={project.title} />
      </div>
      <div className="project-content">
        <div>
          <span className="project-number">{project.number}</span>
          <h3>{project.title}</h3>
          <p>
            {project.description.map((line, i) => (
              <span key={i}>
                {line}
                {i < project.description.length - 1 ? <br /> : null}
              </span>
            ))}
          </p>
        </div>
        <a className="project-link" href={project.link} target="_blank" rel="noreferrer">
          View Project <i className="fa-solid fa-arrow-right"></i>{' '}
        </a>
      </div>
    </article>
  )
}

export default function ProjectsSection() {
  const sliderRef = useRef(null)
  const trackRef = useRef(null)
  const dotRefs = useRef([])

  useEffect(() => {
    const slider = sliderRef.current
    const track = trackRef.current
    if (!slider || !track) return

    const dots = dotRefs.current.filter(Boolean)
    const originalCards = Array.from(track.querySelectorAll('.project-card'))
    const totalCards = originalCards.length
    if (totalCards === 0) return

    let currentIndex = 0
    let isDragging = false
    let startX = 0
    let currentX = 0
    let startPosition = 0
    let mouseInside = false
    let mouseSpeed = 0
    let continuousPosition = 0
    let lastTime = performance.now()

    const clones = []
    originalCards.slice(-2).forEach((card) => {
      const clone = card.cloneNode(true)
      clones.push(clone)
      track.insertBefore(clone, track.firstChild)
    })
    originalCards.slice(0, 2).forEach((card) => {
      const clone = card.cloneNode(true)
      clones.push(clone)
      track.appendChild(clone)
    })

    const allCards = track.querySelectorAll('.project-card')

    const getCardWidth = () => {
      const card = allCards[0]
      const gap = parseFloat(getComputedStyle(track).gap) || 0
      return card.getBoundingClientRect().width + gap
    }

    const updateDots = () => {
      dots.forEach((dot, index) =>
        dot.classList.toggle('active', index === currentIndex),
      )
    }

    const setPosition = (animate = true) => {
      const cardWidth = getCardWidth()
      const position = currentIndex + 2
      const newPosition = -(position * cardWidth)
      track.style.transition = animate ? 'transform 0.5s ease' : 'none'
      track.style.transform = `translateX(${newPosition}px)`
      continuousPosition = newPosition
      updateDots()
    }

    const nextSlide = () => {
      currentIndex++
      setPosition(true)
    }

    const previousSlide = () => {
      currentIndex--
      setPosition(true)
    }

    const updateCurrentIndexFromPosition = () => {
      const cardWidth = getCardWidth()
      let position = Math.round(Math.abs(continuousPosition) / cardWidth)
      position -= 2
      position = ((position % totalCards) + totalCards) % totalCards
      currentIndex = position
      updateDots()
    }

    const ac = new AbortController()
    const opts = { signal: ac.signal }

    track.addEventListener(
      'transitionend',
      () => {
        if (currentIndex >= totalCards) {
          currentIndex = 0
          setPosition(false)
        }
        if (currentIndex < 0) {
          currentIndex = totalCards - 1
          setPosition(false)
        }
      },
      opts,
    )

    dots.forEach((dot, index) => {
      dot.addEventListener(
        'click',
        (event) => {
          event.preventDefault()
          event.stopPropagation()
          currentIndex = index
          setPosition(true)
        },
        opts,
      )
    })

    slider.addEventListener(
      'mouseenter',
      () => {
        mouseInside = true
      },
      opts,
    )

    slider.addEventListener(
      'mouseleave',
      () => {
        mouseInside = false
        mouseSpeed = 0
      },
      opts,
    )

    slider.addEventListener(
      'mousemove',
      (event) => {
        if (isDragging) return
        const rect = slider.getBoundingClientRect()
        const mouseX = event.clientX - rect.left
        const center = rect.width / 2
        mouseSpeed = (mouseX - center) / center
        mouseSpeed = Math.max(-1, Math.min(1, mouseSpeed))
      },
      opts,
    )

    let raf
    const mouseSliderMove = (time) => {
      const deltaTime = time - lastTime
      lastTime = time
      if (mouseInside && !isDragging && Math.abs(mouseSpeed) > 0.05) {
        const speed = mouseSpeed * 0.35 * deltaTime
        continuousPosition -= speed
        const cardWidth = getCardWidth()
        const firstClonePosition = -cardWidth
        const lastClonePosition = -(totalCards + 2) * cardWidth
        if (continuousPosition > firstClonePosition) {
          continuousPosition -= totalCards * cardWidth
        }
        if (continuousPosition < lastClonePosition) {
          continuousPosition += totalCards * cardWidth
        }
        track.style.transition = 'none'
        track.style.transform = `translateX(${continuousPosition}px)`
        updateCurrentIndexFromPosition()
      }
      raf = requestAnimationFrame(mouseSliderMove)
    }
    raf = requestAnimationFrame(mouseSliderMove)

    slider.addEventListener(
      'mousedown',
      (event) => {
        if (event.target.closest('button, a')) return
        isDragging = true
        startX = event.clientX
        currentX = startX
        const transform = getComputedStyle(track).transform
        if (transform !== 'none') {
          const matrix = new DOMMatrix(transform)
          startPosition = matrix.m41
        } else {
          startPosition = 0
        }
        continuousPosition = startPosition
        track.style.transition = 'none'
        slider.style.cursor = 'grabbing'
        event.preventDefault()
      },
      opts,
    )

    slider.addEventListener(
      'mousemove',
      (event) => {
        if (!isDragging) return
        currentX = event.clientX
        const distance = currentX - startX
        continuousPosition = startPosition + distance
        track.style.transform = `translateX(${continuousPosition}px)`
      },
      opts,
    )

    document.addEventListener(
      'mouseup',
      () => {
        if (!isDragging) return
        isDragging = false
        slider.style.cursor = 'grab'
        const distance = currentX - startX
        if (distance < -50) {
          nextSlide()
        } else if (distance > 50) {
          previousSlide()
        } else {
          setPosition(true)
        }
      },
      opts,
    )

    slider.addEventListener(
      'touchstart',
      (event) => {
        isDragging = true
        startX = event.touches[0].clientX
        currentX = startX
        const transform = getComputedStyle(track).transform
        if (transform !== 'none') {
          const matrix = new DOMMatrix(transform)
          startPosition = matrix.m41
        } else {
          startPosition = 0
        }
        continuousPosition = startPosition
        track.style.transition = 'none'
      },
      { passive: true, signal: ac.signal },
    )

    slider.addEventListener(
      'touchmove',
      (event) => {
        if (!isDragging) return
        currentX = event.touches[0].clientX
        const distance = currentX - startX
        continuousPosition = startPosition + distance
        track.style.transform = `translateX(${continuousPosition}px)`
      },
      { passive: true, signal: ac.signal },
    )

    slider.addEventListener(
      'touchend',
      () => {
        if (!isDragging) return
        isDragging = false
        const distance = currentX - startX
        if (distance < -50) {
          nextSlide()
        } else if (distance > 50) {
          previousSlide()
        } else {
          setPosition(true)
        }
      },
      opts,
    )

    allCards.forEach((card) => {
      const image = card.querySelector('img')
      if (image) {
        image.addEventListener(
          'dragstart',
          (event) => event.preventDefault(),
          opts,
        )
      }
    })

    window.addEventListener(
      'resize',
      () => setPosition(false),
      opts,
    )

    slider.style.cursor = 'grab'
    setPosition(false)

    return () => {
      cancelAnimationFrame(raf)
      ac.abort()
      clones.forEach((clone) => clone.remove())
    }
  }, [])

  return (
    <section className="projects" id="projects">
      <div className="projects-header">
        <h2>
          Featured <span>Projects</span>
        </h2>
        <p>A selection of my recent design and development work.</p>
      </div>
      <div className="projects-slider" ref={sliderRef}>
        <div className="projects-track" ref={trackRef}>
          {projects.map((project) => (
            <ProjectCard key={project.number} project={project} />
          ))}
        </div>
      </div>

      <div className="dots-container">
        <div className="projects-dots">
          {projects.map((project, index) => (
            <button
              key={project.number}
              ref={(el) => {
                dotRefs.current[index] = el
              }}
              className={`project-dot${index === 0 ? ' active' : ''}`}
              data-index={index}
              aria-label={`Go to project ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>

      <div className="view-more-container">
        <Link className="btn1" to="/projects">
          View More Projects <i className="fa-solid fa-arrow-right"></i>
        </Link>
      </div>
    </section>
  )
}
