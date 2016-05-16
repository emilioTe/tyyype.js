## v0.0.1

Execute a supplied `Function` after the user's keystrokes.

## quickstart
```javascript
let email = document.getElementById("email");   // or $("#email")
tyyype(email)
    //
    // This Function gets called when the user presses the 'Enter' key on the input
    .onEnter(function() {
        alert("Say hello to my little Enter key!");
    })
    //
    // This Function gets called after a set amount of milliseconds
    // since the user last pressed a key
    .onTimeout(function () {
        console.log("Well, that was quick.");
    })
    .listen();
```

## methods
#### tyyype(elm [, ms])
- `elm`: The document element to bind to
- `ms`: (optional; default 800) The delay, in milliseconds, to wait until calling the `Function`

#### .onEnter(fn)
This `Function` is optional.
- `fn`: The `Function` to call when the user presses Enter

#### .onTimeout(fn)
- `fn`: The `Function` to call after n amount of milliseconds since the user last pressed a key

#### .listen()
Start listening to the user's keystrokes.
