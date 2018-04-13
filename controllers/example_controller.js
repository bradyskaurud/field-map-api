const Model = require('../model/index');
const {Field} = Model;

const fieldController = {
    all (req, res) {
      Field.find({})
            .exec((err, fields) => {
                console.log(res.json);
                return res.json(fields);
            });
    },
    byId (req, res) {
        const idParam = req.params.id;
        // Returns a single product
        // based on the passed in ID parameter
        Field
            .findOne({_id: idParam})
            // as well as it's manufacturer
            .populate('field')
            .exec( (err, field) => res.json(field) );
    },
    create (req, res) {
        const requestBody = req.body;
        // Creates a new record from a submitted form
        const newField = new Field(requestBody);
        // and saves the record to
        // the data base
        newField.save( (err, saved) => {
            // Returns the saved product
            // after a successful save
            Field
                .findOne({_id: saved._id})
                .populate('field')
                .exec((err, field) => res.json(field));
        } )
    },
    update (req, res) {
        const idParam = req.params.id;
        let field = req.body;
        // Finds a product to be updated
        Field.findOne({_id: idParam}, (err, data) => {
            // Updates the product payload
            data.name = field.name;
            data.description = field.description;
            data.lat = field.lat;
            data.lng = field.lng;
            // Saves the product
            data.save((err, updated) => res.json(updated));
        })
    },
    remove (req, res) {
        const idParam = req.params.id;
        // Removes a product
        Field.findOne({_id: idParam}).remove( (err, removed) => res.json(idParam) )
    }
};

module.exports = fieldController;