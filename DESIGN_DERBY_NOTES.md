# Design Derby submission notes

## Cover-page details

- **Client option:** Option A — BeltLine Pace Run Club
- **Primary visitor:** A nervous first-timer who wants to know whether the club is welcoming, free, and easy to join.
- **Primary goal:** Help a first-timer confidently choose and attend a run.
- **Primary action:** Join a Run
- **Visual direction:** Energetic, welcoming, spacious

Team member names and roles should be added by the participants before submission.

## Design system

- **Colors:** Sunrise Yellow `#FFC93C`, Asphalt `#1E2A32`, Concrete `#F2F0EB`, Trail Green `#2E7D5B`, and Mist `#D9DEE2`
- **Heading type:** Oswald Bold
- **Body type:** Open Sans Regular, with body copy at least 16px
- **Reusable interface patterns:** Site header/navigation, primary and secondary buttons, page introduction, run card, schedule category key, partner package card, and footer
- **Frame:** Responsive layout capped at 1440px wide

## Decision log

| Conflict, gap, or question | Decision | Reason |
| --- | --- | --- |
| The founder asked to lead with Tempo, while the pace lead asked the site not to feel limited to fast runners. | Lead with Walk and Social messaging. Keep Tempo in the complete pace and weekly-run information. | First-timers are the priority audience, and the later client update explicitly prioritizes welcoming language. |
| The content pack prices the club shirt at $25, while the founder's email says $20. | Use $25. | The client update explicitly resolves the contradiction in favor of $25. |
| One email says four pages are enough, while the brief requests five. | Build Home, Weekly Runs, Join, Partners, and Gear. | The client update asks for five pages, and the navigation keeps each audience's task easy to find. |
| The schedule has multiple Saturday entries at 8:00 AM. | Keep the recurring Saturday run and all one-time events, and visually label the two categories. | This preserves every supplied fact without silently deleting or changing schedule entries. |
| The Sunday run and one special event start at Eastside Trailhead, while every run is said to end at Bean Counter Coffee. | Add “Ends at Bean Counter Coffee” to every Eastside Trailhead entry. | The note makes both supplied facts clear rather than treating them as contradictory. |
| The brand packet originally pairs yellow buttons with white text, while the client update requests Asphalt text on Sunrise Yellow. | Use Asphalt text on every yellow button and yellow surface. | The later client update is more specific and provides stronger contrast. |
| Evening safety appears as general guidance but is especially relevant to Tuesday and Thursday. | Keep the full safety section and add “Bring a light and run with a buddy” directly to both 6:30 PM run cards. | The reminder appears at the point where a runner chooses an evening run. |
| The official tagline is provided as exact client copy. | Use “Show up. We will pace you.” without contraction everywhere. | Names, facts, and supplied tagline copy must be used exactly as written. |

## AI use log

| Tool | Use | Where |
| --- | --- | --- |
| Figma Make | Implemented the React interface, responsive styling, navigation behavior, and accessibility updates; compared site copy against the supplied client packet and participant rubric. | `src/App.tsx`, `src/index.css`, and this submission note |

The team should add any other AI tools used for brainstorming, imagery, copy, or presentation preparation before submission.

## Final submission checklist

- [x] Five unique client pages
- [x] Responsive 1440px-wide desktop frame
- [x] Working navigation and calls to action
- [x] Shared typography, colors, buttons, and spacing
- [x] Client facts and FAQ preserved
- [x] Body copy at least 16px
- [x] Visible Join a Run action on every page
- [x] Decision Log with at least three entries
- [x] AI Use Log
- [ ] Add team name, member names, and roles
- [ ] Rehearse the three-minute walkthrough
