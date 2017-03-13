import {Forum} from '../../lib/forum';

Meteor.publish('all_forum', function(){
  return Forum.find({});
});