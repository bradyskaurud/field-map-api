const Model = require('../model/index');
const {Field} = Model;
const tj = require('togeojson');
const fs = require('fs');
const DOMParser = require('xmldom').DOMParser; // node doesn't have xml parsing or a dom. use xmldom

const fieldController = {
    all (req, res) {
        var kml = new DOMParser().parseFromString(fs.readFileSync('./beets2016.kml', 'utf8'));

        var converted = tj.kml(kml);

        var convertedWithStyles = tj.kml(kml, { styles: true });

        console.log(convertedWithStyles);

        return res.json(convertedWithStyles);
    },
};

module.exports = fieldController;