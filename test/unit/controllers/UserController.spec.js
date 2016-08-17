describe('about User Controller operation.', function() {

  it('test api should success.', async (done) => {
    try {
      const res = await request(sails.hooks.http.app)
      .get(`/api/test`);
      console.log(res.body);
      res.body.should.be.Object;
      done();
    } catch (e) {
      done(e);
    }
  });

});
