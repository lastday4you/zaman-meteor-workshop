

Template.postforum.events({
  'submit #poststatus'(event, template){
    event.preventDefault();
    console.log(event.target.content.value);

  },
  'click #zaman'(e,t){
    e.preventDefault();
    alert("zaman");
  }
});
