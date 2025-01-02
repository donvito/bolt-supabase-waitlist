# Waitlist Landing Page

A modern, responsive waitlist landing page built with React, TypeScript, and Supabase. Collect and manage email signups for your upcoming product launch with real-time counter updates.

🚀 **Quick Start**: [Customize this template in Bolt](https://bolt.new/github/donvito/bolt-supabase-waitlist)

## Features

- 🎨 Modern UI with Tailwind CSS
- 📱 Fully responsive design
- ⚡ Real-time waitlist counter
- 🔒 Secure email storage with Supabase
- 🚀 Built with Vite for optimal performance
- 💪 Type-safe with TypeScript
- 🧩 Component-based architecture with React

## Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Database**: Supabase
- **Icons**: Lucide React
- **Language**: TypeScript
- **Linting**: ESLint

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file with your Supabase credentials:
   ```
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## Project Structure

```
src/
├── components/          # React components
│   ├── WaitlistForm.tsx    # Email submission form
│   └── WaitlistCounter.tsx # Real-time counter
├── lib/                # Utility functions and configurations
│   └── supabase.ts     # Supabase client configuration
├── types.ts           # TypeScript type definitions
├── App.tsx           # Main application component
└── main.tsx          # Application entry point
```

## Database Schema

The project uses a simple Supabase schema:

```sql
Table: waitlist
- id: uuid (primary key)
- email: text (unique)
- created_at: timestamptz
```

## Features in Detail

- **Email Collection**: Secure storage of email addresses with duplicate prevention
- **Real-time Counter**: Live updates of waitlist signups using Supabase's real-time subscriptions
- **Form Validation**: Client-side email validation and error handling
- **Loading States**: Smooth loading states and success/error feedback
- **Row Level Security**: Secure database access with Supabase RLS policies

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is MIT licensed.
