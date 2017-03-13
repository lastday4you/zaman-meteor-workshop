import {Forum} from '../forum'

Meteor.methods({
  'forum.insert'(forum){
    Forum.insert(forum);
  },
  'forum.update'(id, content){
    Forum.update(id, {$set : {content: content}});
  }
});