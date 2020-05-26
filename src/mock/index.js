export const USERS = {
  'GET /tableData': () => {
    const data = [];
    for (let i = 0; i < 15; i++) {
      data.push({
        id: i,
        name: `GarnetGarnet ${i}`,
        relatedAllUser: '否',
        relatedUser: ['Garnet_test', 'Garnet12', 'Garnet1234'],
        relatedApp: ['test1', 'test3', 'test5'],
        createTime: '2019-12-21 14:26:19',
        updateTime: '2020-02-11 10:21:06',
        modifier: 'Garnet',
        note: `this is a note ${i}`,
      });
    }
    return data;
  },
  'GET /tenantList': [{
      label: 'Tenant1',
      value: 'Tenant1'
    },
    {
      label: 'Tenant12',
      value: 'Tenant12'
    },
    {
      label: 'garnet',
      value: 'garnet'
    }
  ],
  'POST /login': (req) => {
    if (req.body.name == 'raj') return true;
    else return false;
  },
  '/403': () => {
    throw new MockStatusError(403);
  },
}
