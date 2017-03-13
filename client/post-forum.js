import { Forum } from '../lib/forum';


Template.postforum.events({
  'submit #poststatus'(event, template) {
    event.preventDefault();
    forum = {
      user_id: Meteor.userId(),
      content: event.target.content.value
    };

    Meteor.call('forum.insert', forum);


    event.target.content.value = "";
  }
});
