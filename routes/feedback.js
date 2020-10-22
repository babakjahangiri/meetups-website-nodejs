const express = require('express');

const router = express.Router();

module.exports = (params) => {
  const { feedbackService } = params;

  router.get('/', async (req, res, next) => {
    try {
      const feedback = await feedbackService.getList();
      return res.render('layout', {
        pageTitle: 'Feedback',
        template: `feedback`,
        feedback,
      });
    } catch (error) {
      return next(error);
    }
  });

  router.post('/', (req, res) => {
    return res.send(`Feedback form posted`);
  });

  return router;
};
