# Difference between React vs Vue

- Both Vue.Js and React.Js are based on the Virtual DOM model
- Vue has following advantage over React:

1. it is smaller and faster;
2. convenient templates simplify the process of developing;
3. it is simpler in terms of syntax.

- React has the following advantages over Vue

1. gives more flexibility in large apps developing;
2. easier to test;
3. suitable for mobile apps creating;
4. more information and solutions available.

# Have you ever used any kind of state management tool? Do you prefer to use Redux or context api to manage state?

- Most of the case, I prefer to use context api because It requiers less learning curve and less code
- Managing Redux store state can be useful for big project but there is cons that Redux requires adding more libraries to the application bundle
- Or If I use GraphQl, It's easirer to manage state globally without Redux. Also I can fix data overfetching problems as well

# How to make better application structure in terms of reusability

- If I found some part of application has the same structure but only need different data, then I would consider separate that part as component
- Create new component with separate files, Import that component on the top of the main file
- Register that sub-component in component section, and bind that component inside of template as kebab-case style
- Bind the pros using data, data can be manipulated by different methods

# What is lifecycle hooks in Vue?

- Origin URL: https://www.digitalocean.com/community/tutorials/vuejs-component-lifecycle

* Lifecycle hooks allow you to know when your component is created, added to the DOM, updated, or destroyed.

1. Creation: Initialize component

```
(1) beforeCreate: this hook runs at the very initialization of your component. data has not been made reactive, and events have not been set up yet
(2) created: You are able to access reactive data and events that are active with the created hook. Templates and Virtual DOM have not yet been mounted or rendered:
```

2. Mounting (DOM Insertion): They allow you to access your component immediately before and after the first render.

```
(1) beforeMount: This hook runs right before the initial render happens and after the template or render functions have been compiled
(2) mouted: you will have full access to the reactive component, templates, and rendered DOM (via this.$el).
```

3. Updating: Updating hooks are called whenever a reactive property used by your component changes or something else causes it to re-render

- Do not use updating hooks if you need to know when a reactive property on your component changes. → Use computed properties or watchers for that instead.

```
(1) beforeUpdate: This hook runs after data changes on your component and the update cycle begins, right before the DOM is patched and re-rendered.
(2) Updated: The updated hook runs after data changes on your component and the DOM re-renders. Use updated if you need to access the DOM after a property change
```

4. Destruction: Destruction hooks allow you to perform actions when your component is destroyed, such as cleanup or analytics sending.

```
(1) beforeDestroy: This hook is fired right before teardown. Your component will still be fully present and functional.
(2) destroyed: Use destroyed if you need do any last-minute cleanup or inform a remote server that the component was destroyed:
```

# What is MVC design pattern?

- The Model-View-Controller (MVC) is an architectural pattern that separates an application into three main logical components: the model, the view, and the controller.

1. Model: The central component of the pattern. It is the application's dynamic data structure, independent of the user interface. It directly manages the data, logic and rules of the application.
2. View: Any output representation of information, such as a chart or a diagram.
3. Controller: Accepts input and converts it to commands for the model or view.

# How to improve web accessibility?

- Origin link : https://webaccess.berkeley.edu/resources/tips/web-accessibility

1. Choose a content management system that supports accessibility: Once you've chosen a CMS that suits your needs, make sure to choose a theme/template that is accessible. For elements like editing toolbars and video players, make sure that they support creating accessible content
2. Use headings correctly to organize the structure of your content: Be sure to adhere to the correct order of headings, and separate presentation from structure by using CSS
3. Include proper alt text for images: Alt text should be provided for images, so that screen reader users can understand the message conveyed by the use of images on the page.
4. Give your links unique and descriptive names: When including links in your content, use text that properly describes where the link will go. Using "click here" is not considered descriptive, and is ineffective for a screen reader user.
5. Use color with care for those who people have color deficiency: Be sure to also distinguish blocks of content from one another using visual separation (such as whitespace or borders).
6. Design your forms for accessibility

- Each field in your form should have a well-positioned, descriptive label.
- As you are going through a form field, a person should be able to tab through the form and fill out all the fields before getting to the "Submit" button, or they may not even realize that additional fields exist.

7. Use tables for tabular data, not for layout

- When a data table is necessary, use headers for rows and columns, which helps explain the relationships of cells.
- Table captions (HTML5) can be used to give additional information to users about how best to read and understand the table relationships.

8. Ensure that all content can be accessed with the keyboard alone in a logical way
9. Use ARIA roles and landmarks (but only when necessary)

- ARIA (Accessible Rich Internet Applications) is a complex, powerful technical specification for adding accessibility information to elements that are not natively accessible.

10. Make dynamic content accessible

- When content updates dynamically (i.e. without a page refresh), screen readers may not be aware. This includes screen overlays, lightboxes, in-page updates, popups, and modal dialogs. Keyboard-only users may be trapped in page overlays.
- These functions can easily be made accessible. Options include ARIA roles and alerts, as well as front-end development frameworks that specifically support accessibility

# How to improve website in terms of SEO?

- Origin link : https://www.jeffbullas.com/13-super-easy-ways-to-immediately-improve-your-seo-ranking/

1. Site architecture and navigation: A “flat” site architecture not only makes content easier to find, it can also help improve SEO ranking as it surfaces links of all critical pages making it easier for search engines to crawl the entire site.
2. Metadata: When designing your website, each page contains a space between the <head> tags to insert metadata, or information about the contents of your page.
3. Increase page load speed: using a caching plug-ins, making sure the code is clean and streamlined, optimizing image sizes, reducing the number of plug-ins, and minimizing redirects.
4. Mobile optimization
5. Social sharing: Installing social sharing buttons on your website not only makes it easy for users to share your content, and thereby improve user experience, it can also help you rank higher on searches.
6. Layout and formatting: Proper formatting and a user-friendly layout can help improve user experience and make your content easy to scan and digest, so your readers will stay on your site longer and consume your website’s information.
7. Outbound links: Linking out to well-respected authority sites will not only increase the relevancy of your content and time readers spend on your site, but it is also believed to send trust signals to Google and improve SEO ranking.

# How you approach when you debugging code?

# What's your favourite tech stack?
