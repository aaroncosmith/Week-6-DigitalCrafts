const express = require('express'),
    router = express.Router()
    coeModel = require('../models/ceoModel');

router.get('/:id?', async (req, res) => {
    // talk to our model and use get all. going to return a promise so async and wait
    const { id } = req.params;
    let executiveData = [];
    
    if (!!id) {
        executiveData = await coeModel.getById(id);
    } else {
        executiveData = await coeModel.getAll();
    };
    // console.log('single exec response is: ', singleExecutive);
    
    // console.log('executive data: ', executiveData);
    // use the render template instead
    res.render('template', {
        locals: {
            title: 'Apple CEOs',
            arrayOfData: executiveData
        },
        partials: {
            partial: 'partial-ceos'
        }
    });
});

module.exports = router;