# Overview

Lendanfit is a fitness and nutrition web application that generates personalized 6-month exercise and nutrition plans without requiring user registration. Users complete an initial questionnaire about their age, daily steps, health status, and fitness goals, and the app creates customized plans with monthly progressions. The application features a dark theme with fitness-oriented UI design, PDF export functionality for complete plans, and responsive design for all devices.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite for build tooling and hot module replacement
- **Routing**: Wouter for lightweight client-side routing with simple Switch/Route pattern
- **UI Components**: Shadcn/ui component library built on Radix UI primitives with Tailwind CSS
- **State Management**: React hooks for local state, TanStack Query for server state management (though minimal server interaction)
- **Styling**: Tailwind CSS with custom dark theme variables, responsive design patterns

## Backend Architecture
- **Server**: Express.js with TypeScript for API endpoints
- **Development**: Vite integration for development server with middleware mode
- **Static Assets**: Serves built React application in production
- **Error Handling**: Centralized error middleware with status code management
- **Logging**: Custom request logging middleware for API endpoints

## Data Storage
- **Database ORM**: Drizzle ORM configured for PostgreSQL with migration support
- **Schema**: Basic user table structure defined in shared schema
- **Storage Interface**: Abstracted storage layer with in-memory implementation for development
- **Connection**: Neon Database serverless PostgreSQL for production

## Authentication & Authorization
- **No Authentication**: Application explicitly designed without user registration or login
- **Session Management**: Connect-pg-simple configured for potential session storage (not currently used)
- **Data Persistence**: Plans are generated client-side and not stored server-side

## Application Logic
- **Plan Generation**: Static data-driven approach with predefined exercise and nutrition plans
- **User Flow**: Questionnaire → Dashboard → Exercise/Nutrition Plans → PDF Export
- **Personalization**: Plans selected based on fitness level (basic/medium/advanced) derived from daily steps
- **Content Structure**: 6-month progressive plans with monthly variations and detailed recommendations

# External Dependencies

## UI & Styling
- **Radix UI**: Comprehensive set of unstyled, accessible UI primitives
- **Tailwind CSS**: Utility-first CSS framework with PostCSS processing
- **Lucide React**: Feather-inspired icon library for consistent iconography
- **Class Variance Authority**: Utility for creating variant-based component APIs

## Development Tools
- **Vite**: Build tool with React plugin and development server
- **TypeScript**: Type safety across frontend and backend
- **ESBuild**: Fast bundling for production server builds
- **Replit Integration**: Development environment plugins for runtime error handling

## Database & ORM
- **Neon Database**: Serverless PostgreSQL database service
- **Drizzle ORM**: Type-safe ORM with schema definition and migrations
- **Drizzle Kit**: CLI tool for database operations and schema management

## PDF Generation
- **jsPDF**: Client-side PDF generation library for plan exports
- **Dynamic Import**: Lazy loading of PDF library to optimize bundle size

## State Management
- **TanStack Query**: Server state management with caching and synchronization
- **React Hook Form**: Form validation and submission handling
- **Zod**: Schema validation for form inputs and data structures

## Utility Libraries
- **Date-fns**: Date manipulation and formatting utilities
- **Nanoid**: URL-safe unique ID generation
- **CLSX/Tailwind Merge**: Conditional CSS class composition