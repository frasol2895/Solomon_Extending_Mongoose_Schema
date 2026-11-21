const mongoose = require('mongoose');
const Schema = mongoose.Schema;

function formatWebsite(url) {
    if (typeof url !== 'string' || url === '' || /^https?:\/\//i.test(url)) {
        return url;
    }

    return 'http://' + url;
}

const UserSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    username: {
        type: String,
        trim: true
    },
    password: String,
    website: {
        type: String,
        set: formatWebsite,
        get: formatWebsite
    },
    created: {
        type: Date,
        default: Date.now
    }
});

UserSchema.set('toJSON', { getters: true });

mongoose.model('User', UserSchema);