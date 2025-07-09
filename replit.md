# Johnmatthew's Resume Website

## Overview

This is a simple, responsive personal resume website for Johnmatthew built with Flask and Bootstrap. The application serves as an online portfolio showcasing academic and professional credentials through a clean, single-page design. The site is designed to be hosted on Replit and targets potential employers, collaborators, and professional network connections.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: Single-page HTML application using Bootstrap 5 with dark theme
- **CSS Framework**: Bootstrap with Replit's custom dark theme + Font Awesome icons
- **Responsive Design**: Mobile-first approach using Bootstrap's responsive grid system
- **Navigation**: Fixed-top navbar with smooth scrolling between sections

### Backend Architecture
- **Framework**: Flask (Python) - minimal setup serving static content
- **Structure**: Simple Flask app with single route serving the main template
- **Session Management**: Basic Flask session configuration with environment-based secret key
- **Logging**: Debug-level logging enabled for development

### Static Content Strategy
- **Data Model**: No database required - all content is static and embedded in templates
- **Content Sections**: Hero, About, Education, Experience, and Contact sections
- **Asset Management**: Static files organized in `/static/` directory (CSS, JS, images)

## Key Components

### 1. Flask Application (`app.py`)
- Minimal Flask setup with single route
- Environment-based configuration for session secret
- Debug mode enabled for development
- Serves on all interfaces (0.0.0.0:5000)

### 2. Template Structure (`templates/index.html`)
- Single-page layout with fixed navigation
- Bootstrap-based responsive design
- Semantic HTML structure for accessibility
- Font Awesome integration for icons

### 3. Custom Styling (`static/css/style.css`)
- Hero section with gradient background and pattern overlay
- Timeline styles for experience/education sections
- Smooth scrolling implementation
- Navigation transition effects

### 4. Interactive Features (`static/js/script.js`)
- Smooth scrolling navigation
- Active section highlighting in navbar
- Responsive navigation behavior

## Data Flow

1. **Request Flow**: User requests → Flask app → Single route handler → Template rendering
2. **Static Assets**: Browser requests static files → Flask serves from `/static/` directory
3. **Navigation**: JavaScript handles smooth scrolling and active state management
4. **Content Display**: All content is static and rendered server-side in the initial page load

## External Dependencies

### Frontend Dependencies (CDN)
- **Bootstrap 5**: Replit's custom dark theme variant
- **Font Awesome 6.4.0**: Icon library for social media and UI elements

### Backend Dependencies
- **Flask**: Python web framework
- **Standard Library**: `os`, `logging` for basic functionality

### Development Dependencies
- **Python 3.x**: Runtime environment
- **Replit**: Hosting platform with built-in web server

## Deployment Strategy

### Current Setup
- **Platform**: Replit with built-in web hosting
- **Environment**: Development mode with debug enabled
- **Configuration**: Environment variables for session secrets
- **Static Files**: Served directly by Flask in development

### Production Considerations
- Disable debug mode in production
- Use proper secret key management
- Consider using a production WSGI server
- Implement proper error handling and logging

### Security Measures
- Session secret from environment variables
- No sensitive data storage
- Static content only (no user input processing)
- Email contact information (consider obfuscation for spam prevention)

## Development Notes

The application follows a simple, maintainable architecture suitable for a personal resume website. The Flask backend is minimal by design, focusing on serving static content efficiently. The frontend uses modern web standards with Bootstrap for responsive design and JavaScript for enhanced user experience.

Future enhancements could include:
- Contact form functionality
- Content management system
- Dynamic content loading
- Performance optimizations
- SEO improvements