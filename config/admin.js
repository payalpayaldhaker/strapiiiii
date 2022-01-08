module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5d3cbd29168ebef0496bc640fd6d4ec0'),
  },
});
