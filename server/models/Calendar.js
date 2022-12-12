const { Schema, model } = require('mongoose');

 const CalendarSchema  = new Schema({
    events: {
        type: String,
        trim: true,
        required: true,
    },

    });
    const Calendar = model("Calendar", CalendarSchema);

    module.exports = Calendar;
    