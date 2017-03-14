import {Forum} from '../../lib/forum';

Meteor.publish('all_forum', function(){
  return Forum.find({});
});

Meteor.publish('user_forum', function(){
  return Forum.find({user_id: this.userId});
});