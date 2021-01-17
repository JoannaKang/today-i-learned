# what is Semantic tag

Semantic HTML is a coding style. It is the use of HTML markup to reinforce the semantics or meaning of the content.

1. header: container for introductory content or a set of navigational links.
2. Nav: set of navigation links
3. aside: some content aside from the content -like sidebar
4. main </br>: specifes the main content of document
   &nbsp;&nbsp; - section: divide compartment dependin on theme </br>
   &nbsp;&nbsp; - article: group of reusable elements
5. footer: Defines a footer for a document or section
6. div: grouping tags for styling - block level
7. span: in-line level tag

# Do all HTML tags come in a pair?

No, there are single HTML tags that do not need a closing tag. Examples are the <img> tag and <br> tags.

# Element vs Tags

- element: individual component of html documnet, represent sematic meaning, include open tag & closing tag
- Tag: tag has attiribute and value

# What does a doctype do?

- The <!DOCTYPE html> declaration must be placed in the beginning of every HTML document
- It informs the web browser about the type and version of HTML used in building the web document.

# Describe the difference between <script>, <script async> and <script defer>.

- script: used to define a client-side script
- script async: the script will be executed while the page continues the parsing
- script defer: The defer attribute tells the browser to only execute the script file once the HTML document has been fully parsed

# Describe the difference between a cookie, sessionStorage and localStorage.

- Cookie: When user visit a web page, user profile can be stored in a cookie, next time user visit tha page, cookie remembers the user profile
- local storage: data persist until explicityl deleted
- session storage: changes are only available per tab

# How do you serve a page with content in multiple languages?

# What kind of things must you be wary of when designing or developing for multilingual sites?#

# What are data- attributes good for?

# Consider HTML5 as an open web platform. What are the building blocks of HTML5?

# Why is it generally a good idea to position CSS <link>s between <head></head> and JS <script>s just before </body>? Do you know any exceptions?
- Putting <link>s in the head is part of the specification. 
- The problem with putting stylesheets near the bottom of the document is that Some browsers block rendering to avoid having to repaint elements of the page if their styles change. The user is stuck viewing a blank white page. It prevents the flash of unstyled contents.

# What is progressive rendering?

# Why you would use a srcset attribute in an image tag? Explain the process the browser uses when evaluating the content of this attribute.

# Have you used different HTML templating languages before?

# What is the difference between canvas and svg?
