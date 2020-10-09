## Store Implementation

Let's discuss about App State Management Module which means storing data of the App when routed one page to another.

```
npm i -S redux react-redux react-redux
```

## Reducer - Action Types.
Create File `src/store/actionTypes.js`

```
// Loaders.
export const IS_LOADING = "IS_LOADING";
export const DONE_LOADING = "DONE_LOADING";
```

## Reducer - Loader
Create File `src/store/reducers/loader.js`
```
import { IS_LOADING, DONE_LOADING } from "../actionTypes";

const initialState = {
  loading: false,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case IS_LOADING:
      return {
        loading: true,
      };
    case DONE_LOADING:
      return {
        loading: false,
      };
    default:
      return state;
  }
};
```

## Reducer - Main Index
Create File `src/store/index.js`.

