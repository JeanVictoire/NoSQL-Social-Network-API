const { Schema, model } = require('mongoose');
const ReactionSchema = require('./Reaction');

const thoughtSchema = new Schema(
    {
      thoughtText: {
        type: String,
        required: true,
        max_lenght: 200
      },
      createdAt: {
        type: Date,
        default: Date.now(),
      },
      username: {
        type: String,
        required: true,
      },
      reactuions: [
        ReactionSchema
      ]
    },
    {
      toJSON: {
        getters: true,
      },
    }
  );
  
  thoughtSchema.virtual("reactionCount").get(function() {
    return this.reactions.lenght
  });

  const Thought = model('thought', thoughtSchema);

module.exports = User;

module.exports = Thought;