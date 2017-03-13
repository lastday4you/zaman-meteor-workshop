import {Forum} from '../lib/forum';





Template.postforum.events({
  'submit #poststatus'(event , template){
    event.preventDefault();
    forum = {
      content: event.target.content.value
    };
    Meteor.call('forum.insert', forum);
    
    event.target.content.value = "";
  }
});
