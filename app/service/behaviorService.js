var Behavior = require('../models/behavior');
var User = require('../models/user');

module.exports = {
    addLog: function(useremail, type, dateTime, data, link) {
        User.findOne({ 'local.email': decodeURIComponent(useremail) }, function(err, user) {
            let newBehavior = new Behavior();
            newBehavior.userId = user._id;
            newBehavior.type = type;
            newBehavior.dateTime = dateTime;
            newBehavior.data = data;
            newBehavior.link = link;
            newBehavior.save(function(err) {
                if (err)
                    throw err;
                return;
            });
        });
    },
}
