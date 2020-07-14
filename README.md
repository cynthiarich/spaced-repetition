# Learning with Spaced Repetition

This demo app provides a sample implementation of spaced reptition.

## What is spaced repetition?

Spaced repetition is a learning and memorization technique that originated in the days of flashcards. As flashcards were reviewed, they were sorted into groups based on how frequently they needed to be reviewed in the future. The goal of spaced repetition is to maximize the benefits of [spacing effect](https://dictionary.apa.org/spacing-effect) (also known as _distributed-practice effect_), a cognitive phenomenon that encourages short, distributed learning sessions. 

Spaced repeition, spacing effect, and related theories have been widely studied in a variety of contexts. Rather than provide a long dissertation here :wink: I'll provide a few notes and links to influential research after the user stories.

## User stories (Approach)

The following user stories will provide the basis for the MVP of the app.

### General experience

- **As a user, I want to be able to pick up the app and continue learning when I have a few minutes of time**
   - Users should be able to create an account
   - User data should be stored in local storage for quick sign-in
- **As a user, I want to be able to select learning goals**
   - Users should be able to select from a list of available topics
   - Users should be able to set goals for the duration and frequency of learning sessions (initial recommendation will be 5 minutes per day)
- **As a user, I want to be able to track progress toward my learning goals** 
   - Users should be able to view a report of progress toward completion of a topic
   - Users should be able to see a report of completed sessions per their goal
- **As a user, I want to be able to create my own learning items**
   - Users should be able to add private learning items 
- **As a user, I want to have access to pre-defined learning items**
   - Pre-defined learning items will be provided for each topic/sub-topic

### Session: n = 1

- **As a user, I want to be able to complete a calibration session to assess prior knowledge**
   - The goal of the first session is to assess strengths and weaknesses
   - The items presented in the first session will only be presented once during that session
   - Items not answered or answered incorrectly will be assigned a higher difficulty level than those answered correctly
- **As a user, I want to be able to move at my own pace**
   - Items advance as soon as they are answered
   - If the user does not answer within 8 seconds, the item will be scored as incorrect
   

### Session: n > 1

- **As a user, I will be presented with a combination of new and review items during each session.**
   - 10% of the items in each session will be new
   - 10% of the items in each session will be pulled from R > 5 items
   - The remaining items will be distributed by retention score with R = 0 receiving higher priority than R = 5
- **As a user, I expect to review items I have not retaineded more frequently**
   - Items are assigned a retention score (R) based on the number of times the user has answered the item correctly
   - R = 0 was answered incorrectly or skipped on the last attempt
   - R is incremented on each successful attempt
   - Items with R > 5 are considered "complete"
- **As a user, I expect more time to reflect on more difficult items**
   - An item's difficulty score (D) is the ratio of unsuccessful first attempts across all users ( D = 0 is always answered correctly, D = 1 is always answered incorrectly)
   - Inital value of D = .50 is used until 10 users have attempted the item
   - All items are presented with a timer animation. The time (T) allowed for each item is calculated as follows: T = (10 - R)/D
- **Items will be assigned to a grouping taxonomy**

### Item creation

- **As a content creator, I want to be able to create new items**
   - Items can be created as public (any user can view) or private (only the content creator can view)
   - A flexible classification system will be used to group items into topics and sub-topics
- **As a content creator, I want to be able to view the difficulty score for items I've created**
- **As a content creator, I want to be able to edit items**

## Influential research

The biological processes involved in learning and memory have been a source of fascination for hundreds of years. Despite our attempts to understand how the human brain stores new information, there is still a lot we don't know. For every theory, there is another that opposes it. However different (and polarizing) these theories may be, the majority agree that repeated exposure to the same stimulus has a positive correlation with the formation of long term memory. The effects of these repeated exposures are stronger when they are:

- Spaced out over long periods of time (think months, not hours)
- The object of focus (short duration study sessions, limited distractions)
- Presented within varied contexts (e.g. learning a list of words that is shuffled prior to each reiteration of the memory task each)
- Tied to an emotional experience

For those interested in diving down this particular rabbit hole, here are a few links to get you started:

- [Spaced repetition](https://en.wikipedia.org/wiki/Spaced_repetition) on Wikipedia
- []
- [Leitner system](https://en.wikipedia.org/wiki/Leitner_system) on Wikipedia 
- [The spacing effect: How to Improve Learning and Maximize Retention](https://fs.blog/2018/12/spacing-effect/) on Farn
   - Some suggest our senses take in information and encode it across the entire brain, others believe it is [a cellular level process](https://en.wikipedia.org/wiki/Hebbian_theory).
- These theories tend to agree that each time we "access" this stored information, our brains appear to assign it a higher level of importance and form stronger retrieval paths. See [Consolidation theory](https://www.nature.com/articles/35044580) 

- [Consolidation theory] people notice repetitions of items and create a second representation of the item when they encounter it again
- [Deficient processing theory] people pay more attention to spaced repetitions of an item because the item is not as active in memory
- [Encoding variability theory] contextual information stored with an item varies over time, so that a greater variety of information is stored with spaced presentations, resulting in multiple (or stronger) retrieval routes
- [Study-phase retrieval theory] people notice repetitions of items and retrieve the earlier presentation of an item when they encounter it again
- [Lag effect](https://dictionary.apa.org/lag-effect) long-term retention of to-be-learned information improves with increased separation between repeated presentations of the information within a single period of study. Lag is obtained by interspersing material of interest with additional material or by increasing the number of overall elements between item repetitions.
- [Differential-organization theory] people organize presented material into overlapping groups (e.g. of interassociated words) as lag increases, the groups overlap less and less and the probability of recalling a given word increases as a function of the number of different groups of words with which it has been associated
- [Primacy effect](https://dictionary.apa.org/primacy-effect) the tendency for facts, impressions, or items that are presented first to be better learned or remembered than material presented later in the sequence
- [Recency effect](https://dictionary.apa.org/recency-effect) the most recently presented facts, impressions of items are learned or remembered better than material presented earlier
- [Ebbinghaus forgetting and learning curves] memory of new information decays in the brain. The fastest drop occurs after 20 minutes and the curve levels off after a day. To slow down the process of forgetting, we need to recall or revisit the information after we originally come across it. We do this by going over the information later, at intervals.
- [Presentation matters] Ebbinghaus also notes that what we retain is highly dependent on the intensity of the attention and interest which were attached to the mental states the first time they were present.

- Learning occurs best when new information is incorporated gradually into the memory store rather than when it is jammed in all at once. John Medina, Brain Rules

- Review schedule
   - 1 hour
   - 24 hours
   - 48 hours
   - Weekly
   - Every two weeks
   - Monthly
   - Every 6 months
   - Yearly
- Points systems, daily goals, leaderboards, etc Tracking progress gives us a sense of progression and improvement
- Set duration for review sessions - too long and our attention wanes and we retain decreasing amounts of information - no more than 30 minutes with a break before other review sessions

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

