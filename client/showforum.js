import {Forum} from '../lib/forum';

Template.showForum.onCreated(function () {
  Session.set('edit-item-id', null);
});

Template.showForum.helpers({
  forums (){
    return Forum.find();
  }
});

Template.showForum.events({
  'click .rmbt'(event, template){
    console.log(this);
    Forum.remove({_id: this._id});
  },
  'click .edbt' (event, template){
    console.log( $('#e-content'));
    Session.set('edit-item-id', this._id);
    $('#e-content').val(this.content);
  },
  'submit #editstatus'(event, template){
    event.preventDefault();
    console.log(Session.get('edit-item-id'));
    Forum.update(
      {_id: Session.get('edit-item-id')}
      , {
        $set : {content: event.target.econtent.value}
      }
      );
  }
});
