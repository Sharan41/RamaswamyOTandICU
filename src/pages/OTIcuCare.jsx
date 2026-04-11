import { useI18n } from '../i18n'
import { FadeIn, StaggerContainer } from '../components/AnimatedSection'
import {
  Hospital,
  Activity,
  Users,
  Workflow,
  Clock,
  Building2,
  Stethoscope,
  ShieldCheck,
  Handshake
} from 'lucide-react'
import otIcuLogo from '../assets/new page logo.jpeg'
import { NELLORE_OT_ICU_GOOGLE_MAPS_URL } from '../locationLinks'

export default function OTIcuCare() {
  const { t, lang } = useI18n()

  const whyChooseItems = [
    { text: t.otIcuCare.whyChoose1, Icon: Clock },
    { text: t.otIcuCare.whyChoose2, Icon: Building2 },
    { text: t.otIcuCare.whyChoose3, Icon: Stethoscope },
    { text: t.otIcuCare.whyChoose4, Icon: ShieldCheck },
    { text: t.otIcuCare.whyChoose5, Icon: Handshake }
  ]
  
  const specialities = [
    t.otIcuCare.speciality1,
    t.otIcuCare.speciality2,
    t.otIcuCare.speciality3,
    t.otIcuCare.speciality4,
    t.otIcuCare.speciality5,
    t.otIcuCare.speciality6,
    t.otIcuCare.speciality7,
    t.otIcuCare.speciality8,
    t.otIcuCare.speciality9,
    t.otIcuCare.speciality10,
    t.otIcuCare.speciality11
  ]
  
  const features = [
    { title: t.otIcuCare.feature1, Icon: Hospital },   // OT / Operating Theatre
    { title: t.otIcuCare.feature2, Icon: Activity },   // ICU / monitor
    { title: t.otIcuCare.feature3, Icon: Users },      // Team
    { title: t.otIcuCare.feature4, Icon: Workflow }    // Coordination / seamless workflow
  ]

  return (
    <section className="section ot-icu-care-page">
      {/* Hero Section — Brochure-style with SVG waves */}
      <FadeIn>
        <div className="ot-icu-hero">
          {/* Upper wave (Untitled.svg) top-left + lower wave (Untitled (1).svg), both fill #62a6b8 */}
          <svg
            className="ot-icu-hero-svg"
            viewBox="0 0 1440 1024"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {/* Upper wave from Untitled (3).svg — top-left, fill #62a6b8 */}
            <path
              d="M0.039 399.875C332.539 425.875 362.539 -14.125 766.539 0.875L1440 0L0 0L0.039 399.875Z"
              fill="#62a6b8"
            />
            {/* Lower wave from Untitled (1).svg */}
            <path
              d="M593 1023.98C730.074 1020.09 963.976 977.801 1059.5 852.5C1260 589.5 1497.18 691.875 1634 695.262L1440 695.262L1440 1024L593 1024Z"
              fill="#62a6b8"
            />
          </svg>

          {/* Hero Content — row: text left, logo right (logo top = Dr. Ramaswamy, bottom = subtitle) */}
          <div className="ot-icu-hero-content">
            <div className="ot-icu-hero-left">
              <StaggerContainer className="ot-icu-hero-text-stagger">
                <div className="ot-icu-hero-title-group">
                  <div className="ot-icu-badge">Nellore Division</div>
                  <h1 className="ot-icu-title">
                    <span className="ot-icu-title-dr">Dr. Ramaswamy Hospitals</span>
                    <span className="ot-icu-title-main">{t.otIcuCare.title}</span>
                  </h1>
                  <div className="ot-icu-divider"></div>
                </div>
                <div
                  className="ot-icu-lead"
                  lang={lang === 'te' ? 'te' : 'en'}
                >
                  <p className="ot-icu-subtitle">{t.otIcuCare.subtitle}</p>
                </div>
                <div className="ot-icu-tagline" role="list" aria-label={t.otIcuCare.tagline}>
                  {t.otIcuCare.tagline.split(/\s*\|\s*/).map((part, i, arr) => (
                    <span key={i}>
                      <span className="ot-icu-tagline-item">{part.trim()}</span>
                      {i < arr.length - 1 ? ' | ' : null}
                    </span>
                  ))}
                </div>
                <div className="ot-icu-quote">
                  <p>{t.otIcuCare.heroQuote}</p>
                </div>
              </StaggerContainer>
            </div>
            <div className="ot-icu-hero-logo">
              <img
                src={otIcuLogo}
                alt="Dr. Ramaswamy Hospitals — OT & ICU Care"
                width="320"
                height="120"
                loading="eager"
                decoding="async"
                className="ot-icu-hero-logo-img"
              />
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Why Choose Us Section — cards, numbered, Lucide icons, hover lift+shadow */}
      <div className="ot-icu-section">
        <FadeIn>
          <div className="ot-icu-why-choose">
            <div className="why-choose-header">
              <h2>{t.otIcuCare.whyChooseUs}</h2>
            </div>
            <StaggerContainer as="ul" className="why-choose-cards" role="list">
              {whyChooseItems.map((item, index) => {
                const IconComponent = item.Icon
                return (
                  <li key={index} className="why-choose-card">
                    <div className="why-choose-card-icon" aria-hidden="true">
                      <IconComponent size={28} strokeWidth={1.5} />
                    </div>
                    <p className="why-choose-card-text">{item.text}</p>
                  </li>
                )
              })}
            </StaggerContainer>
          </div>
        </FadeIn>

        {/* Specialities Section */}
        <FadeIn>
          <div className="ot-icu-specialities">
            <h2 className="specialities-title">{t.otIcuCare.ourSpecialities}</h2>
            <StaggerContainer className="specialities-grid">
              {specialities.map((speciality, index) => (
                <div key={index} className="speciality-card">
                  <span className="speciality-badge" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="speciality-name">{speciality}</div>
                </div>
              ))}
            </StaggerContainer>
          </div>
        </FadeIn>
      </div>

      {/* Main CTA Section */}
      <FadeIn>
        <div className="ot-icu-main-cta">
          <div className="main-cta-content">
            <h2>{t.otIcuCare.lookingFor}</h2>
            <p className="main-cta-subtitle">{t.otIcuCare.lookingForSubtitle}</p>
            <div className="main-cta-description">
              <p>{t.otIcuCare.description}</p>
            </div>
            
            <div className="features-grid">
              {features.map((feature, index) => {
                const IconComponent = feature.Icon
                return (
                  <div key={index} className="feature-card">
                    <div className="feature-icon" aria-hidden="true">
                      <IconComponent size={36} strokeWidth={1.5} />
                    </div>
                    <h3>{feature.title}</h3>
                  </div>
                )
              })}
            </div>
            
            <div className="main-cta-footer">
              <p>{t.otIcuCare.ctaText}</p>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Contact Section — same styling as Contact & Location page (modern cards, circular icons, action links) */}
      <FadeIn>
        <div className="ot-icu-contact">
          <div className="contact-content">
            <h2>
              <span className="contact-title-line">{t.otIcuCare.contactUs}</span>
              <span className="contact-division-line">{t.otIcuCare.nelloreDivision}</span>
            </h2>
            <div className="contact-info-grid">
              <a
                href={NELLORE_OT_ICU_GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card-modern contact-card-interactive"
                title="Open in Google Maps"
              >
                <div className="contact-card-icon-button">
                  <div className="icon-button-circle">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div className="icon-button-glow" />
                </div>
                <h3 className="contact-card-title">{t.otIcuCare.contactAddressLabel}</h3>
                <div className="contact-card-content">
                  <p>{t.otIcuCare.address}</p>
                </div>
                <div className="contact-card-action">
                  <span>{t.contact.viewMaps}</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </a>
              <a
                href="tel:+917599307777"
                className="contact-card-modern contact-card-interactive"
              >
                <div className="contact-card-icon-button">
                  <div className="icon-button-circle">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <div className="icon-button-glow" />
                </div>
                <h3 className="contact-card-title">{t.otIcuCare.contactPhoneLabel}</h3>
                <div className="contact-card-content">
                  <p className="contact-highlight-text">{t.otIcuCare.phone}</p>
                  <p className="contact-note-text">{t.contact.phoneNote}</p>
                </div>
                <div className="contact-card-action">
                  <span>{t.contact.callNow}</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  )
}
