# Explain your understanding of the box model and how you would tell the browser in CSS to render # your layout in different box models.

# What does \* { box-sizing: border-box; } do? What are its advantages?

- The box-sizing property allows us to include the padding and border in an element's total width and height.
- If you set box-sizing: border-box; on an element, padding and border are included in the width and height

# What is the CSS display property and can you give a few examples of its use?

# What's the difference between inline and inline-block?

# What's the difference between the "nth-of-type()" and "nth-child()" selectors?

- nth-of-type : Specify a background color for every <p> element that is the second p element of its parent:

```
p:nth-of-type(2) {
  background: red;
}
```

- The :nth-child() CSS pseudo-class matches elements based on their position in a group of siblings.

```
/* Selects the second <li> element in a list */
li:nth-child(2) {
  color: lime;
}
```

# What's the difference between a relative, fixed, absolute and statically positioned element?

- Static: this is the default value, all elements are in order as they appear in the document.
- Relative: the element is positioned relative to its normal position.
- Absolute: the element is positioned absolutely to its first positioned parent.
- Fixed: the element is positioned related to the browser window.
- Sticky:the element is positioned based on the user's scroll position.

# What is CSS selector specificity and how does it work?

- css selectors over-written the preset styles

# What's the difference between "resetting" and "normalizing" CSS? Which would you choose, and why?

# Describe Floats and how they work.

# Describe z-index and how stacking context is formed.

# Describe BFC (Block Formatting Context) and how it works.

# What are the various clearing techniques and which is appropriate for what context?

# How would you approach fixing browser-specific styling issues?

# How do you serve your pages for feature-constrained browsers?

# What techniques/processes do you use?

# What are the different ways to visually hide content (and make it available only for screen readers)?

# Have you ever used a grid system, and if so, what do you prefer?

# Have you used or implemented media queries or mobile specific layouts/CSS?

# Are you familiar with styling SVG?

# Can you give an example of an @media property other than screen?

# What are some of the "gotchas" for writing efficient CSS?

# What are the advantages/disadvantages of using CSS preprocessors?

# Describe what you like and dislike about the CSS preprocessors you have used.

# How would you implement a web design comp that uses non-standard fonts?

# Explain how a browser determines what elements match a CSS selector.

# Describe pseudo-elements and discuss what they are used for.

# What existing CSS frameworks have you used locally, or in production? How would you change/improve them?

# Have you used CSS Grid?

# Can you explain the difference between coding a web site to be responsive versus using a mobile-first strategy?

# Have you ever worked with retina graphics? If so, when and what techniques did you use?

# Is there any reason you'd want to use translate() instead of absolute positioning, or vice-versa? And why?

# How is clearfix css property useful?

# Can you explain the difference between px, em and rem as they relate to font sizing?

# Can you give an example of a pseudo class? Can you provide an example use case for a pseudo class?

# What is the difference between a block level element and an inline element. C
