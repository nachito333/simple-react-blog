import { FETCH_POSTS  , FETCH_POST , DELETE_POST , EDIT_POST } from '../actions/types';
import _ from 'lodash';

export default function(state = {} , action){
  switch(action.type){
    case FETCH_POSTS :
      const posts = action.payload.data;
      //devuelve un arreglo donde la key de cada post es su respectivo '_id'
      return _.mapKeys(posts , '_id');
    case FETCH_POST :
      return { ...state , [action.payload.data._id] : action.payload.data};
      //concatena al estado actual un elemento con key ._id y su contenido es action.payload.data

    case EDIT_POST :
    const newPost = action.payload.data;
    return { ...state , [action.payload.data._id] : action.payload.data}

    case DELETE_POST :
    //action.payload.data == post id.
    return _.omit( state , action.payload.data );
    default : return state;
  }
}
