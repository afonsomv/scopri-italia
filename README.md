# Scopri Italia

A gamified travel companion PWA for learning Italian history through interactive quizzes, scavenger hunts, and fun facts. Built for a 7-day Italy trip (April 15-21, 2026).

## Features

### Cities & Spots
- **5 cities**: Pisa, Lucca, Siena, San Gimignano, Roma
- **42 historical spots** with rich history descriptions and tap-to-reveal fun facts
- Spots organized by day/itinerary schedule
- Per-city progress tracking with visual progress rings

### Quiz System
- **150+ multiple-choice questions** across all spots
- Instant visual feedback (correct/wrong animations)
- Explanations after each answer
- Streak tracking (current + best)
- Score-based result messages (Perfetto! / Great job! / Not bad! / Keep exploring!)
- Retake quizzes to improve your score (best score kept)

### Scavenger Hunt Challenges
- 4 challenge types: Find, Count, Photo, Observe
- Toggle challenges as complete/incomplete
- Hint system with reveal/hide
- Visual completion indicators

### User Profile
- Custom name (max 20 characters)
- Avatar picker (16 emoji options)
- Personalized greeting on home screen
- Progress reset option

### Badges & Trophy Room
- 12 badges across 3 categories: milestone, city, skill
- City completion badges for all 5 cities
- Skill badges for perfect scores and answer streaks
- Milestone badges (first quiz, halfway, grand tourist)
- Challenge hunter badge for scavenger hunt completions
- Trophy room page with unlocked/locked badge grid and progress bar

### Progress & Gamification
- All progress persisted in localStorage
- Per-spot completion tracking
- Per-city percentage progress with progress rings
- Total score aggregation
- Current and best streak tracking
- Completion badges on spots and cities

### Navigation
- Fixed bottom navigation bar (Home, Badges, Profile)
- Active tab highlighting with terracotta color
- Safe area support for notched devices

### PWA Support
- Installable as a mobile app (Add to Home Screen)
- Standalone display mode
- Custom theme colors (terracotta/cream)

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16.2.1 (App Router) |
| UI | React 19.2.4 |
| Styling | Tailwind CSS 4 |
| Language | TypeScript 5 |
| Font | Geist |
| State | localStorage (no backend) |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) on your phone or browser.

## Project Structure

```
app/
  page.tsx              # Home dashboard (cities + stats)
  badges/page.tsx       # Trophy room (badge collection grid)
  profile/page.tsx      # Profile setup (name + avatar)
  city/[slug]/page.tsx  # City detail (spots by day + progress)
  spot/[id]/page.tsx    # Spot detail (history, facts, challenges)
  quiz/[id]/page.tsx    # Quiz play screen
  layout.tsx            # Root layout, PWA meta, fonts

components/
  BottomNav.tsx         # Fixed bottom navigation bar
  CityCard.tsx          # City card with progress ring
  SpotCard.tsx          # Spot item with completion status
  QuizQuestion.tsx      # Interactive quiz question UI
  ProfileAvatar.tsx     # Avatar selection grid
  ProgressRing.tsx      # SVG circular progress indicator

data/
  badges.ts             # Badge definitions + unlock engine
  itinerary.ts          # Cities metadata + day schedule
  spots/                # 42 spots across 5 cities
  quizzes/              # 150+ quiz questions

lib/
  types.ts              # TypeScript interfaces
  progress.ts           # localStorage state management
```

## Routes

| Route | Description |
|-------|-------------|
| `/` | Home dashboard with city cards and total stats |
| `/profile` | Create/edit profile, reset progress |
| `/city/[slug]` | City overview with spots grouped by day |
| `/spot/[id]` | Spot detail with history, facts, and challenges |
| `/badges` | Badges collection |
| `/quiz/[id]` | Take quiz for a specific spot |

## Design

Italian heritage color palette:
- **Terracotta** `#c75c2c` — primary actions
- **Olive** `#606c38` — success states
- **Gold** `#dda15e` — streaks, highlights
- **Cream** `#faf8f5` — background
- **Ink** `#2b2b2b` — text

Custom animations: fade-in, correct answer pulse, wrong answer shake, streak pop.

## Changelog

### v1.0.0 — Initial Release (2026-03-28)
- Home dashboard with 5 city cards and overall stats
- City pages with spots organized by itinerary day
- 42 spot detail pages with history, fun facts, and scavenger hunt challenges
- Quiz system with 150+ questions, streak tracking, and score persistence
- Profile system with 16 avatar options and name customization
- Progress tracking with localStorage persistence (per-spot, per-city, total)
- Progress rings on city cards and city pages
- PWA manifest for mobile installation
- Italian heritage design system (terracotta/olive/gold/cream)
- Custom animations (fade-in, correct/wrong feedback, streak celebration)

### v1.3.0 — Tap-to-Reveal Fun Facts (2026-03-28)
- Fun facts on spot pages are now hidden behind tap-to-reveal cards
- Gradient hint cards with "?" icon invite tapping
- Smooth fade-in animation when facts are revealed

### v1.2.0 — Badges & Trophy Room (2026-03-28)
- Added 12 badge definitions across milestone, city, and skill categories
- Badge unlock engine that evaluates game state against badge conditions
- Trophy room page with 2-column grid showing unlocked/locked badges
- Progress bar showing total badge completion

### v1.1.0 — Navigation (2026-03-28)
- Added bottom navigation bar with Home, Badges, and Profile tabs
- Active tab detection with terracotta highlight
- Safe area padding for notched devices
