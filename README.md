# Learning with Spaced Repetition

This demo app provides a sample implementation of spaced reptition.

## What is spaced repetition?

Spaced repetition is a learning and memorization technique that originated in the days of flashcards. As flashcards were reviewed, they were sorted into groups based on how frequently they needed to be reviewed in the future. The goal of spaced repetition is to maximize the benefits of [spacing effect](https://dictionary.apa.org/spacing-effect) (also known as _distributed-practice effect_), a cognitive phenomenon that encourages short, distributed learning sessions. 

Spaced repeition, spacing effect, and related theories have been widely studied in a variety of contexts. Rather than provide a long dissertation here :wink: I'll provide a few notes after the user stories.

## User stories (Approach)

The following user stories will provide the basis for the MVP of the app.

### General experience

- **As a user, I want to be able to pick up the app and continue learning when I have a few minutes of time**
   - Users should be able to create an account
   - User data should be stored in local storage for quick sign-in
- **As a user, I want to be able to select learning goals**
   - Users should be able to select from a list of available topics
   - Users should be able to set goals for the duration of their learning sessions (initial recommendation will be 5 minutes per day)
- **As a user, I want to be able to track progress toward my learning goals** 
   - **POST MVP** Users should be able to view a report of progress toward completion of a topic
   - **POST MVP** Users should be able to see a report of completed sessions per their goal
- **As a user, I want to be able to create my own learning items**
   - Users should be able to add private learning items 
- **As a user, I want to have access to pre-defined learning items**
   - Pre-defined learning items will be provided for each topic/sub-topic

### Session Experience

- **As a user, I want each session to feel like a valuable use of time.**
   - The system should adapt to the learner, ensuring that unlearned items have a higher priority than learned items.
- **As a user, I want to be challenged but not overwhelmed.**
   - Each item will be presented with a timer. The time allowed will be calculated based on the user's retention (R) score.
- **As a user, I want to be able to move at my own pace.**
   - Items advance as soon as they are answered.
   - If the user does not answer within the allotted time, the item will be skipped
- **As a user, I want to balance the feeling of being challenged with the feeling of accomplishment.**
   - The system should let users know whether they have answered correctly or incorrectly.
   - The system should pace itself by ensuring the items are varied by R score. (e.g. don't hammer the learner with 5 questions in a row with similar R scores)
   

### Adapting to the learner

- **As a user, I expect the system to get to know my strengths and weaknesses.**
   - Correctly answered questions should not be presented a second time in the same session.
   - **POST MVP** Incorrectly answered (or unanswered) questions should be reviewed within the same session (assuming the learner stays in the session).
- **As a user, I will be presented with a combination of new and review items during each session.**
   - No more than 10% of the items in each session will be new when review items have reached adequate levels
   - 10% of the items in each session will be pulled from R > 95 items (effectively reviewing previously learned items)
   - The remaining items will be distributed by retention score with R = 0 receiving higher priority than R = 94
- **As a user, I expect to review items I have not retained more frequently**
   - Items are assigned a retention score (R) based on the likelihood they have "learned" the item 
   - Items with R > 95 are considered "learned"
   - **POST MVP** Bayesian Knowledge Tracing algorithm to prevent overfitting and SuperMemo algorithm to factor in time since last exposure
- **As a user, I expect more time to reflect on unlearned items**
   - All items are presented with a timer animation. The time (T) allowed for each item is calculated as follows: T = baseTime + (10 * ((100 - R)/100)) where R = rScore 
- **Items will be assigned to a grouping taxonomy**

### Item creation

- **As a content creator, I want to be able to create new items**
   - Items can be created as public (any user can view) or private (only the content creator can view)
   - A flexible classification system will be used to group items into topics and sub-topics
   - **POST MVP** As a content creator, I want to be able to edit items

## Influential research

The biological processes involved in learning and memory have been a source of fascination for hundreds of years. Despite our attempts to understand how the human brain stores new information, there is still a lot we don't know. For every theory, there is another that opposes it. However different (and polarizing) these theories may be, the majority agree that repeated exposure to the same stimulus has a positive correlation with the formation of long term memory. The effects of these repeated exposures are stronger when they are:

- Spaced out over long periods of time (think months, not hours)
- The object of focus (short duration study sessions, limited distractions)
- Presented within varied contexts (e.g. learning a list of words that is shuffled prior to each reiteration of the memory task each)
- Tied to an emotional experience

