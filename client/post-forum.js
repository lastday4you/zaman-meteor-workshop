import {Forum} from '../lib/forum';





Template.postforum.events({
  'submit #poststatus'(event , template){
    event.preventDefault();
    Forum.insert({
      content: event.target.content.value
    });
    event.target.content.value = "";
  }
});
