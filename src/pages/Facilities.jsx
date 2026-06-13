import { useI18n } from '../i18n'
import { FadeIn, StaggerContainer, ScaleIn } from '../components/AnimatedSection'
import { ParallaxSection } from '../components/ParallaxSection'
import PhotoGallery from '../components/PhotoGallery'
import { NELLORE_OT_ICU_GOOGLE_MAPS_URL } from '../locationLinks'
import facilitiesHeroImage from '../assets/WhatsApp Image 2025-10-10 at 13.48.48.jpeg?format=webp&w=800&quality=75'

// Import facility images for gallery (WebP optimized)
import hospitalExterior from '../assets/wetransfer_r0011365-jpg_2025-10-19_1050/WhatsApp Image 2025-10-23 at 18.14.30.jpeg?w=800&format=webp&quality=75'
import facility1 from '../assets/wetransfer_r0011365-jpg_2025-10-19_1050/R0011353.JPG?w=800&format=webp&quality=75'
import facility2 from '../assets/wetransfer_r0011365-jpg_2025-10-19_1050/R0011354.JPG?w=800&format=webp&quality=75'
import facility3 from '../assets/wetransfer_r0011365-jpg_2025-10-19_1050/R0011355.JPG?w=800&format=webp&quality=75'
import facility4 from '../assets/wetransfer_r0011365-jpg_2025-10-19_1050/R0011356.JPG?w=800&format=webp&quality=75'
import facility5 from '../assets/wetransfer_r0011365-jpg_2025-10-19_1050/R0011357.JPG?w=800&format=webp&quality=75'
import facility6 from '../assets/wetransfer_r0011365-jpg_2025-10-19_1050/R0011358.JPG?w=800&format=webp&quality=75'
import facility7 from '../assets/wetransfer_r0011365-jpg_2025-10-19_1050/R0011359.JPG?w=800&format=webp&quality=75'
import facility8 from '../assets/wetransfer_r0011365-jpg_2025-10-19_1050/R0011360.JPG?w=800&format=webp&quality=75'
import facility9 from '../assets/wetransfer_r0011365-jpg_2025-10-19_1050/R0011361.JPG?w=800&format=webp&quality=75'
import facility10 from '../assets/wetransfer_r0011365-jpg_2025-10-19_1050/R0011362.JPG?w=800&format=webp&quality=75'
import facility11 from '../assets/wetransfer_r0011365-jpg_2025-10-19_1050/R0011363.JPG?w=800&format=webp&quality=75'
import facility12 from '../assets/wetransfer_r0011365-jpg_2025-10-19_1050/R0011365.JPG?w=800&format=webp&quality=75'
import facility13 from '../assets/wetransfer_r0011365-jpg_2025-10-19_1050/IMG_5482.jpg?format=webp&w=800&quality=75'
import facility14 from '../assets/wetransfer_r0011365-jpg_2025-10-19_1050/IMG_5484.jpg?format=webp&w=800&quality=75'
import facility15 from '../assets/wetransfer_r0011365-jpg_2025-10-19_1050/IMG_5485.jpg?format=webp&w=800&quality=75'
import facility16 from '../assets/wetransfer_r0011365-jpg_2025-10-19_1050/IMG_5486.jpg?format=webp&w=800&quality=75'
import facility17 from '../assets/wetransfer_r0011365-jpg_2025-10-19_1050/IMG_5487.jpg?format=webp&w=800&quality=75'
import facility18 from '../assets/wetransfer_r0011365-jpg_2025-10-19_1050/IMG_5488.jpg?format=webp&w=800&quality=75'
import facility19 from '../assets/wetransfer_r0011365-jpg_2025-10-19_1050/IMG_5490.jpg?format=webp&w=800&quality=75'
import facility20 from '../assets/wetransfer_r0011365-jpg_2025-10-19_1050/IMG_5491.jpg?format=webp&w=800&quality=75'
import facility21 from '../assets/wetransfer_r0011365-jpg_2025-10-19_1050/IMG_5493.jpg?format=webp&w=800&quality=75'
import facility22 from '../assets/wetransfer_r0011365-jpg_2025-10-19_1050/IMG_5494.jpg?format=webp&w=800&quality=75'
import facility23 from '../assets/wetransfer_r0011365-jpg_2025-10-19_1050/IMG_5495.jpg?format=webp&w=800&quality=75'
import facility24 from '../assets/wetransfer_r0011365-jpg_2025-10-19_1050/IMG_5496.jpg?format=webp&w=800&quality=75'
import facility25 from '../assets/wetransfer_r0011365-jpg_2025-10-19_1050/IMG_5497.jpg?format=webp&w=800&quality=75'
import facility26 from '../assets/wetransfer_r0011365-jpg_2025-10-19_1050/IMG_5499.jpg?format=webp&w=800&quality=75'
import facility27 from '../assets/wetransfer_r0011365-jpg_2025-10-19_1050/IMG_5500.jpg?format=webp&w=800&quality=75'
import facility28 from '../assets/wetransfer_r0011365-jpg_2025-10-19_1050/IMG_5501.jpg?format=webp&w=800&quality=75'
import facility29 from '../assets/wetransfer_r0011365-jpg_2025-10-19_1050/IMG_5502.jpg?format=webp&w=800&quality=75'
import facility30 from '../assets/wetransfer_r0011365-jpg_2025-10-19_1050/IMG_5503.jpg?format=webp&w=800&quality=75'
import facility31 from '../assets/wetransfer_r0011365-jpg_2025-10-19_1050/IMG_5506.jpg?format=webp&w=800&quality=75'
import facility32 from '../assets/wetransfer_r0011365-jpg_2025-10-19_1050/IMG_5507.jpg?format=webp&w=800&quality=75'
import facility33 from '../assets/wetransfer_r0011365-jpg_2025-10-19_1050/IMG_5508.jpg?format=webp&w=800&quality=75'
import facility34 from '../assets/wetransfer_r0011365-jpg_2025-10-19_1050/IMG_5509.jpg?format=webp&w=800&quality=75'
import facility35 from '../assets/wetransfer_r0011365-jpg_2025-10-19_1050/IMG_5510.jpg?format=webp&w=800&quality=75'
import facility36 from '../assets/wetransfer_r0011365-jpg_2025-10-19_1050/IMG_5512.jpg?format=webp&w=800&quality=75'
import facility37 from '../assets/wetransfer_r0011365-jpg_2025-10-19_1050/IMG_5513.jpg?format=webp&w=800&quality=75'

export default function Facilities() {
  const { t } = useI18n()
  
  const galleryImages = [
    { src: facility1, alt: "Hospital Exterior", caption: "Dr. Ramaswamy Hospitals - Main Building" },
    { src: facility2, alt: "Reception Area", caption: "Modern Reception & Waiting Area" },
    { src: facility3, alt: "Patient Care", caption: "Patient Care Excellence" },
    { src: facility4, alt: "Medical Equipment", caption: "State-of-the-Art Medical Equipment" },
    { src: facility5, alt: "Hospital Facility", caption: "Advanced Healthcare Facility" },
    { src: facility6, alt: "Treatment Room", caption: "Modern Treatment Rooms" },
    { src: facility7, alt: "ICU Ward", caption: "Intensive Care Unit" },
    { src: facility8, alt: "Operation Theatre", caption: "Fully Equipped Operation Theatre" },
    { src: facility9, alt: "Diagnostic Center", caption: "Advanced Diagnostic Center" },
    { src: facility10, alt: "Dialysis Unit", caption: "Modern Dialysis Facility" },
    { src: facility11, alt: "Laboratory", caption: "Automated Laboratory Services" },
    { src: facility12, alt: "Patient Ward", caption: "Comfortable Patient Wards" },
    { src: facility13, alt: "Consultation Room", caption: "Doctor Consultation Rooms" },
    { src: facility14, alt: "Imaging Center", caption: "Advanced Imaging Technology" },
    { src: facility15, alt: "Emergency Department", caption: "24/7 Emergency Services" },
    { src: facility16, alt: "Pharmacy", caption: "In-House Pharmacy" },
    { src: facility17, alt: "Physiotherapy", caption: "Physiotherapy & Rehabilitation" },
    { src: facility18, alt: "Medical Staff", caption: "Experienced Medical Team" },
    { src: facility19, alt: "Surgical Suite", caption: "Modern Surgical Facilities" },
    { src: facility20, alt: "Patient Care Area", caption: "Compassionate Patient Care" },
    { src: facility21, alt: "Hospital Corridor", caption: "Clean & Spacious Corridors" },
    { src: facility22, alt: "Medical Technology", caption: "Latest Medical Technology" },
    { src: facility23, alt: "Treatment Area", caption: "Specialized Treatment Areas" },
    { src: facility24, alt: "Healthcare Services", caption: "Comprehensive Healthcare" },
    { src: facility25, alt: "Medical Facility", caption: "Modern Medical Infrastructure" },
    { src: facility26, alt: "Patient Room", caption: "Comfortable Patient Rooms" },
    { src: facility27, alt: "Healthcare Unit", caption: "Dedicated Healthcare Units" },
    { src: facility28, alt: "Medical Center", caption: "Advanced Medical Center" },
    { src: facility29, alt: "Treatment Facility", caption: "Quality Treatment Facilities" },
    { src: facility30, alt: "Hospital Interior", caption: "Modern Hospital Interior" },
    { src: facility31, alt: "Medical Equipment", caption: "High-End Medical Equipment" },
    { src: facility32, alt: "Care Unit", caption: "Patient Care Units" },
    { src: facility33, alt: "Healthcare Facility", caption: "Quality Healthcare Facility" },
    { src: facility34, alt: "Medical Services", caption: "Comprehensive Medical Services" },
    { src: facility35, alt: "Treatment Center", caption: "Advanced Treatment Center" },
    { src: facility36, alt: "Hospital Wing", caption: "Spacious Hospital Wings" },
    { src: facility37, alt: "Medical Infrastructure", caption: "Modern Medical Infrastructure" }
  ]
  
  const facilities = [
    '20+ beds – A/C sharing and private rooms',
    'Dialysis',
    'ICU',
    'Theatre is equipped with all types of monitors, ventilators, higher end C-Arm machines, laparoscopy set, etc.',
    'Very own RO Plant',
    'Lab has fully automated with highly qualified technicians doing their job.',
    'Higher-end portable X-ray which is taken care by highly trained staff.',
    'Around the clock duty doctors to serve and take good care of the patients.',
  ]
  
  return (
    <section className="section">
      {/* Hero Section with Background Image */}
      <FadeIn>
        <div className="facilities-hero facilities-hero-with-bg enhanced-hero-image">
          <div className="hero-image-backdrop"></div>
          <img 
            src={facilitiesHeroImage} 
            alt="Hospital Facilities" 
            className="hero-background-image"
            loading="eager"
            decoding="async"
          />
          <div className="hero-overlay-gradient"></div>
          <div className="facilities-hero-content">
            <h1>{t.facilities.title}</h1>
            <p className="facilities-subtitle">
              {t.facilities.subtitle}
            </p>
          </div>
        </div>
      </FadeIn>

      {/* Facilities Grid */}
      <div style={{ marginTop: 64 }}>
        <StaggerContainer className="facilities-grid-new">
          {facilities.map((facility, index) => (
            <div key={index} className="facility-card-new">
              <div className="facility-card-number">
                {String(index + 1).padStart(2, '0')}
              </div>
              <div className="facility-card-body">
                <h3>{facility}</h3>
              </div>
            </div>
          ))}
        </StaggerContainer>
      </div>

      {/* Photo Gallery */}
      <PhotoGallery 
        images={galleryImages} 
        title={t.facilities.galleryTitle}
        previewCount={8}
      />

      {/* Visit CTA */}
      <FadeIn>
        <div className="facilities-visit-cta" style={{ marginTop: '80px' }}>
          <div className="facilities-visit-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
          </div>
          <h2>{t.facilities.visitUs}</h2>
          <p>{t.facilities.visitUsText}</p>
          <a href={NELLORE_OT_ICU_GOOGLE_MAPS_URL} target="_blank" rel="noreferrer" className="btn btn-large">
            {t.facilities.getDirections}
          </a>
        </div>
      </FadeIn>
    </section>
  )
}