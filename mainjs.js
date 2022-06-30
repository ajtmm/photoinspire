const links = [
    {text: "Photograph water droplets at home", url: "https://digital-photography-school.com/beginners-guide-water-droplet-photography/"},
    {text: "Shoot some picture of your food", url: "https://digital-photography-school.com/5-tips-to-seriously-improve-your-food-photography-techniques/"},
     {text: "Freeze some things around the house", url: "https://digital-photography-school.com/frozen-object-photography-home/"},
     {text: "10 ideas for around the house", url: "https://www.youtube.com/watch?v=5IpmafMQ6AU"},
     {text: "Take some creative long exposure shots", url: "https://youtu.be/DUrnMRCLZ4M"},
     {text: "Shoot some macro photography", url: "https://photographylife.com/macro-photography-tutorial"},
     {text: "Try a new type of genre", url: "https://photographylife.com/types-of-photography"},
     {text: "Collaborate with another photographer", url: "https://fstoppers.com/spotlight/international-collaboration-project-photographers-finding-success-together-145206"},
     {text: "Shoot street photography at night", url: "https://fstoppers.com/street/step-your-street-photography-embracing-darkness-608725"},
     {text: "Go shoot some wildflowers", url: "https://youtu.be/mZq_-NL6Z8g"},
     {text: "Rent a different lens or two", url: "https://www.borrowlenses.com/"},
     {text: "Try a tool like PhotoPills for new ideas", url: "https://www.photopills.com/"},
     {text: "Scount some new locations", url: "https://fstoppers.com/landscapes/how-find-new-photo-spots-607912"},
     {text: "Volunteer at a pet shelter", url: "https://www.boredpanda.com/shelter-dogs-photography-adoption-campaign-unleashed-fur/?utm_source=google&utm_medium=organic&utm_campaign=organic"},
     {text: "Find 'safe' abandoned buildings to photograph", url: "https://www.boredpanda.com/photography-the-oldest-spa-resort-roman-robroek/?utm_source=google&utm_medium=organic&utm_campaign=organic"},
     {text: "Make some toys look amazing", url: "https://shotkit.com/toy-photography/"},
     {text: "Shoot on the diagonal", url: "https://shotkit.com/diagonal-lines-photography/"},
     {text: "Make a $30 star tracker for astrophotography", url: "https://www.diyphotography.net/how-to-make-a-30-diy-star-tracker-for-astrophotography/"},
     {text: "Make your own background and sets", url: "https://www.youtube.com/watch?v=aNLeTGkw4Mo"},
     {text: "Go old school with a diy pinhole camera", url: "https://www.instructables.com/How-To-Make-A-Pinhole-Camera/"},
     {text: "Paint a photo with light painting", url: "https://www.instructables.com/Begining-Light-Painting-no-Photoshop/"},
     {text: "$50 DIY Continuous Lighting Set-Up For Great Portraits", url: "https://www.slrlounge.com/50-diy-continuous-lighting-set-great-portraits-aaron-nace/"},
     {text: "Build diy v-flats with customizable catchlights", url: "https://www.slrlounge.com/brilliant-diy-v-flats-customizable-catchlights/"},
     {text: "Make your own diy reflectors", url: "https://www.slrlounge.com/diy-reflector-make-this-simple-and-inexpensive-lighting-tool/"},
     {text: "Make it rain for around $30", url: "https://petapixel.com/2019/01/23/how-to-build-a-30-diy-rain-machine-and-how-to-shoot-with-it/"},
     {text: "Join a photography club", url: "https://petapixel.com/photography-club/"},
     {text: "Enter a photo contest", url: "https://petapixel.com/photo-contests/"},
     {text: "Start a photo-a-day project", url: "https://www.canva.com/learn/10-inspiring-project-365-ideas-take-photo-day-keep-creative-block-away/"},
     {text: "Try a new post-processing style", url: "https://blog.adobe.com/en/publish/2021/10/19/11-contemporary-photo-editing-styles-to-keep-your-feeds-fresh"},
     {text: "Try a new lighting style", url: "https://www.audreyannphoto.com/blog/photography-lighting-ideas"},
     {text: "Use colored gels with off-camera flashes", url: "https://digital-photography-school.com/colored-gels-creative-off-camera-flash-photography/"},
     {text: "Take photos with the 'wrong' settings", url: "http://www.betterphotography.in/features/wrong-settings-unique-photos/14340/" },
     {text: "Create a photo series", url: "https://fixthephoto.com/photography-series-ideas.html"},
     
   ];
   
   function getQuote() {
       const link = links[Math.floor(Math.random() * links.length)];
       
       // Clear the quote container
       $("#quote").empty();
     
       // Add a new link
       $("#quote").append($("<a>", {href: link.url, text: link.text, target: "_blank"}));
     
       // Update the tweet link
       $("#tweet").attr("href", "https://twitter.com/intent/tweet?text=" + link.text + " — Dale Carnegie");
     }
   
   $(document).ready(function() {
     getQuote();
     $("#refresh").on("click", getQuote);
   });
   