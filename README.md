[Live version](https://withlocals-assessment.vercel.app/)(hosted on Vercel)

This is a very simple solution and a lot of things could be improved.

Some of the ways it could be improved further —
- I felt the filters in the design could be improved so I added the option to use a `Select` filter. Use the query param `?filterType=select` to toggle it
- The styling could be improved by switching to a proper design system with SCSS variables for the colours, fonts, spacing, etc.
- No error handling at the moment except for passing default values
- Testing is non-existent. I would add 
  - Unit tests for the individual components and utils
  - E2E tests to make sure the filters work
- Environment variables for the backend endpoint
- Pagination

I didn't add the above because I'm too busy atm but happy to discuss all of these in the next interview 😉
