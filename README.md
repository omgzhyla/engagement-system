# Engagement System
Let's assume we have an anonymous voting system and users are engaged to vote by opening 
some URL, like https://vote-anonymously.com/slug-for-vote

When user opens the vote for the first time we assign him unique identifier, one per vote.

The page contains a list of predefined answers, so users must choose one and then submit it. 
After this, the page shows the user's choice until the vote is closed. Then the vote is closed 
the page shows a diagram with answers ordered by the number of users who chose them.

## Endpoints

| Method | Path              | Description              | HTTP response codes |
|--------|-------------------|--------------------------|----------------|
| GET    | votes/            | List of active votes     | 200            |
| GET    | votes/:id         | Vote details             | 200, 404       |
| POST   | votes/            | Add vote                 | 201, 400, 404  |
| POST   | votes/:id/answers | Add answer               | 201, 400, 404  |
| PATCH  | votes/:id         | Update vote / Close vote | 201, 400, 404  |

## Data structure

### Votes

Since we need no to track answers separately we could put them as a JSON value

| Field       | Value             |     |
|-------------|-------------------|-----|
| id          |                   |     |
| title       |                   |     |
| description |                   |     |
| status      | "new","open","closed"   |     |
| answers     | JSON with answers |     |
| created_at  |                   |     |
| started_at  |                   |     |
| closed_at   |                   |     |

### Answers
| Field        | Value                   |     |
|--------------|-------------------------|-----|
| vote_id      |                         |     |
| user_id      | Unique user id per vote |     |
| answer       | Number of answer        |     |
| submitted_at | Timestamp               |     |

