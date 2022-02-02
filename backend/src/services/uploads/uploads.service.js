// Initializes the `uploads` service on path `/uploads`
const {Uploads} = require('./uploads.class');
const createModel = require('../../models/uploads.model');
const hooks = require('./uploads.hooks');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, 'public/uploads'), // where the files are being stored
  filename: (_req, file, cb) => {
    cb(null, `${_req.body.name}`);
  },
});
const uploads = multer({
  storage,
  limits: {
    fieldSize: 1e8,
    fileSize: 1e7,
  },
});

module.exports = function(app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    multi: true,
  };

  // Initialize our service with any options it requires
  app.use(
    '/uploads',
    uploads.array('files'),
    (req, _res, next) => {
      const {method} = req;
      if (method === 'POST' || method === 'PATCH') {
        req.feathers.files = req.body.files;
        const body = [];
        for (const file of req.files)
          body.push({
            name: req.body.name,
            newNameWithPath: file.path,
          });
        req.body = method === 'POST' ? body : body[0];
      }
      next();
    },

    new Uploads(options, app),
  );

  // Get our initialized service so that we can register hooks
  const service = app.service('uploads');

  service.hooks(hooks);
};
