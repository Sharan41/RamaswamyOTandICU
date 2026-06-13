import { useI18n } from '../i18n'
import { Link } from 'react-router-dom'
import { FadeIn, StaggerContainer, ScaleIn } from '../components/AnimatedSection'
import { ParallaxSection } from '../components/ParallaxSection'
import { NELLORE_OT_ICU_GOOGLE_MAPS_URL } from '../locationLinks'
import servicesHeroImage from '../assets/WhatsApp Image 2025-10-23 at 18.07.55.jpeg?format=webp&w=1200&quality=80'

export default function Services() {
  const { t } = useI18n()
  
  const specialities = [
    'Day Care OT & ICU\'s',
    'IP Admissions',
    'Orthopedics',
    'Spine Surgeries',
    'Urology',
    'Gynecology & Obstetrics',
    'Surgical Gastro',
    'ENT',
    'General Surgery',
    'Proctology',
    'Varicose veins',
  ]
  
  return (
    <section className="section">
      {/* Hero Section with Background Image */}
      <FadeIn>
        <div className="services-hero services-hero-with-bg enhanced-hero-image">
          <div className="hero-image-backdrop"></div>
          <img 
            src={servicesHeroImage} 
            alt="Medical Services" 
            className="hero-background-image"
            loading="eager"
            decoding="async"
          />
          <div className="hero-overlay-gradient"></div>
          <div className="services-hero-content">
            <h1>{t.services.title}</h1>
            <p className="services-subtitle">
              {t.services.subtitle}
            </p>
          </div>
        </div>
      </FadeIn>

      {/* Specialities Grid */}
      <div style={{ marginTop: 64 }}>
        <StaggerContainer className="services-grid-new">
          {specialities.map((speciality, index) => (
            <div key={index} className="service-card-new">
              <div className="service-card-content">
                <div className="service-card-category">{String(index + 1).padStart(2, '0')}</div>
                <h3 className="service-card-title">{speciality}</h3>
              </div>
            </div>
          ))}
        </StaggerContainer>
      </div>

      {/* CTA Section */}
      <FadeIn>
        <section className="services-cta-section">
          <div className="services-cta-content">
            <h2>{t.services.ctaTitle}</h2>
            <p>{t.services.ctaDesc}</p>
            <div className="services-cta-actions">
              <a 
                href="tel:+917599307777" 
                className="btn btn-large btn-with-icon"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                {t.services.callNow}
              </a>
              <a 
                href={NELLORE_OT_ICU_GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-large btn-with-icon"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                {t.services.visitUs}
              </a>
            </div>
          </div>
        </section>
      </FadeIn>
    </section>
  )
}