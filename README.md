# adventure-capitalist

GAME LINK: https://sandbox.markhamenterprises.com/adv-cap

Welcome to Adventure Capitalist. The rules are simple: make as much total money as you are able as fast as possible. You may press an 'Earn' button every 5 seconds. Once you have enough money earned for a particular business you may press the 'Auto Earn' button and you'll earn money every five minutes. If you wish to start over try the rest button. The numbers for the various business are described at the bottom of each business box.

Adventure Capitalist is built with SCSS/ ES6/PHP. I much prefer the new class-based Javascript. While the classes aren't quite the same as classes are in other languages, the Javascript classes are great for creating components. The updates are all post to the database (mysql - one little table with 6 columns). The game updates are called from the PHPData component and that run a PHP query with a business id and the query handles all the math in the game. PHPData gets updates data and sends updates via the controller which in turn updates the UI views.

Game Features
* There are have 12 businesses each with earn buttons.
* You may only press one earn button every 5 seconds.
* When you earn enough for a particular biz you get the auto earn function (button).
* I have a cron job that runs auto-updates for the businesses w/ an auto rate. (5-minute cycle).
* There is a reset function so you may kill the data and start over.
* It is persistent w/out users so everybody is playing the same the game.

Note: IF I were to choose a framework I'd probably go with React and run updates through their context component. I used that for a website and it works excellent for sharing data updates across a component driven architecture.

# FEATURES TO ADD
I’d add users and have different people playing independent games. UI updates would include animation and sounds. And I would make the display prettier and possibly add style components so business boxes could have a little individual flavor.

# POSSIBLE CODE UPDATES
The first code update I would make in phase two is to make the game event-driven. No direct calls to the PHPData data component. I'd also add some structure to updates and create more components in the PHPData class to eliminate duplicate code.

Changing Backend: I’d also swap the PHP code for a cloud bases service and run updates on the listener instead of using a timer to check for updates.
