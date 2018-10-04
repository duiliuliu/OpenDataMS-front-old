import mockjs from 'mockjs';

export default {
  'GET /api/history?page=0': (req, res) => {
    setTimeout(() => {
      data = mockjs.mock({
        'list|10': [{ 'level|1': ["info", "warn", "debug"], 'time': Random.datetime('y-MM-dd HH:mm:ss'), 'msg': '@sentence(8, 25)' }],
      })
      res.send(data);
    }, 1000);
  },
};