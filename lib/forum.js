import SimpleSchema from 'simpl-schema';

export const Forum = new Mongo.Collection("forum");

const ForumSchema = new SimpleSchema({
    user_id : {
      type: String
    },
    content: {
      type: String
    }
});
Forum.attachSchema(ForumSchema);
