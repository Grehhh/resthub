Contact = require("./contactModel");


//index actions
exports.index = function(req,res) {
    Contact.get(function(err,contacts) {
        if(err) {
            res.json({
                status: "error",
                message: err
            })
        }
        res.json({
            status: "succes",
            message: "Contacts retrieved succesfully",
            data: contacts
        });
    });
};

//CREATE
exports.new = function(req,res) {
    var contact = new Contact();
    contact.name = req.body.name ? req.body.name : contact.name;
    contact.gender = req.body.gender;
    contact.email = req.body.email;
    contact.phone = req.body.phone;

    contact.save(function(err) {
        if(err) {
            res.json(err);
        }
        res.json({
            message: "New contact created",
            data: contact
        })
    })
}

//READ
exports.view = function(req, res) {
    Contact.findById(req.params.contact_id, function (err,contact) {
        if(err) {
            res.send(err)
        }
        res.json({
            message: "Contact details loading",
            data: contact
        });
    });
};

//UPDATE
exports.update = function(req,res) {
    Contact.findById(req.params.contact_id, function(err,contact) {
        if(err) {
            res.json(err);
        }
        res.json({
            message: "Contact  info updated",
            data: contact
        });
    });
};

//DELETE
exports.delete = function(req,res) {
    Contact.remove({ _id: req.params.contact_id }), function(err,contact) {
        if(err) {
            res.send(err);
        }
        res.json({
            status: succeded,
            message: "Contact deleted"
        });
    };

};