const { Schema, model } = require('mongoose');

 const EventSchema  = new Schema({
    title: {
        type: String,
        trim: true,
        required: true,
        validate: [
            function(input) {
                return input.length >= 1;
            },
            "Title Should Be Longer!"
        ]
    },
    start: {
        type: Date,
        required: true
    },
    end: Date,
    description: String,
    created: {
        type: Date,
        default: Date.now
    },
    lastUpdated: Date
    });

//last updated date

    EventSchema.methods.lastUpdatedDate = function() {
        this.lastUpdated = Date.now();
        return this.lastUpdated;
    };
    const Event = model("Event", EventSchema);

    module.exports = Event;
    