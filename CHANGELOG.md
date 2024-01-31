# Changelog

### Includes all commits and updates regarding Skylite website. Note that versions lower than 1.0.0 are development ones. 

### Starting from 1.0.0, all updates are published live: https://skylitesite.web.app/

<br><hr>

**[1.0.4] Include License and Changeolg, update README file**
<br>
_27.01.2024_

* Included a license and changelog files for the project

* Redesign the README file to properly showcase the website basics.

<br><hr>

**[1.0.3] Bugfix solves for mobile devices & more**
<br>
_27.01.2024_

* Solved a very annoying issue on mobile devices with address bar - when
triggering browser's native address bar to show or hide, a weird
random auto scroll behavior was happening. It is no longer a problem
now!

* Slighlty changed offer items background colors for portrait devices.
The cool gradient move effect, while worked great for landscape devices,
was not any good for portrait ones. Insted of the animation, a stable,
solid background is applied, and the whole section became much more
visible.

* Last but not least - got rid of one of the diagonal lines background
layer, which simply looked bad on mobile devices. This got replaced for
the good-old, dotted background layer, which was still in use for
quite some time.

<br><hr>

**[1.0.2] Update mobile site version for better performance**
<br>
_26.01.2024_

* Recently I have found out that Skylite's mobile version is not working
well at all. Oftentimes it caused a lot of dropped frames, making the
scrolling expecting unfun and inconsistent. This commit drastically
limits the use of GSAP ScrollTrigger property for mobile devices,
targeting by custom screen sizes. This change also caused to modify
the horizontal scroll part of "Collaboration" section; now on mobile
devices it is controllable by simply a touch event.

<br><hr>

**[1.0.1] Change the website footer sections**
<br>
_15.01.2024_

* As a first, test update, a footer copyright note has gotten a slight
change - switching the brackets from curly to square ones. Also changed
a year on copyright note from 2023 to 2024.

<br><hr>

**[1.0.0] 1.0.0**
<br>
_15.01.2024_

* Set 1.0.0 app version release date to 15.01.2024. Uploaded the project to Google Firebase.


<br>

<hr>
<hr>
<hr>

<br>

**[0.4.7] Deploy to production**
<br>
_15.01.2024_

Setting the project to the production server!

<br><hr>

**[0.4.6] Cleanup assets**
<br>
_15.01.2024_

This commit is all about cleaning up assets and modifying some of the
existing ones. Updated two TeamShowcase photos, and also changed the
tab text to "Skylite" and added own favicon icon to the project.

<br><hr>

**[0.4.5] Refactoring the project code**
<br>
_14.01.2024_

Done a comprehensive cleanup for the project by removing all the
unnecessary comments, got rid of unused / outdated code in all the
most important files.

<br><hr>

**[0.4.4] Complete media queries for tablests**
<br>
_13.01.2024_

Tablet devices are pretty much designed to the most of what can be done
without using component-specific media queries directly for tablets.
The only media query that is used for tablets specifically, is a global
one that manages the proper font size across the webpage. Other than
that, tablet devices gotten some limits in terms of max sizing of
some text elements, so that they will not stretch long across one line,
but rather be divided into more separate lines.

<br><hr>

**[0.4.3] Complete landscape tablets layout**
<br>
_13.01.2024_

Landscape tablets are finished. The approach here was a bit different
than as for mobile devices. It is because instead of adding another
media query, some actual fixes were added for the base styling, so that
landscape tablet screens would also fall for this style path. Also,
slightly changed media query max-width / max-height value to a slightly
lower ones.

<br><hr>

**[0.4.2] Complete portrait mobiles design**
<br>
_11.01.2024_

The project is now fully implemented for mobile devices! It has been a
quite tough step to go through, but at the end of the day turned out
to be successful. The mobile layout still looks very closely to the
original design, because there were just a plenty elements on the whole
page that were essential to remove completely. That being said, most
page segment preserved all of the content as for huger screens, with
just some important alignment changes added.

Nevertheless, tablets need some tweaks. Maybe not that huge as for
mobile devices, but still some essential layout-wise upgrades should be
prepared.

<br><hr>

**[0.4.1] Include smooth scrolling library**
<br>
_04.01.2024_

For ever better browsing experience, a smooth scrolling library has
been included in a project. The library size is relatively small and
currently no performance drops can be observed. The newly added
dependency gives a bit cooler feeling on scroll, making the whole
webpage feel even more interactive.

<br><hr>

**[0.4.0] Complete designing site for landscape mobiles**
<br>
_04.01.2024_

Landscape mobile viewers got all the necessary corrections across the
all components contained in the project page! The next part that has to
be done is to prepare some other corrections to the portrait viewers for
mobile devices, which is the current target.

<br><hr>

**[0.3.3] Another corrections & quality updates**
<br>
_31.12.2023_

This is the very last design part across the whole development stage
of this project. The website looks so much smmoother now, with all the
animations and transitions in place, every single detail works as
intended. This almost finishes the project - the remain part is to
prepare the project for different viewport sizes.

<br><hr>

**[0.3.2] Add corrections to all the component**
<br>
_29.12.2023_

So it's probably the very last update before diving into media queries.
This update is all about improving overall website look, usability and
quality. Each component separately needed some fixes, which now are
solved. Also a fancy hamburger menu has been desgined and now its
finally completed!

<br><hr>

**[0.3.1] Add content to the website**
<br>
_27.12.2023_

The Skylite website is now fueled with a content that has an actual
meaning and that is a cohesive part of the project. Took longer than
expected, but the end effect look good! Getting really close to work
on the very last feature - mobile queries as a cherry on top for this
fun project.

<br><hr>

**[0.3.0] Minor component corrections**
<br>
_18.12.2023_

This commit includes some quality corrections regarding styles and
layout of website element across different components. The purpose for
this little patch is to fully prepare the website elements to gain some
new, meaningful text that will correspond well with already redesigned
site.

<br><hr>

**[0.2.13] Complete designing the page!**
<br>
_13.12.2023_

After countless amounts of work, the page is now fully designed! All
the parts are in place, each designed and (almost) prepared to be
deployed further to production.

Now the current goal is going to be slightly different - website needs
some actual content, not just a placeholder text. And that will be the
main focus for now. Also, some components will receive some slight
tweaks along the way!

<br><hr>

**[0.2.12] Completete Start component**
<br>
_12.12.2023_

The very initial Landing Page component has just reached a grand update.
This one haven't been touched for almost 2 months, so that making a
solid update was a must. Now, since everything related with this
component is finished, it's time to add a final component to the site.

<br><hr>

**[0.2.11] Complete updating Intro section**
<br>
_10.12.2023_

Getting closer and closer to finish off the design for the whole site.
It is just a tiny bit left work here. The Start component, which was
initially just a placeholder way back in late September will get the
final rework. Gotta make it look awesome!

<br><hr>

**[0.2.10] Finish all design parts for OfferShowcase**
<br>
_09.12.2023_

Now all parts inside this component are done. Just two left to be done
for the project.

<br><hr>

**[0.2.9] Partially update OfferShowcase component**
<br>
_04.12.2023_

OfferShowcase simply needed some visual update, and there it is! The
most of the job here is done - with amazing neon-like visual for each
offer, some styling corrections and more. Last part to focus on inside
this component is the "See full offer" mini-section and the end
transition - and with those things to be done, the final improvements
are closer and closer to complete.

<br><hr>

**[0.2.8] Completed ContactShowcase component**
<br>
_01.12.2023_

The very last component has just been added to the project! All the
animations for most of the page seems to be working and integrating
well with each other (at least for desktops). The only significant
corrections are need for the very first sections - Intro and
OfferShowcase. Those two are fairly behind in terms of design and
overall integrity with other parts of the site. So that is goning to be
the next goal for now.

<br><hr>

**[0.2.7] Finish the Newsletter section**
<br>
_29.11.2023_

The very last section has finally been completed! At this point, the
crucial design parts are done, the only left thing in this matter is to
fix some minor flaws about them, which should not take much time. Apart,
the next step is to fill some website sections with a content (that is
mostly a dummy text right now) - this means both text and images.

<br><hr>

**[0.2.6] Complete Collab section**
<br>
_23.11.2023_

Finally, the new section to the website is done! This was the toughest
part to remake so far. It's because the old section "Company in numbers"
got completely replaced with the "Collab" part - built almost
entirely from scratch. Also this very section introduces a brand new
scroll mechanic into the website, giving fresh, exeptional UX.

<br><hr>

**[0.2.5] Complete Reviews Section**
<br>
_15.11.2023_

The Reviews section is finally completed ! This took a lot of time
actually, mostly because there was a bug in the TeamShowcase section,
which started to cause some major issues with GSAP animations, which
were not always lined up with their intended start and end positions.
Since it's repaired, the Reviews part works just fine now.

<br><hr>

**[0.2.4] Finish the TeamShowcase section**
<br>
_13.11.2023_

All parts of the section are now done! Now, almost halfway through the
entire landing page is the Reviews section, which will be the main
focus for some next commits.

<br><hr>

**[0.2.3] Almost finishing the TeamShowcase component**
<br>
_11.11.2023_

TeamShowcase component is close to being fully redefined  into more
real, eye-pleasant shape. The main layout is done, the transition
animation is also completed. The only part missing are the animations
inside the section, as user scrolls the content.

<br><hr>

**[0.2.2] Complete OfferShowcase component**
<br>
_08.11.2023_

Offer Showcase component is fully prepared. It was a tough task to be
done, but the end effect is quite impressive. All the animations are
made at this point. The only thing left to be modified is the actual
content inside the offer boxes, but it's not a major concern right now.

<br><hr>

**[0.2.1] Update for an OfferShowcase components**
<br>
_06.11.2023_

The OfferShowcase component received bunch of scroll animations that
make the section feel more alive and interactive. The necessary setup
is almost done, with an exception of content boxes, which has to be
properly distributed in terms of their content and appear animation.

<br><hr>

**[0.2.0] Applied first scroll based animation**
<br>
_05.11.2023_

Now, another update ! Finally the very first section of the Landing
Page got some scroll based animation, which looks really well
surprisingly. Next website section are about to receive their respective
scroll animations too in the future.

<br><hr>

**[0.1.1] Complete initial creation of the components**
<br>
_30.10.2023_

Another step has been made to the build of the project. All the
components shown on the landing Page has just been prepared. That still
does not mean they are fully prepared though. Some of them needs some
tweaks and changes, while others are completely fine-tuned to the
style of the website. The very next update will focus exactly on
remaking the components which are required to be in this way.

<br><hr>

**[0.1.0] Creating website elements**
<br>
_23.10.2023_

This is the very first commit for a project, for which I have been
working on for nearly a month. Currently some of elements for the
Landing Page are initially designed, keeping it simple at first.
There are just few more to add; those are: FAQ, Offer showcase, Footer
and Team Showcase (currently working on it).

This project is currently not supposed to be a full website project, but
rather a landing page design mixed with fancy scroll-based animation and
exceptional design patterns. Maybe in the future more Tab views will be
added, however this is not the main point of the project, at least for
now.

<br><hr>