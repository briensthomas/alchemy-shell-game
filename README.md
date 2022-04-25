## The Golden Rule: 

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1) **Make a drawing of your app. Simple "wireframes"** 
2) **Look at the drawing and name the HTML elements you'll need to realize your vision**
  -Title
  -Header
  Div for
    -Images (3)
    -Button (3)
  Div for
    Correct/Incorrect/Totals
3) **Look at the drawing and imagine using the app. What _state_ do you need to track?** 
  The correct/incorrect state (let variables)
4) **For each HTML element ask: Why do I need this? (i.e., "we need div to display the results in")** 
Title: So people know what the site is about
Header: As above, for the page
Div: Container for the Images/Button
Image: To show the Seashell
Button: So users can record their guess
Div: Container for the text on page
Correct/Incorrect/Total: To track history of the users guesses/results
5) **Once we know _why_ we need each element, think about how to implement the "Why" as a "How" (i.e., `resultsEl.textContent = newResults`)**
  How: Win/Losses will be incremented, and the span for the text will be updated based on win/loss. Totals span will be the derived state, taking wins+losses
6) **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change? Does any DOM update?**
Events: User clicks 
(shells are set to "hide" the ball; 
random number is generated 1-3 to determine which is the correct shell for the instance;
the correct shell is revealed to show the ball underneath;
based on which button clicked, wins/losses are incremented and total is updated.)
7) **Think about how to validate each of your features according to a Definition of Done. (Hint: console.log usually helps here.)**
Attaching a console.log to validate clicking each button registers;
console.log to print what the "correct" random number was for the instance;
choosing the shells correctly increments the win/loss textSpan
8) **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**
Event Listener is dependent on the "button"
Text content update is dependent on eventListener

Additional considerations:
- Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
- Consider your data model. 
  - What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need? 
  - What are the key/value pairs? 
  - What arrays might you need? 
  - What needs to live in a persistence layer?
- Is there some state we need to initialize?
- Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be resused?)
