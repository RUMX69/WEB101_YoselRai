Concepts Applied
1. Next.js App Router

File-based routing: Built pages by structuring files within the app directory (profile/page.jsx, upload/page.jsx, etc.)
Layout system: Set up a root layout along with nested layouts following the App Router pattern
Client vs Server Components: Applied the 'use client' directive wherever components needed interactivity

2. React Components Architecture

Component Composition: Developed reusable components such as VideoCard that take in props
Component Organization: Grouped components into clearly defined folders (layout/, ui/)
State Management: Leveraged the useState hook to handle interactive UI elements (e.g., button toggling)

3. Tailwind CSS Styling

Utility-first methodology for building UIs quickly
Responsive layouts using flexbox and grid
Custom styling tailored to a TikTok-inspired design

4. Form Handling with React Hook Form

Form registration: Connected inputs to form state using the register function
Validation rules: Added required fields, pattern checks, and minLength constraints
Error handling: Showed validation messages beneath each input field
Form submission: Managed loading states and blocked default browser behavior

5. React Icons Integration

Integrated Font Awesome icons through the react-icons library
Created clickable icon buttons for various user interactions


What I Learned
Key Learning Outcomes

Next.js App Router Benefits

The App Router offers a cleaner and more structured approach to managing routes
Persistent layout components across navigation leads to better performance
Knowing when to use client vs server components is an essential skill


Form Validation Importance

Validating inputs properly ensures only clean data gets submitted
Instant feedback during form filling enhances the overall user experience
Confirming passwords requires writing custom validation logic


Component Reusability

Generic components like VideoCard reduce the need to rewrite code
Props-driven components are adaptable and easy to reuse
Using placeholder data arrays allows UI testing before connecting a real API

Challenges

Buttons Appearing Double

Issue: When rendering the video feed, action buttons such as the like and share buttons were appearing twice on each card. The UI looked duplicated and clicking one button triggered both.
Solution: I traced the issue and found that the VideoCard component was being rendered twice inside the parent component — once inside a map function and once hardcoded below it as a test. Removing the duplicate render fixed the issue immediately.


Page Not Refreshing After Navigation

Issue: After navigating between pages using the sidebar links, the page content would not update. It appeared stuck on the previous page even though the URL changed correctly in the browser.
Solution: I discovered I had used a regular <a> HTML tag instead of Next.js's <Link> component. Replacing all anchor tags with <Link> from next/link resolved the navigation issue.


Tailwind Classes Not Applying

Issue: Several Tailwind utility classes such as rounded-full and text-pink-500 were not being applied to components even though they were written correctly.
Solution: I checked the tailwind.config.js file and noticed the content paths were not set up to scan my component files. After updating the paths to include ./src/**/*.{js,jsx}, all classes started working as expected.


useState Not Updating the UI

Issue: After clicking the follow button, the button text was supposed to switch from "Follow" to "Following" but the label stayed unchanged even though no errors appeared in the console.
Solution: I had mistakenly declared the state variable outside the component function, which meant it was not tied to React's rendering cycle. Moving the useState declaration inside the component fixed the re-render behavior.


Layout Shifting on Mobile

Issue: On smaller screen sizes, the sidebar was overlapping the main content area, pushing video cards out of view and breaking the overall layout.
Solution: I had forgotten to add responsive prefixes to the layout classes. Adding hidden md:flex to the sidebar and adjusting the main content area with w-full md:ml-64 corrected the layout across all screen sizes.