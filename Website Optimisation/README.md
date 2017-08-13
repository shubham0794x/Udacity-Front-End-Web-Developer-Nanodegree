## Website Performance Optimization portfolio project

The Key Goal of this Project was to Optimize a Given Website As Much As Possible for Faster Rendering & to Achieve High PageSpeed Score.

#### Tools used:

* Grunt JS
* CSS Minifier
* JS Compress
* Kraken.io
* Unminify

#### Step 1: Optimize `index.html`

* Optimized Images
* Minified JavaScript
* Minified CSS
* Inline CSS styling


#### Step 2: Optimize `pizza.html`

* Optimized Images
* Recorded timeline.
* Saw a red triangle on Layout indicated Forced Synched Layout in Main.js
* Made changes in UpdatePosition() and changePizza Sizes().
* Minified all the HTML ,CSS and JavaScript files.

### The website can be accesed by:

* Clone or download repository by visiting my GitHub Account
* If downloading, then extract all the files.
* Open index.html on the web browser for PageSpeed of online portfolio
* Open views/pizza.html to see page render at consistent frame-rate of 60fps.

# getting started

#### Part 1: Optimize PageSpeed Insights score for index.html

Check out the repository
To inspect the site on your phone, you can run a local server
$> cd /path/to/your-project-folder
$> python -m SimpleHTTPServer 8080
Open a browser and visit localhost:8080
Download and install ngrok to the top-level of your project directory to make your local server accessible remotely.
$> cd /path/to/your-project-folder
$> ./ngrok http 8080
Copy the public URL ngrok gives you and try running it through PageSpeed Insights! Optional: More on integrating ngrok, Grunt and PageSpeed.
Profile, optimize, measure... and then lather, rinse, and repeat. Good luck!

#### Part 2: Optimize Frames per Second in pizza.html

To optimize views/pizza.html, you will need to modify views/js/main.js until your frames per second rate is 60 fps or higher. You will find instructive comments in main.js.

You might find the FPS Counter/HUD Display useful in Chrome developer tools described here: Chrome Dev Tools tips-and-tricks.