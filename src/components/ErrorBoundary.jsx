import { Component } from 'react'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null, errorInfo: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo)
    this.setState({
      error,
      errorInfo
    })
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
          background: 'linear-gradient(135deg, #1f3e75, #00bbd1)',
          color: 'white'
        }}>
          <div style={{
            maxWidth: '600px',
            textAlign: 'center',
            background: 'rgba(255, 255, 255, 0.1)',
            padding: '40px',
            borderRadius: '12px',
            backdropFilter: 'blur(10px)'
          }}>
            <h1 style={{ fontSize: '2rem', marginBottom: '20px' }}>
              ⚠️ Something went wrong
            </h1>
            <p style={{ marginBottom: '30px', opacity: 0.9 }}>
              We apologize for the inconvenience. An unexpected error has occurred.
            </p>
            <button
              onClick={() => window.location.reload()}
              style={{
                background: 'white',
                color: '#1f3e75',
                border: 'none',
                padding: '12px 24px',
                borderRadius: '8px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'transform 0.2s'
              }}
              onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
              onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
            >
              Reload Page
            </button>
            {import.meta.env.DEV && this.state.error && (
              <details style={{
                marginTop: '30px',
                textAlign: 'left',
                background: 'rgba(0, 0, 0, 0.3)',
                padding: '20px',
                borderRadius: '8px'
              }}>
                <summary style={{ cursor: 'pointer', fontWeight: 'bold', marginBottom: '10px' }}>
                  Error Details (Development Only)
                </summary>
                <pre style={{
                  whiteSpace: 'pre-wrap',
                  fontSize: '0.85rem',
                  lineHeight: 1.5
                }}>
                  {this.state.error.toString()}
                  {this.state.errorInfo && this.state.errorInfo.componentStack}
                </pre>
              </details>
            )}
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary


