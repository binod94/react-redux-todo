/*
 * action types
 */

export const ADD_WORK = 'ADD_WORK'

/*
 * action creators
 */

 export function AddWork(text) {
   console.log("inside Action");
   return { type: ADD_WORK, text:text }
}
