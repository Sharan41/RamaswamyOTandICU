import { useState, useEffect } from 'react'
import { useI18n } from '../i18n'
import { FadeIn, StaggerContainer, ScaleIn } from '../components/AnimatedSection'
import { ParallaxSection } from '../components/ParallaxSection'
import CountUp from '../components/CountUp'

export default function Testimonials() {
  const { t } = useI18n()
  
  const testimonials = [
    {
      quote: t.testimonials.patient1Quote,
      author: t.testimonials.patient1Name,
      location: t.testimonials.patient1Location,
      rating: 5,
      featured: true
    },
    {
      quote: t.testimonials.patient2Quote,
      author: t.testimonials.patient2Name,
      location: t.testimonials.patient2Location,
      rating: 5
    },
    {
      quote: t.testimonials.patient3Quote,
      author: t.testimonials.patient3Name,
      location: t.testimonials.patient3Location,
      rating: 5
    },
    {
      quote: t.testimonials.patient4Quote,
      author: t.testimonials.patient4Name,
      location: t.testimonials.patient4Location,
      rating: 5
    },
    {
      quote: t.testimonials.patient5Quote,
      author: t.testimonials.patient5Name,
      location: t.testimonials.patient5Location,
      rating: 5
    },
    {
      quote: t.testimonials.patient6Quote,
      author: t.testimonials.patient6Name,
      location: t.testimonials.patient6Location,
      rating: 5
    }
  ]
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  
  // Auto-rotate testimonials every 5 seconds (pauses on user interaction)
  useEffect(() => {
    if (isPaused) return
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)
    
    return () => clearInterval(interval)
  }, [isPaused])
  
  // Touch swipe handlers
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX)
  }
  
  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }
  
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50
    
    if (isLeftSwipe) {
      handleNext({ preventDefault: () => {}, stopPropagation: () => {} })
    }
    if (isRightSwipe) {
      handlePrev({ preventDefault: () => {}, stopPropagation: () => {} })
    }
    
    // Reset
    setTouchStart(0)
    setTouchEnd(0)
  }
  
  const featuredTestimonial = testimonials[currentIndex]
  const otherTestimonials = testimonials.filter((_, index) => index !== currentIndex)
  
  const handlePrev = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsPaused(true)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
    setTimeout(() => setIsPaused(false), 3000) // Resume after 3 seconds
  }
  
  const handleNext = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsPaused(true)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    setTimeout(() => setIsPaused(false), 3000) // Resume after 3 seconds
  }
  
  const handleDotClick = (index) => {
    setIsPaused(true)
    setCurrentIndex(index)
    setTimeout(() => setIsPaused(false), 3000) // Resume after 3 seconds
  }

  
  return (
    <section className="section">
      {/* Hero Section */}
      <FadeIn>
        <div className="testimonials-hero">
          <h1>{t.testimonials.title}</h1>
          <p className="testimonials-subtitle">
            {t.testimonials.subtitle}
          </p>
        </div>
      </FadeIn>

      {/* Featured Testimonial Carousel */}
      <ScaleIn>
        <div className="testimonial-carousel-container">
          <button 
            className="carousel-btn carousel-btn-prev" 
            onClick={handlePrev} 
            aria-label="Previous testimonial"
            type="button"
          >
            ‹
          </button>
          
          <div 
            className="featured-testimonial" 
            key={currentIndex}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="featured-quote-icon">"</div>
            <div className="featured-testimonial-stars">
              {'★'.repeat(featuredTestimonial.rating)}
            </div>
            <p className="featured-testimonial-quote">{featuredTestimonial.quote}</p>
            <div className="featured-testimonial-author">
              <div className="featured-author-avatar">
                {featuredTestimonial.author.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <div className="featured-author-name">{featuredTestimonial.author}</div>
                <div className="featured-author-location">{featuredTestimonial.location}</div>
              </div>
            </div>
          </div>
          
          <button 
            className="carousel-btn carousel-btn-next" 
            onClick={handleNext} 
            aria-label="Next testimonial"
            type="button"
          >
            ›
          </button>
          
          {/* Carousel Indicators */}
          <div className="carousel-indicators">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => handleDotClick(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </ScaleIn>

      {/* Stats Section */}
      <FadeIn>
        <div className="testimonial-stats">
          <div className="testimonial-stat">
            <div className="testimonial-stat-number">
              <CountUp end="1500" duration={2500} suffix="+" />
            </div>
            <div className="testimonial-stat-label">{t.testimonials.happyPatients}</div>
          </div>
          <div className="testimonial-stat">
            <div className="testimonial-stat-number">
              <CountUp end="4.9" duration={2000} suffix="/5" />
            </div>
            <div className="testimonial-stat-label">{t.testimonials.averageRating}</div>
          </div>
          <div className="testimonial-stat">
            <div className="testimonial-stat-number">
              <CountUp end="98" duration={2200} suffix="%" />
            </div>
            <div className="testimonial-stat-label">{t.testimonials.satisfactionRate}</div>
          </div>
        </div>
      </FadeIn>

      {/* Other Testimonials */}
      <div style={{ marginTop: 64 }}>
        <FadeIn>
          <h2 className="section-heading">{t.testimonials.whatPatientsSay}</h2>
        </FadeIn>
        
        <StaggerContainer className="testimonials-grid">
          {otherTestimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card-new">
              <div className="testimonial-card-stars">
                {'★'.repeat(testimonial.rating)}
              </div>
              <p className="testimonial-card-quote">"{testimonial.quote}"</p>
              <div className="testimonial-card-divider"></div>
              <div className="testimonial-card-footer">
                <div className="testimonial-card-avatar">
                  {testimonial.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="testimonial-card-author">{testimonial.author}</div>
                  <div className="testimonial-card-location">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </StaggerContainer>
      </div>

    </section>
  )
}