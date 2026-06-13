import { useI18n } from '../i18n'
import { useState } from 'react'
import { FadeIn, StaggerContainer, ScaleIn } from '../components/AnimatedSection'
import { ParallaxSection } from '../components/ParallaxSection'
import { useToast } from '../components/Toast'
import { NELLORE_OT_ICU_GOOGLE_MAPS_URL } from '../locationLinks'

export default function Contact() {
  const { t } = useI18n()
  const toast = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    const form = e.target
    const formData = new FormData(form)
    
    try {
      const response = await fetch('https://formspree.io/f/xwprggve', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })
      
      if (response.ok) {
        toast.success('Message sent successfully! We will contact you soon.', 5000)
        form.reset()
      } else {
        toast.error('Failed to send message. Please try again.')
      }
    } catch (error) {
      toast.error('Network error. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }
  
  const socialLinks = [
    { 
      name: t.contact.instagram, 
      desc: t.contact.instagramText,
      icon: "IG",
      url: "https://www.instagram.com/drhoticu_nellore/"
    },
    { 
      name: t.contact.linktree, 
      desc: t.contact.linktreeText,
      icon: "LT",
      url: "https://linktr.ee/drramaswamyhospitals"
    },
    { 
      name: t.contact.whatsapp, 
      desc: t.contact.whatsappText,
      icon: "WA",
      url: "https://wa.me/919912757854"
    }
  ]

  return (
    <section className="section">
      {/* Hero Section */}
      <FadeIn>
        <div className="contact-hero">
          <h1>{t.contact.title}</h1>
        </div>
      </FadeIn>

      {/* Section 1: OT&ICU CARE — Nellore Division (first) */}
      <div className="contact-page-section">
        <div className="ot-icu-contact">
          <div className="contact-content">
            <h2>{t.contact.sectionOtIcuCare}</h2>
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
      </div>

      {/* Section 2: Consultations — Kavali Division */}
      <div className="contact-page-section">
        <div className="contact-section-header consultations">
          <h2>{t.contact.sectionConsultations}</h2>
        </div>
        <StaggerContainer className="contact-info-grid">
        <a 
          href="https://maps.app.goo.gl/zX87qZGbq7jb5Qjs7" 
          target="_blank" 
          rel="noreferrer" 
          className="contact-card-modern contact-card-interactive"
        >
          <div className="contact-card-icon-button">
            <div className="icon-button-circle">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <div className="icon-button-glow"></div>
          </div>
          <h3 className="contact-card-title">{t.contact.address}</h3>
          <div className="contact-card-content">
            <p>{t.contact.addressLine1}</p>
            <p>{t.contact.addressLine2}</p>
            <p>{t.contact.addressLine3}</p>
          </div>
          <div className="contact-card-action">
            <span>{t.contact.viewMaps}</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </div>
        </a>

        <a 
          href="tel:+919912757854" 
          className="contact-card-modern contact-card-interactive"
        >
          <div className="contact-card-icon-button">
            <div className="icon-button-circle">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </div>
            <div className="icon-button-glow"></div>
          </div>
          <h3 className="contact-card-title">{t.contact.phone}</h3>
          <div className="contact-card-content">
            <p className="contact-highlight-text">+91 9912757854</p>
            <p className="contact-note-text">{t.contact.phoneNote}</p>
          </div>
          <div className="contact-card-action">
            <span>Call Now</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </div>
        </a>

        <a 
          href="mailto:ramaswamyhospitals@gmail.com" 
          className="contact-card-modern contact-card-interactive"
        >
          <div className="contact-card-icon-button">
            <div className="icon-button-circle">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </div>
            <div className="icon-button-glow"></div>
          </div>
          <h3 className="contact-card-title">{t.contact.email}</h3>
          <div className="contact-card-content">
            <p className="contact-highlight-text">ramaswamyhospitals@gmail.com</p>
          </div>
          <div className="contact-card-action">
            <span>Send Email</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </div>
        </a>

        <div className="contact-card-modern">
          <div className="contact-card-icon-button">
            <div className="icon-button-circle icon-static">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
            </div>
          </div>
          <h3 className="contact-card-title">{t.contact.hours}</h3>
          <div className="contact-card-content">
            <div className="contact-hours-item">
              <strong>{t.contact.emergencyHours}</strong>
            </div>
            <div className="contact-hours-divider"></div>
            <div className="contact-hours-item">
              <strong>{t.contact.opdHours}</strong>
            </div>
            <div className="contact-hours-item">{t.contact.monSat}</div>
            <div className="contact-hours-item">{t.contact.sunday}</div>
          </div>
        </div>
      </StaggerContainer>
      </div>

      {/* Find Us / Google Maps Location — entire section commented out
      <div style={{ marginTop: 60 }}>
        <FadeIn>
          <h2 className="section-heading">{t.contact.findUs}</h2>
          <p className="section-subtitle">{t.contact.findUsSubtitle}</p>
        </FadeIn>
        <ScaleIn>
          <div className="contact-map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3855.365608313749!2d79.99258227511231!3d14.916710635607961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4b7b00746144d3%3A0xcf848a03971ed931!2sRamaswamy%20hospitals!5e0!3m2!1sen!2sin!4v1762184843111!5m2!1sen!2sin" 
              width="100%"
              height="500"
              frameBorder="0"
              style={{border:0, display: 'block'}} 
              allowFullScreen={true}
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="contact-map-iframe"
              title="Dr. Ramaswamy Hospitals Location"
              aria-label="Hospital location map"
              allow="geolocation"
            ></iframe>
            <div className="contact-map-overlay">
              <a 
                href="https://maps.app.goo.gl/zX87qZGbq7jb5Qjs7" 
                target="_blank" 
                rel="noreferrer" 
                className="btn btn-large"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                {t.contact.getDirections}
              </a>
            </div>
          </div>
        </ScaleIn>
      </div>
      */}

      {/* Contact Form */}
      <div style={{ marginTop: 80 }}>
        <FadeIn>
          <h2 className="section-heading">{t.contact.sendUsMessage}</h2>
          <p style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 40px', color: '#666' }}>
            {t.contact.contactFormSubtitle}
          </p>
        </FadeIn>
        <ScaleIn>
          <form onSubmit={handleSubmit} className="contact-form-main">
            <div className="contact-form-grid">
              <div className="contact-form-group">
                <label htmlFor="contact-name" className="visually-hidden">{t.contact.fullName} *</label>
                <input type="text" id="contact-name" name="name" placeholder={t.contact.fullName} required aria-required="true" />
              </div>
              <div className="contact-form-group">
                <label htmlFor="contact-email" className="visually-hidden">{t.contact.emailAddress}</label>
                <input type="email" id="contact-email" name="email" placeholder={t.contact.emailAddress} />
              </div>
              <div className="contact-form-group">
                <label htmlFor="contact-phone" className="visually-hidden">{t.contact.phoneNumber} *</label>
                <input type="tel" id="contact-phone" name="phone" placeholder={t.contact.phoneNumber} required aria-required="true" />
              </div>
              <div className="contact-form-group">
                <label htmlFor="contact-subject" className="visually-hidden">{t.contact.selectSubject} *</label>
                <select id="contact-subject" name="subject" required aria-required="true">
                  <option value="">{t.contact.selectSubject} *</option>
                  <option value="Hospital Feedback">{t.contact.hospitalFeedback}</option>
                  <option value="Maintenance Feedback">{t.contact.maintenanceFeedback}</option>
                  <option value="Food Quality">{t.contact.foodQuality}</option>
                  <option value="Feedback on Staffs">{t.contact.feedbackOnStaffs}</option>
                  <option value="Feedback on Doctors">{t.contact.feedbackOnDoctors}</option>
                  <option value="custom">{t.contact.other}</option>
                </select>
              </div>
            </div>
            <div className="contact-form-group">
              <label htmlFor="contact-custom-subject" className="visually-hidden">{t.contact.customSubjectLabel}</label>
              <input type="text" id="contact-custom-subject" name="custom_subject" placeholder={t.contact.customSubjectLabel} />
            </div>
            <div className="contact-form-group">
              <label htmlFor="contact-message" className="visually-hidden">{t.contact.message} *</label>
              <textarea id="contact-message" name="message" placeholder={t.contact.message} rows="6" required aria-required="true"></textarea>
            </div>
            <div className="contact-form-group">
              <label htmlFor="contact-source" className="visually-hidden">{t.contact.howDidYouKnow}</label>
              <input type="text" id="contact-source" name="how_did_you_know" placeholder={t.contact.howDidYouKnow} />
            </div>
            <button type="submit" className="btn btn-large" disabled={isSubmitting} aria-busy={isSubmitting}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '8px' }}>
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
              </svg>
              {isSubmitting ? t.contact.sending : t.contact.sendMessage}
            </button>
          </form>
        </ScaleIn>
      </div>

      {/* Social Media */}
      <div style={{ marginTop: 80 }}>
        <FadeIn>
          <h2 className="section-heading">{t.contact.connectWithUs}</h2>
        </FadeIn>
        <StaggerContainer className="contact-social-grid">
          {socialLinks.map((social, index) => (
            <a key={index} href={social.url} target="_blank" rel="noreferrer" className="contact-social-card">
              <div className="contact-social-icon">{social.icon}</div>
              <h3>{social.name}</h3>
              <p>{social.desc}</p>
              <div className="contact-social-arrow">→</div>
            </a>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}