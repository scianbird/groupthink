# groupthink

Congratulations! Your PTO is approved, and you and your friends are headed off on a roadtrip, re-capturing the feeling of the Good Old Days™

One problem, though. Where will you stop to eat? Oh, another problem. What about the roadside attractions you'll stop to see? Oh, and another! Someone really hates that song in your playlist. Pretty soon you won't be reminicsing about your favourite memories, and the memories of this trip will all just be decision-making ... "discussions" (we don't like to call them fights, either).

Here's your solution: groupthink! groupthink is an app designed to solve all these problems by offering chances to suggest and vote on decisions that need to be made on-road. Where are we eating? Well, let's check what won the vote! Your mate is playing Mambo Number 5 for the 16th time? Let's downvote it out of the playlist.

What's left for you to take care of? Well, to make it fun!
(And to keep an eye on the road, groupthink can't handle that part of the roadtrip for you!)

## The Thoughts

Our team consisted of Becca, Chris and Claire.

We began this group project by thinking of and pitching ideas for a problem-solving app. Given the context of this decision, the idea of "an app that helps groups make decisions" was a natural suggestion and won unanimously. We made a concious decision to design this app in a way that would utilise the features of previous assignment projects and build on what we had already created.

The Wireframe was created together on Figma, as it allows for real-time interaction, and a base colour scheme was decided by selecting a palette on https://coolors.co which allowed us to make styling decisions more efficient. We kept breakpoints in mind while designing the wireframes,

![wireframe images for 2 breakpoints](/misc/wireframes.png)

**Render links:** https://groupthink-static.onrender.com & https://groupthink-server.onrender.com

**Repo link:** https://github.com/scianbird/groupthink

We created the user -- someone planning a trip with friends -- and wrote our user stories with them in mind.

## User Stories

📒 I want to be able to add suggestions for the decisions we need to make (for example, where we should eat)

📒 I want to be able to vote on other suggestions made by my friends

📒 I want the suggestions to be ranked, so that the winning suggestion is visible

📒 I want a fair way for any "draws" to be decided on

As is the case with the provided user stories in our weekly assignments, we also wrote stories for "stretch goals" that we would implement when/if we had the time (or in the future).

📕 We want the user to be able to create a new category for a decision to collect suggestions on

📕 We want the categories to be one of 2 "kinds" -- an organic/evolving category (for example, downvoting songs from the playlist) and a deadline-based category (those with a final answer, for example where to eat)

📕 We want a "final vote number" to determine when deadline-based choices are made (for example, in friend groups of 8 people, 8 votes would automatically end the voting time)

📕 We want different visual themes, so that different friendgroups feel the app "represents" them

📕 We want the app to be accessible with alt tags, ARIA labels and by keeping in mind user experience when choosing font/colours/etc

## Libraries / Frameworks & Packages

Needed in order to run: express.js, pg, cors
Used throughout the building: npm, Vite

## How to run

The app should run on the link opening .. (b ᵔ▽ᵔ)b

## Lighthouse report:

![screenshot of lighthouse report](/lighthouse_report.png)

We aim to improve on our accessibility score by further use of alt tags and ARIA labels.

## The Building Process

Day One was mainly spent planning and assigning overall "roles" within the team. We all felt quite strongly that a solid foundation would help work on the following days be more efficient. We worked with Figma to create the wireframes, Google Docs to have a longform version plans and Trello to condense those plans into daily goals.

The repo was set up collaboratively (allowing us experience in merging/pulling/approving branches) and in the final hour of Day One we set goals for Day Two.

Day Two had the ultimate goal of "have our minimum viable product complete and tested" and so we all worked on each "block" of the app - index, CSS and the database - and then came together in order to group test and talk each other through the progress made at regular intervals, so that others could offer differing approaches to an in-work feature.

The result was an incredibly collaborative day with group coding sessions followed by group testing, as well as group debugging sessions whenever an error could not be spied by a solo team member. The workload of the day was large, and we ended up behind where we wanted to be -- but as we had been ambitious with our aim it was clear we were still making good pace.

On the side, group members experiemented with some features that they hoped to implement, but had less experience / comfort working on: be that front end styling, or a function/query in the backend. This was done in what we called "isolated code" with a file not linked to the github repo, but with the necessary information to allow the experiments to take place. This was particularly useful in avoiding file conflicts (most, if not all, pushes/pulls were done with screen sharing or with step by step narration by the person working on it) and even if that was not the most ideal way to work in terms of a reality-based workflow we managed to avoid conflicts in the project 🎉

Day Three (the final day of coding) started with the group stuck on what exactly was preventing our data from reaching the database. Although it was a demoralising start, thanks to Manny the problem was solved and tasks were completed in quick sucession after that. This was another day of group coding, as well ad group testing. The main aim was to get the MVP deployed on render before the end of the day -- this way, we could receieve support for any issues we faced.

Stretch goals largely were not met, although we wrote the code from the beginning with the ease of duplicating in mind, and the idea was that we would simply be able to make additional "categories" with much more ease. Although we only have the one, we created placeholder icons for examples of other categories on the splashpage, as well as placeholder user icons that (in theory) would link to the user profiles.

Throughout the week, in self-reflection hour, we worked on the documentation and our presentation, ensuring that we would be in a good place on Friday when it was time to present.

## Reflections

#### Chris

Planning was straight forward, no conflicts, hand to hand combat or rude words, for a moment I thought I was in the wrong group, ideas fomented from three directions and they all just merged into the plan. we managed to collectively build the database table ready for use the following day.

Originally I put forward the idea of a single table, with the view of leaving the 'other' columns unused, This was my worst idea this week.

By the time we got to the stand up meeting on the second day I had redesigned the table into two (we have categories and suggestions), and put this idea forward at meeting and we moved forward with a better database schema.

We aimed to have the MVP up and running my the end of the day, but syntax snags slowed my progress down, along with the unfamiliar workflow, I have never used anything more than a text file for project management so Trello took a little time away from the coding. being new to using git branches. we got a lot of practice on that over the remaining time.

We called in backup (Manny) to spot a missing s in headers, that had me stumpped for more time that I'd like to admit but other than correcting paths with the help of Joe during the deployment it all came together, In the end happy with the result, despite a fair bit of frowning and head scratching.

#### Becca

I am really pleased with how the project went and I feel like I had the best of both worlds in terms of doing both back and front end coding. I loved how ambitious we all were to scale the project as big as we could in the timespan, as time is often what limits my own personal projects and basic functionality has to take precedence. This meant I got an opportunity to properly play with CSS elements like media queries and ARIAs, somewhat confidently use branches in git, and even take the time to learn something new with the polling function. I really enjoyed collaborating with our team and I feel like it kept me from feeling stuck, as there was always something to either work on or help with, and facing blocks was much easier with three pairs of eyes.

#### Claire

I feel like this has been the most ambitious project I have worked on so far, but the collaborative effort of the team never let it feel like a daunting task, and I felt very quickly that we were working well together. All debugging and testing was done as a team, and although I didn't get to include some aspects of the styling that I had planned (for example, a more robust theme-change), I learned several things that I know I will be able to make use of in the future: polling, the ability to change themes and the value of being able to talk through the logic of a project at each step.

I feel like we've done a good job in creating a (somewhat) complete app that is also easily scaleable, and it was a pleasure to work with my teammates. Also, of course, a special thank you to Manny and Joe for helping us hop over the blocks when they were encountered (render deployment... (shaking my fist at the sky)).
