---
name: layoutRedesign
description: Transform website layout to match a reference design specification with new components and styling.
argument-hint: A design specification document describing the target layout and design pattern (e.g., UI_IDEAS.md)
---
# Layout Redesign Task

You are tasked with transforming a website layout based on a design specification document.

## Instructions:

1. **Review the Design Specification**
   - Examine the provided design document (e.g., UI_IDEAS.md) 
   - Identify the target layout pattern (e.g., GitHub profile style, multi-column layout, etc.)
   - Note key structural changes and new components needed

2. **Analyze Current Implementation**
   - Review the existing page structure and components
   - Identify which existing components can be reused vs. which need restructuring
   - Check for style dependencies

3. **Create New Components**
   - Create necessary React/JavaScript components for the new layout
   - Name components clearly and logically (e.g., ProfileSidebar, ProfileTabs)
   - Ensure components accept appropriate props and maintain reusability

4. **Update Styles**
   - Create new SCSS/CSS files for the redesigned layout
   - Implement responsive design for mobile, tablet, and desktop
   - Ensure styles are consistent with the existing design system
   - Update imports in main style files (e.g., globals.scss)

5. **Integrate Components**
   - Update the main page file to use new components
   - Maintain header, footer, and other existing elements as specified
   - Test tab navigation and component switching if applicable

6. **Verify Build**
   - Ensure no build errors or console warnings
   - Verify responsive behavior across breakpoints
   - Test all interactive elements (tabs, navigation, etc.)

## Tips:
- Don't overcomment code; add comments only to complex logic
- Follow the existing code style and naming conventions
- Use existing components as reference for structure and patterns
- Keep styling DRY and maintainable
