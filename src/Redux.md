## Actions

- MOVIES_RECEIVED is dispatched when we receive the api response

```javascript
  {
    type: MOVIES_RECEIVED,
    movies: [...]
  }
```

- FETCH_MOVIES is dispatched when we call the api

## Reducers

- moviesReducer

```javascript
  const initialState: []
```

When MOVIES_RECEIVED is dispatched, state becomes action.movies

- loadingReducer

```javascript
  const initialState: false
```

When FETCH_MOVIES is dispatched, state becomes true
When MOVIES_RECEIVED is dispatched, state becomes false
