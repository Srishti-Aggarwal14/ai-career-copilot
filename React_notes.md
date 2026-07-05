# React Notes

## Day 1

### What is React?
React is a JavaScript library used to build user interfaces.

### What is a Component?
A component is a reusable part of a webpage.

Examples:
- Navbar
- Hero Section
- Footer
- Login Form

### What does return do?
Whatever is written inside return is displayed on the browser.

### Files Learned
- App.jsx
- main.jsx
- App.css
- index.css

### Today's Achievement
- Installed React using Vite
- Ran my first React application
- Understood the purpose of App.jsx
## Rule 1

A React component should always start with a capital letter.

Example:

function App() {}

Reason:
React treats capitalized functions as components.
## Day 1 - JSX

JSX stands for JavaScript XML.

It allows us to write HTML-like code inside JavaScript.

Example:

<h1>Hello</h1>

React converts JSX into JavaScript before running it.
# 🚀 React Notes

---

# Day 1 - React Basics

## What is React?

React is a JavaScript library used to build fast, interactive and reusable user interfaces (UI).

Example:
- Amazon
- Netflix
- Instagram
- LinkedIn

These websites are built using reusable components.

---

## What is a Component?

A Component is a reusable piece of UI.

Think of a website as LEGO blocks.

Website
│
├── Navbar
├── Hero Section
├── Features
├── Cards
├── Footer

Each block is called a Component.

Example:

function App() {
    return <h1>Hello</h1>;
}

Here App is a Component.

---

## Why Components?

Without Components:

Every page needs to be written again.

With Components:

Write once.
Use anywhere.

Example:

Navbar

can be used on

Home Page
About Page
Contact Page

without writing it again.

---

## React Component Naming Rule

A React Component must always start with a Capital Letter.

✅ Correct

function App(){}

function Navbar(){}

❌ Wrong

function app(){}

function navbar(){}

Interview Question:
Why?

Because React treats capitalized functions as Components.

---

## JSX

JSX stands for

JavaScript XML

It allows us to write HTML inside JavaScript.

Example

return (
    <h1>Hello</h1>
)

This looks like HTML,

but actually it is JSX.

React converts JSX into JavaScript before running it.

---

## return

Whatever is written inside return()

is displayed on the browser.

Example

return(
    <h1>Hello World</h1>
)

Output

Hello World

---

## div

div is a container.

Think of it as a Box.

Example

<div>

    <h1>Heading</h1>

    <p>Paragraph</p>

</div>

Everything is kept inside the div.

---

## HTML Tags Used Today

<h1>

Largest Heading

<h2>

Second Largest Heading

<p>

Paragraph

<button>

Creates a Button

<br />

Moves content to the next line

---

## CSS in React

Every component can have its own CSS file.

Example

App.jsx

imports

App.css

using

import "./App.css";

Without importing,

CSS will NOT be applied.

---

## Difference between App.css and index.css

App.css

- Used for styling App Component.
- Imported inside App.jsx.

index.css

- Global CSS.
- Imported once inside main.jsx.
- Applies to the whole application.

---

## main.jsx

main.jsx is the entry point of the React application.

It loads the App component.

Example

createRoot(document.getElementById("root")).render(
    <App />
);

---

## App.jsx

App.jsx is the main component of our application.

Everything starts from here.

---

## Hot Reload / Fast Refresh

When we save the file,

React automatically updates the browser.

No need to refresh manually.

Shortcut

Ctrl + S

Browser updates automatically.

---

## Interview Questions

Q1. What is React?

A JavaScript library used for building user interfaces.

----------------------------------

Q2. What is a Component?

A reusable piece of UI.

----------------------------------

Q3. What is JSX?

JavaScript XML.

It allows writing HTML-like syntax inside JavaScript.

----------------------------------

Q4. What does return do?

It tells React what should be displayed on the browser.

----------------------------------

Q5. Difference between App.css and index.css?

App.css

Component specific.

index.css

Global styling.

----------------------------------

Q6. Why should Component names start with Capital Letters?

React recognizes Capitalized functions as Components.

---

# Today's Achievement

✅ Installed React using Vite

✅ Created first React project

✅ Understood Components

✅ Learned JSX

✅ Learned CSS Import

✅ Understood App.jsx

✅ Understood main.jsx

✅ Created first webpage

---

# Project

Project Name

AI Career Copilot

Goal

Build a Placement Preparation Platform using React.

Features (Planned)

- Resume Analyzer
- ATS Checker
- AI Mock Interview
- DSA Tracker
- Company Preparation
- Dashboard
- Authentication
# Day 2 - Components

## What is a Component?

A Component is a reusable piece of UI.

Examples

- Navbar
- Footer
- Hero
- Login Form
- Resume Card

---

## Why Components?

Without Components

Large files
Hard to maintain
Code duplication

With Components

Reusable
Easy to maintain
Clean code

---

## Creating a Component

Example

function Navbar() {
    return (
        <nav>
            <h2>AI Career Copilot</h2>
        </nav>
    );
}

export default Navbar;

---

## Using a Component

Import

import Navbar from "./components/Navbar";

Use

<Navbar />

---

## React Flow

main.jsx

↓

App.jsx

↓

Navbar.jsx
# Day 3 - JSX, className, Fragments & Component Styling

---

# 1. class vs className

In HTML

```html
<div class="hero"></div>
```

In React

```jsx
<div className="hero"></div>
```

Why?

Because `class` is a reserved keyword in JavaScript.

Therefore React uses `className`.

Interview Question

Q. Why do we use className instead of class?

A. Because class is a reserved keyword in JavaScript.

---

# 2. Styling Components

CSS can be attached to Components using

```jsx
import "./App.css";
```

Example

```jsx
<div className="hero">
```

```css
.hero{
    text-align:center;
}
```

---

# 3. CSS Classes

A class is used to style multiple elements.

Example

```css
.card{
    border-radius:10px;
}
```

Use

```jsx
<div className="card">
```

---

# 4. JSX Attributes

HTML

```html
class=""
```

React

```jsx
className=""
```

HTML

```html
for=""
```

React

```jsx
htmlFor=""
```

React uses camelCase for many attributes.

---

# 5. React Fragment

Sometimes we don't want an extra div.

Instead of

```jsx
<div>
    <Navbar/>
    <Hero/>
</div>
```

we can write

```jsx
<>
    <Navbar/>
    <Hero/>
</>
```

This is called a Fragment.

It groups multiple elements without creating an extra HTML element.

---

# 6. Why use Fragments?

Without Fragment

```jsx
<div>
    ...
</div>
```

Creates an extra div in the browser.

With Fragment

```jsx
<>
    ...
</>
```

No extra div is created.

Cleaner HTML.

---

# 7. Component Styling

Instead of styling every tag

```css
h1{
}
```

We usually style a class

```css
.hero h1{
}
```

Benefits

- Better organization
- Avoids conflicts
- Easier maintenance

---

# 8. Semantic HTML

Instead of writing only div everywhere,

use meaningful tags.

Examples

<header>
Website Header

<nav>
Navigation Bar

<main>
Main Content

<section>
One logical section of the page

<article>
Independent content

<footer>
Website Footer

Using semantic tags improves

- Readability
- SEO
- Accessibility

---

# 9. Common HTML Tags in React

<header>

Top part of website

<nav>

Navigation Links

<main>

Main content

<section>

A separate section of the webpage

<article>

Independent article/blog/news

<footer>

Bottom of website

<div>

Generic container

<ul>

Unordered list

<li>

List item

<button>

Button

<img>

Image

<a>

Hyperlink

---

# 10. Folder Structure

src

│

├── components

│     ├── Navbar.jsx

│     ├── Hero.jsx

│     └── Features.jsx

│

├── App.jsx

├── App.css

├── index.css

└── main.jsx

---

# 11. React Flow

Browser

↓

main.jsx

↓

App.jsx

↓

Navbar

↓

Hero

↓

Features

---

# 12. Interview Questions

Q1. Why do we use className in React?

Because class is a reserved keyword in JavaScript.

---------------------------------

Q2. What is a Fragment?

A Fragment allows multiple elements to be returned without creating an extra div.

---------------------------------

Q3. Difference between div and Fragment?

div creates an HTML element.

Fragment does not.

---------------------------------

Q4. Why use semantic tags?

To improve readability, SEO and accessibility.

---------------------------------

Q5. Difference between div and section?

div

Generic container.

section

Represents a meaningful part of a webpage.

---------------------------------

Q6. What is JSX?

JSX allows writing HTML-like syntax inside JavaScript.

---

# Today's Achievement

✅ Created multiple Components

✅ Learned Component Structure

✅ Learned className

✅ Learned CSS Classes

✅ Learned Fragments

✅ Learned Semantic HTML

✅ Built Feature Cards

---

# Important Rules

✔ Component names start with Capital Letters.

✔ File names are usually Capitalized.

✔ CSS is imported using

import "./App.css";

✔ Use className instead of class.

✔ Keep Components inside the components folder.

✔ Keep one Component per file.
# Day 4 - Props

## What are Props?

Props are used to pass data from a Parent Component to a Child Component.

---

Example

Parent

<FeatureCard
title="Resume Analyzer"
/>

Child

function FeatureCard(props){

return(
<h2>{props.title}</h2>
)

}

Output

Resume Analyzer

---

Props are Read Only.

Child Component cannot change Props.

---

Benefits

Reusable Components

Less Code

Easy Maintenance

Cleaner Code

---

Parent

↓

Child

Parent sends data

Child receives data

---

Interview Questions

Q. What are Props?

Props are used to pass data from Parent Component to Child Component.

--------------------------------

Q. Can a Child modify Props?

No.

Props are Read Only.

--------------------------------

Q. Why use Props?

To reuse Components with different data.

---

Today's Achievement

✅ Created first reusable Component

✅ Learned Parent Component

✅ Learned Child Component

✅ Passed data using Props

✅ Reduced duplicate code

# Day 4 - Props

## What are Props?

Props are used to pass data from a Parent Component to a Child Component.

---

Example

Parent

<FeatureCard
title="Resume Analyzer"
/>

Child

function FeatureCard(props){

return(
<h2>{props.title}</h2>
)

}

Output

Resume Analyzer

---

Props are Read Only.

Child Component cannot change Props.

---

Benefits

Reusable Components

Less Code

Easy Maintenance

Cleaner Code

---

Parent

↓

Child

Parent sends data

Child receives data

---

Interview Questions

Q. What are Props?

Props are used to pass data from Parent Component to Child Component.

--------------------------------

Q. Can a Child modify Props?

No.

Props are Read Only.

--------------------------------

Q. Why use Props?

To reuse Components with different data.

---

Today's Achievement

✅ Created first reusable Component

✅ Learned Parent Component

✅ Learned Child Component

✅ Passed data using Props

✅ Reduced duplicate code
# Day 5 - useState

## What is State?

State is data that can change over time.

Examples

Likes

Shopping Cart

Counter

Login Status

Theme

---

## useState

Syntax

const [state,setState]=useState(initialValue);

Example

const [name,setName]=useState("Srishti");

---

state

Stores current value.

---

setState

Changes the value.

---

Example

const [message,setMessage]=useState("Welcome");

setMessage("Hello");

Output

Hello

---

Why use State?

To make UI interactive.

---

Curly Braces

{}

Used to write JavaScript inside JSX.

Example

const age=20;

<p>{age}</p>

Output

20

---

Event Handling

React

onClick

onChange

onSubmit

HTML

onclick

onchange

onsubmit

---

Interview Questions

Q. What is State?

State is data that can change over time.

------------------------

Q. What is useState?

A React Hook used to create State.

------------------------

Q. What does setState do?

Updates the State and re-renders the UI.

------------------------

Q. Why do we use curly braces in JSX?

To write JavaScript inside JSX.

------------------------

Today's Achievement

✅ Learned State

✅ Learned useState

✅ Learned onClick

✅ First Interactive React App

# Day 5 - React State (useState)

---

# 1. What is State?

State is data that can change over time.

Whenever the state changes, React automatically updates the UI.

Examples

- Like Count
- Shopping Cart
- Login Status
- Theme (Dark/Light)
- Counter
- Messages

---

# 2. Why do we use State?

Without State

The webpage is static.

With State

The webpage becomes interactive.

Example

Welcome!

↓

Click Button

↓

Good Luck Srishti ❤️

The page updates without refreshing.

---

# 3. useState Hook

Syntax

```jsx
const [state, setState] = useState(initialValue);
```

Example

```jsx
const [message, setMessage] = useState("Welcome!");
```

Here,

message → Stores the current value.

setMessage() → Updates the value.

"Welcome!" → Initial value.

---

# 4. Importing useState

```jsx
import { useState } from "react";
```

We must import useState before using it.

---

# 5. Updating State

Example

```jsx
setMessage("Hello");
```

Old value

Welcome!

↓

New value

Hello

React automatically updates the screen.

---

# 6. Displaying State

```jsx
<p>{message}</p>
```

Curly braces allow JavaScript inside JSX.

---

# 7. Event Handling

React uses camelCase.

Examples

```jsx
onClick
onChange
onSubmit
```

Example

```jsx
<button onClick={() => setMessage("Hello")}>
```

When button is clicked,

↓

setMessage()

↓

State changes

↓

UI updates automatically.

---

# 8. Arrays in React

Arrays help store multiple values.

Example

```jsx
const messages = [
  "Welcome!",
  "Good Luck Srishti ❤️",
  "Keep Practicing 💪",
  "You Will Crack Placements 🚀"
];
```

Index

0 → Welcome!

1 → Good Luck Srishti ❤️

2 → Keep Practicing 💪

3 → You Will Crack Placements 🚀

---

# 9. State with Arrays

```jsx
const [index, setIndex] = useState(0);
```

Display

```jsx
<p>{messages[index]}</p>
```

If

index = 2

Output

Keep Practicing 💪

---

# 10. if-else Logic

Example

```jsx
if(index < messages.length - 1){
   setIndex(index + 1);
}
else{
   setIndex(0);
}
```

Meaning

If current message is not the last,

↓

Go to next message.

Otherwise,

↓

Go back to the first message.

---

# 11. messages.length

Example

```jsx
const messages = [
"A",
"B",
"C",
"D"
];
```

messages.length

Output

4

Last Index

messages.length - 1

Output

3

---

# 12. Modulo Operator (%)

Example

```jsx
(index + 1) % messages.length
```

Suppose

messages.length = 4

Current Index | New Index

0 → 1

1 → 2

2 → 3

3 → 0

This creates a cycle.

---

# 13. Why use Modulo?

Modulo keeps the index within the array limit.

Instead of writing

```jsx
if...
else...
```

we can write

```jsx
setIndex((index + 1) % messages.length);
```

Cleaner and more professional.

---

# 14. React Rendering Flow

Button Click

↓

Event Triggered

↓

setState()

↓

State Updated

↓

React Re-renders Component

↓

UI Updates

---

# 15. Curly Braces {}

Used to write JavaScript inside JSX.

Example

```jsx
const name = "Srishti";

<h1>{name}</h1>
```

Output

Srishti

---

# 16. Interview Questions

Q. What is State?

State is data that can change over time.

---------------------------------

Q. What is useState?

A React Hook used to create and manage State.

---------------------------------

Q. Why do we use useState?

To make the UI interactive.

---------------------------------

Q. What does setState do?

It updates the State and React automatically re-renders the component.

---------------------------------

Q. What happens when State changes?

React automatically updates the UI without refreshing the page.

---------------------------------

Q. Why do we use arrays?

To store multiple values in one variable.

---------------------------------

Q. Why use Modulo (%)?

To cycle through array elements without exceeding the last index.

---------------------------------

Q. Difference between state and normal variables?

Normal Variable

- Changing it does not update the UI.

State

- Changing it updates the UI automatically.

---

# 17. Today's Achievement

✅ Learned React State

✅ Learned useState Hook

✅ Learned Event Handling

✅ Learned onClick

✅ Learned Arrays in React

✅ Learned Conditional Logic

✅ Learned Modulo Operator

✅ Built a Dynamic Message Changer

---

# 18. Important Rules

✔ Always import useState before using it.

✔ Never change state directly.

❌ Wrong

message = "Hello";

✔ Correct

setMessage("Hello");

✔ State updates automatically re-render the UI.

✔ Use meaningful state variable names.

Example

count

message

theme

isLoggedIn

index

# Day 6 - Forms & onChange in React

---

# 1. What are Forms?

Forms are used to collect input from the user.

Examples

- Login Form
- Registration Form
- Resume Upload Form
- Contact Form
- Feedback Form

---

# 2. What is an Input Field?

An input field allows the user to enter data.

Example

```jsx
<input type="text" />
```

---

# 3. Placeholder

Placeholder shows temporary text inside an input box.

Example

```jsx
<input
  type="text"
  placeholder="Enter Your Name"
/>
```

Output

Enter Your Name

---

# 4. onChange Event

onChange is triggered whenever the value of an input field changes.

Example

```jsx
<input
  onChange={(event) => setName(event.target.value)}
/>
```

Whenever the user types,

↓

onChange runs.

---

# 5. event Object

React automatically provides an event object.

It contains information about the event.

Example

```jsx
(event)
```

---

# 6. event.target

target represents the HTML element that triggered the event.

Example

```jsx
event.target
```

Output

The input field.

---

# 7. event.target.value

Returns the current value inside the input field.

Example

User types

```
Srishti
```

Then

```jsx
event.target.value
```

returns

```
"Srishti"
```

---

# 8. Updating State from Input

Example

```jsx
const [name, setName] = useState("");

<input
  onChange={(event) =>
    setName(event.target.value)
  }
/>
```

Flow

User types

↓

event.target.value

↓

setName()

↓

State updates

↓

UI updates automatically

---

# 9. Multiple States

A form can have multiple state variables.

Example

```jsx
const [name, setName] = useState("");
const [college, setCollege] = useState("");
const [email, setEmail] = useState("");
```

Each state stores different information.

---

# 10. Displaying User Input

Example

```jsx
<h3>Hello {name} 👋</h3>

<p>College: {college}</p>
```

React displays the latest values stored in state.

---

# 11. React Data Flow

User Types

↓

onChange

↓

event.target.value

↓

setState()

↓

State Updated

↓

React Re-renders Component

↓

Updated UI

---

# 12. Why use State for Inputs?

Without State

- React cannot remember user input.

With State

- React stores the input.
- UI updates automatically.

---

# 13. JSX Curly Braces

Curly braces allow JavaScript inside JSX.

Example

```jsx
const name = "Srishti";

<h2>{name}</h2>
```

Output

```
Srishti
```

---

# 14. Controlled Component

An input connected to React state is called a Controlled Component.

Example

```jsx
const [name, setName] = useState("");

<input
  value={name}
  onChange={(e) => setName(e.target.value)}
/>
```

React controls the value of the input.

Note:
So far we have used only onChange.
Later we will also use the value attribute to make the input fully controlled.

---

# 15. Common Input Types

```jsx
type="text"
```

Used for names and normal text.

```jsx
type="email"
```

Used for email addresses.

```jsx
type="password"
```

Used for passwords.

```jsx
type="number"
```

Used for numbers.

```jsx
type="file"
```

Used for uploading files.

---

# 16. Interview Questions

Q. What is onChange?

onChange is an event that runs whenever the value of an input field changes.

---------------------------------

Q. What does event.target.value return?

It returns the current value entered by the user.

---------------------------------

Q. Why do we use useState with forms?

To store user input and update the UI automatically.

---------------------------------

Q. What is a Controlled Component?

An input whose value is managed by React state.

---------------------------------

Q. What is the difference between placeholder and value?

Placeholder:
Shows temporary hint text.

Value:
Stores and displays the actual input value.

---

# 17. Real World Examples

Login Form

Email

Password

----------------------------

Resume Analyzer

Name

College

Branch

----------------------------

Registration Form

Name

Email

Phone Number

Password

---

# 18. Today's Achievement

✅ Learned Forms

✅ Learned Input Fields

✅ Learned Placeholder

✅ Learned onChange Event

✅ Learned event Object

✅ Learned event.target.value

✅ Learned Multiple useState Variables

✅ Built Dynamic Form

---

# 19. Important Rules

✔ Import useState before using it.

✔ Every input can have its own state.

✔ Use onChange to capture user input.

✔ Use event.target.value to get the typed value.

✔ State updates automatically re-render the UI.

✔ Curly braces {} are used to display JavaScript values inside JSX.

---

# 20. Code Summary

Creating State

```jsx
const [name, setName] = useState("");
```

Reading State

```jsx
{name}
```

Updating State

```jsx
setName("Srishti");
```

Updating State from Input

```jsx
<input
  onChange={(e) => setName(e.target.value)}
/>
```

Displaying State

```jsx
<h2>Hello {name}</h2>
```
# 📘 Day 7 – Arrays & map() in React

## 🎯 Objective

Learn how to render multiple components dynamically using arrays and the `map()` method instead of writing repetitive JSX.

---

## Why do we use `map()`?

Suppose we have multiple Feature Cards.

### ❌ Without `map()`

```jsx
<FeatureCard icon="📄" title="Resume Analyzer" />
<FeatureCard icon="📊" title="ATS Checker" />
<FeatureCard icon="🎤" title="Mock Interview" />
<FeatureCard icon="💻" title="DSA Tracker" />
```

This approach is repetitive and difficult to maintain.

---

## Store Data in an Array

Instead of writing components manually, store the data inside an array.

```jsx
const features = [
  {
    icon: "📄",
    title: "Resume Analyzer",
  },
  {
    icon: "📊",
    title: "ATS Checker",
  },
  {
    icon: "🎤",
    title: "Mock Interview",
  },
  {
    icon: "💻",
    title: "DSA Tracker",
  },
];
```

Each object represents one Feature Card.

---

## Rendering Components using `map()`

```jsx
<div className="cards">
  {features.map((feature, index) => (
    <FeatureCard
      key={index}
      icon={feature.icon}
      title={feature.title}
    />
  ))}
</div>
```

The `map()` function loops through every object in the array and creates one `FeatureCard` component for each object.

---

## Syntax of `map()`

```jsx
array.map((item, index) => {
  return something;
});
```

### Parameters

### `item`

Represents the current object of the array.

### `index`

Represents the position of the current object.

Example:

```
Resume Analyzer → index = 0
ATS Checker → index = 1
Mock Interview → index = 2
```

---

## Why do we use `key`?

Every component created using `map()` should have a unique `key`.

```jsx
key={index}
```

React uses the `key` to identify components efficiently whenever the UI updates.

---

## Complete Structure

```jsx
<section className="features">

  <h2>Our Features</h2>

  <div className="cards">

    {features.map((feature, index) => (
      <FeatureCard
        key={index}
        icon={feature.icon}
        title={feature.title}
      />
    ))}

  </div>

</section>
```

---

## Data Flow

```
Array
   ↓
map()
   ↓
FeatureCard Component
   ↓
Browser UI
```

---

## Advantages of `map()`

- Reduces repetitive code.
- Makes code cleaner and easier to read.
- Easy to add or remove items.
- Creates dynamic UI.
- Commonly used in real-world React applications.

---

## Common Mistakes

### ❌ Forgetting the `key`

```jsx
<FeatureCard />
```

### ✅ Correct

```jsx
<FeatureCard key={index} />
```

---

### ❌ Forgetting `{}` around JavaScript

```jsx
features.map(...)
```

### ✅ Correct

```jsx
{features.map(...)}
```

---

### ❌ Missing Wrapper Element

```jsx
<section className="features">
  {features.map(...)}
</section>
```

### ✅ Correct

```jsx
<section className="features">
  <div className="cards">
    {features.map(...)}
  </div>
</section>
```

The wrapper (`cards`) allows CSS to control the layout properly.

---

## Real-World Use Cases

- Product Listings
- Job Portals
- Student Records
- Dashboard Cards
- Chat Messages
- Notifications
- Blog Posts

---

## Key Points to Remember

- `map()` is used to render lists dynamically.
- Store data inside an array of objects.
- Each object represents one component.
- Always provide a unique `key`.
- `map()` keeps code clean, reusable, and scalable.

---

## Today's Learning

- Created reusable `FeatureCard` components.
- Stored feature data inside an array.
- Rendered cards dynamically using `map()`.
- Learned the importance of the `key` prop.
- Understood why wrapper elements like `cards` are useful for applying CSS layouts.

# 📘 Day 8 – Conditional Rendering in React

## 🎯 Objective

Learn how to show or hide UI based on a condition using **Conditional Rendering**.

Instead of always displaying everything on the screen, React allows us to display components only when a certain condition is true.

---

# What is Conditional Rendering?

Conditional Rendering means displaying different UI based on a condition.

Example:

- User logged in → Show Dashboard
- User not logged in → Show Login Button
- Resume uploaded → Show Success Message
- Resume not uploaded → Hide Success Message

---

# Creating a State

```jsx
const [uploaded, setUploaded] = useState(false);
```

### Explanation

- `uploaded` stores whether the resume has been uploaded or not.
- Initial value is `false`.

Initially:

```text
uploaded = false
```

After clicking Upload:

```jsx
setUploaded(true);
```

Now,

```text
uploaded = true
```

---

# Showing UI Conditionally

```jsx
{uploaded && (
    <h3>Resume Uploaded Successfully ✅</h3>
)}
```

### How it works

If `uploaded` is **true**

↓

React displays

```text
Resume Uploaded Successfully ✅
```

If `uploaded` is **false**

↓

React displays nothing.

---

# Why do we use `&&`?

`&&` means **Logical AND**.

General JavaScript example:

```jsx
true && "Hello"
```

Output

```text
Hello
```

```jsx
false && "Hello"
```

Output

```text
Nothing
```

React uses the same concept.

---

# Button Click Event

```jsx
<button onClick={() => setUploaded(true)}>
    Upload Resume
</button>
```

When the button is clicked,

React executes

```jsx
setUploaded(true);
```

The value of `uploaded` changes from

```text
false → true
```

React automatically re-renders the component and displays the success message.

---

# Displaying Resume Name

```jsx
{uploaded && (
    <div>
        <h3>Resume Uploaded Successfully ✅</h3>
        <p>{resume}</p>
    </div>
)}
```

`resume` is a state variable.

```jsx
const [resume, setResume] = useState("");
```

If the user enters

```text
Resume.pdf
```

then

```jsx
<p>{resume}</p>
```

displays

```text
Resume.pdf
```

---

# Prevent Empty Upload

Instead of allowing an empty upload,

check first.

```jsx
<button
onClick={() => {

    if (resume !== "") {

        setUploaded(true);

    }

}}
>
Upload Resume
</button>
```

Only if the input is not empty,

the success message appears.

---

# Truthy Check

Instead of writing

```jsx
if (resume !== "")
```

we can simply write

```jsx
if (resume)
```

Reason:

An empty string (`""`) is **Falsy**.

A non-empty string is **Truthy**.

Therefore,

```jsx
if (resume)
```

means

"If the resume name is not empty."

This is the preferred JavaScript style.

---

# Flow of Execution

```text
User opens page
        │
        ▼
uploaded = false
        │
        ▼
Success Message Hidden
        │
        ▼
User types Resume.pdf
        │
        ▼
Click Upload Resume
        │
        ▼
setUploaded(true)
        │
        ▼
uploaded = true
        │
        ▼
React Re-renders Component
        │
        ▼
Resume Uploaded Successfully ✅
Resume Name: Resume.pdf
```

---

# Real-World Uses of Conditional Rendering

- Login / Logout
- Loading Spinner
- Error Message
- Success Message
- Shopping Cart
- Notifications
- Payment Status
- Resume Upload Status

---

# Common Mistakes

### ❌ Forgetting `{}`

Wrong

```jsx
uploaded && <h3>Hello</h3>
```

Correct

```jsx
{uploaded && <h3>Hello</h3>}
```

---

### ❌ Using `=` instead of `===`

Wrong

```jsx
if (uploaded = true)
```

Correct

```jsx
if (uploaded === true)
```

---

### ❌ Showing Success Message Without Validation

Wrong

```jsx
<button onClick={() => setUploaded(true)}>
```

Even an empty input will show success.

Better

```jsx
if (resume) {
    setUploaded(true);
}
```

---

# Key Points to Remember

- Conditional Rendering shows or hides UI based on a condition.
- `&&` is commonly used to display components conditionally.
- React re-renders automatically whenever a state changes.
- `useState(false)` is useful for controlling visibility.
- Always validate user input before updating the UI.
- Empty strings are **Falsy** and non-empty strings are **Truthy**.

---

# Today's Learning

- Learned Conditional Rendering.
- Used `&&` to show UI only when required.
- Created an `uploaded` state.
- Displayed a success message after button click.
- Displayed the resume name using state.
- Prevented uploading an empty resume using validation.
- Learned the concept of Truthy and Falsy values in JavaScript.

# 📘 Day 8 – Conditional Rendering in React

## 🎯 Objective

Learn how to show or hide UI based on conditions using **Conditional Rendering**. Also learn how to handle form validation, display dynamic data, and reset component state.

---

# What is Conditional Rendering?

Conditional Rendering means displaying different UI depending on a condition.

Examples:

- Login / Logout
- Loading Spinner
- Error Message
- Success Message
- Resume Uploaded Status

Instead of always displaying every component, React displays only the required UI.

---

# Creating Multiple States

```jsx
const [resume, setResume] = useState("");
const [uploaded, setUploaded] = useState(false);
const [error, setError] = useState(false);
```

### Purpose of Each State

| State | Purpose | Initial Value |
|-------|---------|---------------|
| `resume` | Stores the resume name entered by the user | `""` |
| `uploaded` | Controls whether the success section is shown | `false` |
| `error` | Controls whether the error message is shown | `false` |

---

# Conditional Rendering using `&&`

```jsx
{uploaded && (
    <h3>Resume Uploaded Successfully ✅</h3>
)}
```

### How it Works

If

```text
uploaded = true
```

↓

React displays

```text
Resume Uploaded Successfully ✅
```

If

```text
uploaded = false
```

↓

Nothing is displayed.

---

# Logical AND (`&&`)

General JavaScript

```jsx
true && "Hello"
```

Output

```text
Hello
```

```jsx
false && "Hello"
```

Output

```text
Nothing
```

React follows the same principle.

---

# Handling Button Click

```jsx
<button
onClick={() => {

    if (resume) {

        setUploaded(true);
        setError(false);

    } else {

        setError(true);

    }

}}
>
Upload Resume
</button>
```

### Logic

If resume name is entered

↓

Show Success Message

Otherwise

↓

Show Error Message

---

# Displaying Dynamic Data

```jsx
<p>
    <strong>Resume Name:</strong> {resume}
</p>
```

React displays the value stored inside the `resume` state.

Example

Input

```text
Resume.pdf
```

Output

```text
Resume Name: Resume.pdf
```

---

# Showing Error Message

```jsx
{error && (
    <p>Please enter a resume name.</p>
)}
```

Error appears only when

```text
error = true
```

---

# Upload Again Button

```jsx
<button
onClick={() => {

    setResume("");
    setUploaded(false);
    setError(false);

}}
>
Upload Again
</button>
```

### Purpose

`setResume("")`

- Clears the input field.

`setUploaded(false)`

- Hides the success section.

`setError(false)`

- Removes the error message.

Everything returns to its initial state.

---

# Displaying Current Time

```jsx
const currentTime = new Date().toLocaleTimeString();
```

Display

```jsx
<p>
    <strong>Time:</strong> {currentTime}
</p>
```

Example Output

```text
Time: 10:45:18 PM
```

---

# Flow of the Application

```text
User Opens Page
        │
        ▼
uploaded = false
error = false
        │
        ▼
User Enters Resume Name
        │
        ▼
Clicks Upload
        │
        ▼
Is Input Empty?
        │
 ┌──────┴──────┐
 │             │
Yes           No
 │             │
 ▼             ▼
Show Error   Show Success
 │             │
 ▼             ▼
Upload Again Resets Everything
```

---

# Truthy & Falsy

Instead of

```jsx
if (resume !== "")
```

We can simply write

```jsx
if (resume)
```

Reason:

- Empty string (`""`) → Falsy
- Non-empty string → Truthy

This is the preferred JavaScript style.

---

# Real-World Uses

- Login Authentication
- Loading Screens
- Error Handling
- Payment Status
- Shopping Cart
- Notifications
- Profile Completion
- Resume Upload Status

---

# Common Mistakes

### ❌ Forgetting `{}`

Wrong

```jsx
uploaded && <h3>Hello</h3>
```

Correct

```jsx
{uploaded && <h3>Hello</h3>}
```

---

### ❌ Updating State Without Validation

Wrong

```jsx
setUploaded(true);
```

Correct

```jsx
if (resume) {
    setUploaded(true);
}
```

---

### ❌ Forgetting to Reset State

Always reset all related states when restarting a form.

```jsx
setResume("");
setUploaded(false);
setError(false);
```

---

# Key Points to Remember

- Conditional Rendering shows or hides UI based on a condition.
- `&&` is the most common way to conditionally display components.
- React automatically re-renders whenever state changes.
- Multiple states can be used to control different parts of the UI.
- Always validate user input before updating the UI.
- `new Date().toLocaleTimeString()` returns the current system time.
- Resetting state restores the component to its initial state.

---

# Today's Learning

- Learned Conditional Rendering.
- Used Logical AND (`&&`) for showing components.
- Managed multiple states using `useState`.
- Displayed success and error messages.
- Validated user input.
- Displayed dynamic resume details.
- Displayed current upload time.
- Reset component state using "Upload Again".

# 📘 React Learning Notes – Day 9

## 📌 Topic
- useEffect Hook
- Dependency Array
- Side Effects in React

---

# What is useEffect?

`useEffect()` is a React Hook used to perform side effects after a component renders.

Examples:
- API Calls
- Timers (`setTimeout`, `setInterval`)
- Updating Browser Title
- Event Listeners
- Local Storage

---

## Syntax

```jsx
useEffect(() => {

    // Side Effect

}, []);
```

---

## Why useEffect?

Without useEffect:

```jsx
console.log("Hello");
```

Runs after every render.

With useEffect:

```jsx
useEffect(() => {
    console.log("Hello");
}, []);
```

Runs only once when the component loads.

---

# Dependency Array

## 1. No Dependency Array

```jsx
useEffect(() => {
    console.log("Hello");
});
```

Runs after every render.

---

## 2. Empty Dependency Array

```jsx
useEffect(() => {
    console.log("Hello");
}, []);
```

Runs only once after the first render.

---

## 3. Specific Dependency

```jsx
useEffect(() => {
    console.log("Count Changed");
}, [count]);
```

Runs whenever `count` changes.

---

# useEffect with State

```jsx
const [count, setCount] = useState(0);

useEffect(() => {
    console.log(count);
}, [count]);
```

Whenever count changes,
React runs the effect again.

---

# setTimeout Example

```jsx
useEffect(() => {

    setTimeout(() => {

        setMessage("Ready to Crack Placements 🚀");

    }, 3000);

}, []);
```

Shows a new message after 3 seconds.

---

# Multiple Timers

```jsx
setTimeout(() => {
    setMessage("Checking Resume 📄");
}, 2000);

setTimeout(() => {
    setMessage("Preparing Interview Questions 🎤");
}, 4000);

setTimeout(() => {
    setMessage("Ready to Crack Placements 🚀");
}, 6000);
```

Each timeout starts counting from component load.

---

# Browser Title Example

```jsx
useEffect(() => {

    document.title = `Clicks : ${count}`;

}, [count]);
```

Browser tab title updates whenever `count` changes.

---

# Side Effects

Side effects include:

- API Requests
- Timers
- Updating Document Title
- Local Storage
- Event Listeners

These should be written inside `useEffect()`.

---

# Interview Questions

### What is useEffect?

A React Hook used to perform side effects after rendering.

---

### Difference between useState and useEffect?

useState:
Stores and updates data.

useEffect:
Runs side effects after rendering.

---

### Difference between

```jsx
useEffect(() => {})
```

```jsx
useEffect(() => {}, [])
```

```jsx
useEffect(() => {}, [count])
```

No Dependency:
Runs after every render.

Empty Dependency:
Runs only once.

Specific Dependency:
Runs whenever the specified dependency changes.

---

# Projects Built

✅ Welcome Animation

✅ Counter

✅ Browser Title Changer

---

# Day 9 Summary

Learned:
- useEffect
- Dependency Array
- Side Effects
- Timers
- Browser Title Update
- Console Logging

Q. Why do we use setTimeOut like 2000,4000,6000 and not 2000 every time?
This is because setTimeOut starts counting whjen the component loads if we will use 2000 then all 3 components would be loaded at the same time and only last msg would be visible.

🏆 Interview Question

Q: Why do we use useEffect for document.title instead of writing it directly inside the component?

Answer:
Because changing the browser title is a side effect. React components should primarily return UI. Operations like updating the document title, making API calls, or starting timers are side effects, so they belong inside useEffect.

Important pt-use effect is used to perform side effects after the component renders.