/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('urls are defined and not empty', function(){
            for(var i = 0; i < allFeeds.length; i++){
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url).not.toBe('');
            }
         });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         //test that checks to make sure the names in allFeeds are defined and are not empty 
        it('names are defined and not empty', function(){
            for(var i = 0; i < allFeeds.length; i++){
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name).not.toBe('');
            }
         });
    });


    /* TODO: Write a new test suite named "The menu" */
     //test that checks menu changes
    describe('The menu', function(){
        var menuIcon; 
        
        beforeEach(function(){
            menuIcon = $('.menu-icon-link');
        });

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('is hidden at start', function(){
            expect($("body").hasClass("menu-hidden")).toBe(true);
        });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
         //checks to make sure menu dissapears when it is clicked the second time 
        it('dissapears when clicked twice', function(){
            menuIcon.click();
            expect($("body").hasClass("menu-hidden")).toBe(false);
            
            menuIcon.click();
            expect($("body").hasClass("menu-hidden")).toBe(true);
        });
    });

    /* TODO: Write a new test suite named "Initial Entries" */
    //test that checks the initial entries
    describe("Initial Entries", function(){
        var initialEntries;

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
          //checks load feed completion functionality
        beforeEach(function(done){
            loadFeed(0, function(){
                initialEntries = $(".feed").html();
                done();
            });
        });
         //checks for null entries
        it('is present', function(){
            expect($(".feed .entry").length).toBeGreaterThan(0);
        });
    });

    /* TODO: Write a new test suite named "New Feed Selection" */
    //test that checks new feed functionality
    describe("New Feed Selection", function(){
        var prevInitialEntries;
        
        beforeAll(function(done){
            loadFeed(0, function(){
                prevInitialEntries = $(".feed .entry > h2").first().text();
                done();
            });
        });
        
        beforeEach(function(done){
            loadFeed(2, done);
        });
        
        it("content actually changes on new feed", function(){
            var newInitialEntries = $(".feed .entry > h2").first().text();
            expect(newInitialEntries).not.toBe(prevInitialEntries);
        });
    });

}());
