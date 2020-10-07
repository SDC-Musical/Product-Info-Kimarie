const mockRequest = () => ({

});

const express = require('express');
const mockResponse = {
  res = {}
  res.status = jest.fn().mockReturnValue(res)
  res.send = jest.fn().mockReturnValue(res)
  return res;
};
describe('/', () => {
  test('should send: Working Path', async () => {
    const req = mockRequest(
    );
    const res = mockResponse();
    await route (req, res, () => {});
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith({'Working Path'
    });
    test('should send error if path does not exist', async () => {
      const req = mockRequest('/producer');
      const res = mockResponse();
      await route (req, res, () => {});

      expect(req.session.data).toBeUndefined();
    });
  });
  });