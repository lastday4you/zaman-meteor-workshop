import {Forum} from '../lib/forum';


Template.showForum.helpers({
  forums (){
    return Forum.find();
  }
});
