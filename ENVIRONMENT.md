# Environment Variables Documentation

Documentation for environment variables and configuration settings.

---

## Overview

The Dr. Ramaswamy Hospitals website is designed as a **static site** and currently **does not require environment variables** for basic functionality.

However, this document provides guidance for adding environment variables if needed in the future (e.g., for API integration, analytics, or other services).

---

## Current Configuration

### No Environment Variables Required

The website works without any environment variables because:

- ✅ **Static Content**: All content is bundled at build time
- ✅ **No Backend API**: Direct client-side rendering
- ✅ **No Authentication**: Public-facing website
- ✅ **No External Services**: No API keys needed currently

### Hard-coded Configuration

Some configuration is hard-coded in the source:

**Contact Information** (`src/App.jsx`):
```javascript
- Phone: +91 99127 57854
- WhatsApp: +91 99127 57854
- Google Maps: coordinates embedded in URL
```

**Social Media Links** (`src/App.jsx`):
```javascript
- Instagram: https://www.instagram.com/drramaswamyhospitals_kavali/
- Linktree: https://linktr.ee/drramaswamyhospitals
```

**Domain**:
```javascript
- Production: https://www.ramaswamyhospitals.com/
```

---

## Adding Environment Variables (Future)

If you need to add environment variables in the future:

### Vite Environment Variables

Vite uses `import.meta.env` for environment variables.

#### Requirements:

1. **Prefix**: Variables must start with `VITE_` to be exposed to client
2. **Location**: Create `.env` file in project root
3. **Access**: Use `import.meta.env.VITE_VARIABLE_NAME`

### Creating Environment Files

#### Local Development (`.env`)

Create `.env` in project root:

```bash
# .env (for local development)

# API Configuration
VITE_API_URL=https://api.ramaswamyhospitals.com
VITE_API_KEY=your-api-key-here

# Analytics
VITE_GA_TRACKING_ID=G-XXXXXXXXXX

# Feature Flags
VITE_ENABLE_BOOKING=false
VITE_ENABLE_CHAT=true

# Contact Info (if moving from hard-coded)
VITE_PHONE=+919912757854
VITE_WHATSAPP=+919912757854
VITE_EMAIL=info@ramaswamyhospitals.com
```

#### Production (`.env.production`)

Create `.env.production` for production-specific values:

```bash
# .env.production (for production builds)

VITE_API_URL=https://api.ramaswamyhospitals.com
VITE_GA_TRACKING_ID=G-XXXXXXXXXX
VITE_ENABLE_BOOKING=true
```

#### Development Only (`.env.local`)

Create `.env.local` for local overrides (not committed to Git):

```bash
# .env.local (git-ignored, for local testing)

VITE_API_URL=http://localhost:3000
VITE_ENABLE_DEBUG=true
```

### File Priority

Vite loads `.env` files in this order (later files override earlier):

1. `.env` - Base configuration
2. `.env.local` - Local overrides (git-ignored)
3. `.env.[mode]` - Mode-specific (e.g., `.env.production`)
4. `.env.[mode].local` - Mode-specific local overrides

### Accessing Variables in Code

```javascript
// src/config.js (example)

export const config = {
  apiUrl: import.meta.env.VITE_API_URL || 'https://default-api.com',
  gaId: import.meta.env.VITE_GA_TRACKING_ID,
  phone: import.meta.env.VITE_PHONE || '+919912757854',
  features: {
    booking: import.meta.env.VITE_ENABLE_BOOKING === 'true',
    chat: import.meta.env.VITE_ENABLE_CHAT === 'true',
  },
}

// Usage in components
import { config } from './config'

console.log(config.apiUrl)
```

### Built-in Variables

Vite provides some built-in variables:

```javascript
import.meta.env.MODE // 'development' or 'production'
import.meta.env.BASE_URL // Base URL (usually '/')
import.meta.env.PROD // boolean: is production?
import.meta.env.DEV // boolean: is development?
```

---

## Common Use Cases

### 1. Google Analytics

If adding Google Analytics:

**.env:**
```bash
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

**Code** (`src/main.jsx`):
```javascript
// Add to <head> or use react-ga
if (import.meta.env.VITE_GA_MEASUREMENT_ID) {
  // Initialize Google Analytics
  window.dataLayer = window.dataLayer || []
  function gtag(){dataLayer.push(arguments)}
  gtag('js', new Date())
  gtag('config', import.meta.env.VITE_GA_MEASUREMENT_ID)
}
```

### 2. API Integration

If adding backend API:

**.env:**
```bash
VITE_API_URL=https://api.ramaswamyhospitals.com
VITE_API_KEY=your-api-key-here
```

**Code:**
```javascript
// src/services/api.js
const API_URL = import.meta.env.VITE_API_URL
const API_KEY = import.meta.env.VITE_API_KEY

export async function fetchAppointments() {
  const response = await fetch(`${API_URL}/appointments`, {
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
    },
  })
  return response.json()
}
```

### 3. Feature Flags

If adding toggleable features:

**.env:**
```bash
VITE_ENABLE_ONLINE_BOOKING=true
VITE_ENABLE_LIVE_CHAT=false
```

**Code:**
```javascript
// src/pages/Contact.jsx
const showBooking = import.meta.env.VITE_ENABLE_ONLINE_BOOKING === 'true'

{showBooking && <BookingForm />}
```

### 4. External Services

If adding external services:

**.env:**
```bash
# SendGrid (email)
VITE_SENDGRID_API_KEY=SG.xxxxxxxxxx

# Twilio (SMS)
VITE_TWILIO_ACCOUNT_SID=ACxxxxxxxxxx

# Stripe (payments)
VITE_STRIPE_PUBLIC_KEY=pk_test_xxxxxxxxxx
```

---

## Render Configuration

### Setting Environment Variables in Render

If using environment variables, configure in Render Dashboard:

1. Go to your Static Site in Render
2. Navigate to **Settings** → **Environment**
3. Click **Add Environment Variable**
4. Add each variable:
   ```
   Key: VITE_API_URL
   Value: https://api.ramaswamyhospitals.com
   ```
5. Save and redeploy

### Important Notes:

- ⚠️ **Public Exposure**: All `VITE_*` variables are exposed to client
- ❌ **Never store secrets**: Don't use for API secrets, passwords, or private keys
- ✅ **Public data only**: Only use for public configuration
- ✅ **Server-side for secrets**: If you need secrets, use a backend API

---

## Security Best Practices

### ❌ DO NOT Store in Environment Variables:

- Database passwords
- API secret keys (only public keys)
- Private authentication tokens
- Encryption keys
- SSH keys or credentials

### ✅ Safe to Store:

- Public API keys (e.g., Google Maps API - public)
- Google Analytics tracking ID
- Public configuration URLs
- Feature flags
- Non-sensitive configuration

### Protection:

**Add `.env` to `.gitignore`:**

```gitignore
# .gitignore
.env
.env.local
.env.*.local
```

**Never commit:**
```bash
# ❌ Wrong
git add .env
git commit -m "Add environment variables"

# ✅ Correct
# .env is git-ignored, use Render dashboard
```

---

## Development vs Production

### Example Configuration

**Development (`.env`):**
```bash
VITE_API_URL=http://localhost:3000
VITE_ENABLE_DEBUG=true
VITE_LOG_LEVEL=verbose
```

**Production (`.env.production`):**
```bash
VITE_API_URL=https://api.ramaswamyhospitals.com
VITE_ENABLE_DEBUG=false
VITE_LOG_LEVEL=error
```

### Build Commands

```bash
# Development build (uses .env)
npm run dev

# Production build (uses .env.production)
npm run build
```

---

## Troubleshooting

### Variables Not Working

**Issue**: `import.meta.env.VITE_MY_VAR` is undefined

**Solutions:**

1. **Check prefix**: Variable must start with `VITE_`
   ```bash
   # ❌ Wrong
   MY_VAR=value
   
   # ✅ Correct
   VITE_MY_VAR=value
   ```

2. **Restart dev server**: Changes to `.env` require restart
   ```bash
   # Stop dev server (Ctrl+C)
   npm run dev
   ```

3. **Check file location**: `.env` must be in project root
   ```
   hospital-frontend/
   ├── .env          ← Here
   ├── package.json
   └── src/
   ```

4. **Check file naming**: Must be exactly `.env`, not `env.txt`

5. **Rebuild**: Production requires rebuild
   ```bash
   npm run build
   ```

### Variables Not Updating in Production

**Issue**: Deployed site uses old values

**Solution:**

1. **Update in Render**: Change in Render dashboard
2. **Manual Deploy**: Trigger new deployment
3. **Clear cache**: Clear CDN/browser cache

---

## Migration Guide

If moving from hard-coded to environment variables:

### Step 1: Create `.env` File

```bash
VITE_PHONE=+919912757854
VITE_WHATSAPP=+919912757854
VITE_EMAIL=info@ramaswamyhospitals.com
VITE_INSTAGRAM=https://www.instagram.com/drramaswamyhospitals_kavali/
VITE_LINKTREE=https://linktr.ee/drramaswamyhospitals
VITE_MAPS_LAT=14.916762299999998
VITE_MAPS_LNG=79.9951669
```

### Step 2: Create Config File

```javascript
// src/config.js
export const config = {
  contact: {
    phone: import.meta.env.VITE_PHONE || '+919912757854',
    whatsapp: import.meta.env.VITE_WHATSAPP || '+919912757854',
    email: import.meta.env.VITE_EMAIL || 'info@ramaswamyhospitals.com',
  },
  social: {
    instagram: import.meta.env.VITE_INSTAGRAM || 'https://www.instagram.com/drramaswamyhospitals_kavali/',
    linktree: import.meta.env.VITE_LINKTREE || 'https://linktr.ee/drramaswamyhospitals',
  },
  maps: {
    lat: import.meta.env.VITE_MAPS_LAT || '14.916762299999998',
    lng: import.meta.env.VITE_MAPS_LNG || '79.9951669',
  },
}
```

### Step 3: Update Components

```javascript
// Before (hard-coded)
<a href="tel:+919912757854">Call</a>

// After (from config)
import { config } from '../config'
<a href={`tel:${config.contact.phone}`}>Call</a>
```

### Step 4: Update Render

Add environment variables in Render dashboard.

### Step 5: Deploy & Test

```bash
git add .
git commit -m "Migrate to environment variables"
git push origin main
```

---

## Current Recommendation

**For Now: No Action Required**

The current implementation with hard-coded values is:
- ✅ Simple and maintainable
- ✅ No complexity for small changes
- ✅ Fast build times
- ✅ No configuration needed

**When to Add Environment Variables:**

- 🔄 Adding backend API
- 📊 Integrating analytics
- 💳 Adding payment processing
- 🔑 Using external services with API keys
- 🌍 Supporting multiple environments (staging, production)

---

## Example: Full Environment Setup

If implementing full environment system:

**File: `.env.example`** (committed to Git as template)
```bash
# Copy this file to .env and fill in values

# API Configuration
VITE_API_URL=https://api.ramaswamyhospitals.com

# Analytics
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Contact Information
VITE_PHONE=+919912757854
VITE_WHATSAPP=+919912757854
VITE_EMAIL=info@ramaswamyhospitals.com

# Social Media
VITE_INSTAGRAM_URL=https://www.instagram.com/drramaswamyhospitals_kavali/
VITE_LINKTREE_URL=https://linktr.ee/drramaswamyhospitals

# Feature Flags
VITE_ENABLE_BOOKING=false
VITE_ENABLE_CHAT=false

# Maps Configuration
VITE_MAPS_LAT=14.916762299999998
VITE_MAPS_LNG=79.9951669
```

**Setup Instructions:**
```bash
# Copy example file
cp .env.example .env

# Edit with your values
nano .env

# Run development
npm run dev
```

---

## Additional Resources

- [Vite Environment Variables](https://vitejs.dev/guide/env-and-mode.html)
- [Environment Security Best Practices](https://blog.gitguardian.com/secrets-api-management/)
- [Render Environment Variables](https://render.com/docs/environment-variables)

---

## Summary

✅ **Current Status**: No environment variables needed  
✅ **Future Ready**: Easy to add when needed  
✅ **Documented**: This guide provides complete reference  
✅ **Secure**: Hard-coded public info is safe for now  

---

**Last Updated**: January 2025  
**Status**: No environment variables currently in use


