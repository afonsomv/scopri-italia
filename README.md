# Scopri Italia

A gamified travel companion PWA for learning Italian history through interactive quizzes, scavenger hunts, and fun facts. Built for a 7-day Italy trip (April 15-21, 2026).

## Features

### Cities & Spots
- **5 cities**: Pisa, Lucca, Firenze, Siena, Roma
- **42 historical spots** with rich history descriptions and tap-to-reveal fun facts
- Spots organized by day/itinerary schedule
- Per-city progress tracking with visual progress rings

### Quiz System
- **150+ multiple-choice questions** across all standard spots
- Instant visual feedback (correct/wrong animations)
- Explanations after each answer
- Streak tracking (current + best)
- Score-based result messages (Perfetto! / Great job! / Not bad! / Keep exploring!)
- Retake quizzes to improve your score (best score kept)

### Assassin's Creed Bonus Quizzes 🗡️
- **45 bonus questions** themed around AC2 (Florence) and AC Brotherhood (Rome)
- Questions blend real Renaissance history with game lore
- **Florence bonus** (gold accent): unlocks when all 3 standard Florence quizzes are complete — all 3 bonus quizzes unlock together
- **Rome bonus** (crimson accent): per-spot progressive unlock — each AC quiz unlocks as you complete the matching standard quiz
- Locked bonuses appear greyed-out with a 🔒 badge until earned
- Dev toggle on the profile page (and `?unlockAC=1` query param) for testing without playing through

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
- 13 badges across 3 categories: milestone, city, skill
- City completion badges for all 5 cities (Pisa, Lucca, Firenze, Siena, Roma)
- AC bonus completion badges (Auditore Heir, Mentor of Rome)
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
- Full offline support via custom service worker
- Precached routes for all 100+ pages
- Offline navigation banner when connectivity is lost

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15.5.14 (App Router, `output: "export"`) |
| UI | React 19.0.0 |
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
  OfflineBanner.tsx     # Offline connectivity indicator banner

data/
  badges.ts             # Badge definitions + unlock engine
  itinerary.ts          # Cities metadata + day schedule
  spots/                # 42 spots across 5 cities
  quizzes/              # 150+ standard + 45 AC bonus quiz questions
    florence-ac.ts      # Florence AC2 bonus (15 questions, gold accent)
    rome-ac.ts          # Rome AC Brotherhood bonus (30 questions, crimson accent)

lib/
  types.ts              # TypeScript interfaces
  progress.ts           # localStorage state management
  bonus.ts              # AC bonus unlock logic + dev toggle
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
- **AC Florence** `#b8860b` — Florence AC2 bonus accent (dark goldenrod)
- **AC Rome** `#8b1a1a` — Rome AC Brotherhood bonus accent (dark crimson)

Custom animations: fade-in, correct answer pulse, wrong answer shake, streak pop.

## Changelog

### v1.5.0 — Florence + AC Bonus Quizzes (2026-04-13)
- Added Firenze as a new city (Day 3 sprint between Lucca and Siena): 3 spots (Duomo, Signoria, Ponte Vecchio) + 9 standard quiz questions
- Removed San Gimignano from the active itinerary (no longer visited; data files retained for fallback)
- Moved `siena-cripta` and `siena-opera-duomo` to a new Day 4 morning slot in Siena to match updated Notion itinerary
- Added Assassin's Creed bonus quiz tier with 45 questions blending real history and game lore:
  - 3 Florence AC2 bonus quizzes (gold accent), unlock together when all 3 standard Florence quizzes complete
  - 6 Rome AC Brotherhood bonus quizzes (crimson accent), each unlocking individually with the matching spot's standard quiz
- New `BonusQuizCard` component with locked/unlocked states
- New `lib/bonus.ts` for unlock logic with dev bypass (profile toggle + `?unlockAC=1` query param)
- New badges: Florentine Renaissance (city), Auditore Heir (Florence AC complete), Mentor of Rome (Rome AC complete)
- Removed Tower Master (San Gimignano) badge

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

### v1.4.0 — Offline Support (2026-04-03)
- Static export (`output: "export"`) for full offline compatibility
- Custom service worker precaching all 100+ routes
- PWA icons (192×192 and 512×512)
- Offline navigation banner indicating when cached content is in use

### v1.1.0 — Navigation (2026-03-28)
- Added bottom navigation bar with Home, Badges, and Profile tabs
- Active tab detection with terracotta highlight
- Safe area padding for notched devices
