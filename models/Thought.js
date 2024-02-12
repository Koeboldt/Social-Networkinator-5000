const { ObjectId } = require('bson');
const {Schema, model} = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId:{
            type: ObjectId,
            default: new ObjectId
        },
        reactionBody:{
            type: String,
            required: true,
            maxLength: 280,
        },
        username:{
            type: String,
            required: true
        },
        createdAt:{
            type: Date,
            default: Date.now,
            // for later I will add the formatting or whatever idk.
        }
    }
);

const thoughtSchema = new Schema(
    {
        _id: true,
        thoughtText: {
            type: String,
            required: true
        },
        createdAt:{
            type: Date,
            default: Date.now,
            // for later I will add the formatting or whatever idk.
        },
        username:{
            type: String,
            required: true
        },
        reactions: [reactionSchema]
    },
    {
        toJSON: {
          virtuals: true,
        },
      }
);

thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
/* Create a virtual called `reactionCount` that retrieves the length of the thought's `reactions` array field on query.*/