import {Forum} from '../forum'

Meteor.methods({
  'forum.insert'(forum){
    if (Meteor.userId() == null){
       throw new Meteor.Error('504', 'user must login first');
    }
    Forum.insert(forum);
  },
  'forum.update'(id, content){
    if (id != Meteor.userId()){
      throw new Meteor.Error('504', 'permission deined');
    }
    Forum.update(id, {$set : {content: content}});
  }
});