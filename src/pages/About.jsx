import { useI18n } from '../i18n'
import { FadeIn, StaggerContainer, ScaleIn } from '../components/AnimatedSection'
import { ParallaxSection } from '../components/ParallaxSection'
import CountUp from '../components/CountUp'
import PhotoGallery from '../components/PhotoGallery'
import leaderImage from '../assets/WhatsApp Image 2025-10-14 at 13.15.06 (1).jpeg?format=webp&w=400&quality=80'
import directorImage from '../assets/profile pic.jpeg?format=webp&w=600&quality=80'
import rakshanaImage from '../assets/rakshana pic.jpeg'
import bannerLogo from '../assets/new page logo copy.jpeg'

// Import all facility images - optimized for gallery display (WebP only)
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

export default function About() {
  const { t } = useI18n()
  
  const stats = [
    { number: 50000, suffix: "+", label: t.about.stat1Label, duration: 2800 },
    { number: 25, suffix: "+", label: t.about.stat2Label, duration: 2000 },
    { number: 85000, suffix: "+", label: t.about.stat3Label, duration: 2800 },
    { number: 24, suffix: "/7", label: t.about.stat4Label, duration: 1500 }
  ]

  const galleryImages = [
    { src: hospitalExterior, alt: "Hospital Building", caption: "Dr. Ramaswamy Hospitals - Kavali" },
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

  return (
    <section className="section">
      {/* Hero Section */}
      <div className="about-hero-container">
        <FadeIn>
          <div className="about-hero">
            <h1>{t.about.title}</h1>
            <div className="about-intro-text">
              <p dangerouslySetInnerHTML={{ __html: t.about.intro1 }}></p>
              {t.about.intro2 && <p dangerouslySetInnerHTML={{ __html: t.about.intro2 }}></p>}
            </div>
          </div>
        </FadeIn>
        <ScaleIn>
          <div className="about-hero-image animated-hospital-image">
            <div className="about-hero-image-pattern"></div>
            <div className="image-glow-effect"></div>
            <img src={bannerLogo} alt="Dr. Ramaswamy Hospitals OT and ICU Care" className="about-hero-logo-img" />
            <div className="about-hero-image-caption">{t.about.heroCaption}</div>
          </div>
        </ScaleIn>
      </div>

      {/* Stats Section */}
      <ScaleIn>
        <div className="about-stats-container">
          <StaggerContainer className="about-stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="about-stat-card">
                <div className="about-stat-number">
                  <CountUp end={stat.number} duration={stat.duration} suffix={stat.suffix} />
                </div>
                <div className="about-stat-label">{stat.label}</div>
              </div>
            ))}
          </StaggerContainer>
        </div>
      </ScaleIn>

      {/* Mission, Vision & Motto */}
      <FadeIn>
        <div className="mission-vision-container">
          <div className="mission-vision-card mission-card">
            <h2>{t.about.mission}</h2>
            <p dangerouslySetInnerHTML={{ __html: t.about.missionText }}></p>
          </div>
          <div className="mission-vision-card vision-card">
            <h2>{t.about.vision}</h2>
            <p dangerouslySetInnerHTML={{ __html: t.about.visionText }}></p>
          </div>
          <div className="mission-vision-card mission-card">
            <h2>{t.about.motto}</h2>
            <p dangerouslySetInnerHTML={{ __html: t.about.mottoText }}></p>
          </div>
        </div>
      </FadeIn>

      {/* Leadership */}
      <div style={{ marginTop: 80 }}>
        <FadeIn>
          <h2 className="section-heading">{t.about.leadership}</h2>
        </FadeIn>
        <ScaleIn>
          <div className="leader-spotlight">
            <div className="leader-spotlight-avatar">
              <img src={leaderImage} alt={t.about.founderName} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
            </div>
            <div className="leader-spotlight-info">
              <h3>{t.about.founderName}</h3>
              <div className="leader-spotlight-title">{t.about.founderTitle}</div>
              <div className="leader-spotlight-qualifications">{t.about.founderEducation}</div>
              <p dangerouslySetInnerHTML={{ __html: t.about.founderBio }}></p>
            </div>
          </div>
        </ScaleIn>
        
        <ScaleIn>
          <div className="leader-spotlight" style={{ marginTop: 40 }}>
            <div className="leader-spotlight-avatar">
              <img src={directorImage} alt="Mr. Manchikanti Venkata Sowrav" className="director-profile-img" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
            </div>
            <div className="leader-spotlight-info">
              <h3>{t.about.directorName}</h3>
              <div className="leader-spotlight-title">{t.about.directorTitle}</div>
              <div className="leader-spotlight-qualifications">{t.about.directorEducation}</div>
              <p dangerouslySetInnerHTML={{ __html: t.about.directorBio }}></p>
            </div>
          </div>
        </ScaleIn>
        
        <ScaleIn>
          <div className="leader-spotlight" style={{ marginTop: 40 }}>
            <div className="leader-spotlight-avatar">
              <img src={rakshanaImage} alt={t.about.rakshanaName} className="rakshana-profile-img" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
            </div>
            <div className="leader-spotlight-info">
              <h3>{t.about.rakshanaName}</h3>
              <div className="leader-spotlight-title">{t.about.rakshanaTitle}</div>
              <div className="leader-spotlight-qualifications">{t.about.rakshanaEducation}</div>
              <p dangerouslySetInnerHTML={{ __html: t.about.rakshanaBio }}></p>
            </div>
          </div>
        </ScaleIn>
      </div>

      {/* Photo Gallery */}
      <PhotoGallery 
        images={galleryImages} 
        title={t.about.photoGallery}
        previewCount={8}
      />
    </section>
  )
}