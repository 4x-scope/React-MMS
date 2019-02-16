const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3030;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/customers', (req, res) => {
    res.send([
        {
          'id': 1,
          'image': 'https://placeimg.com/64/64/1',
          'name': '이다산',
          'birthday': '991231',
          'gender': '여',
          'job': '불합자'
        },
        {
          'id': 2,
          'image': 'https://placeimg.com/64/64/2',
          'name': '개룸관',
          'birthday': '190216',
          'gender': '남',
          'job': '건축가'
        },
        {
          'id': 3,
          'image': 'https://placeimg.com/64/64/3',
          'name': '이대칭',
          'birthday': '910119',
          'gender': '여',
          'job': '사기꾼'
        }
      ]);
});

app.listen(port, () => console.log(`server listening on port ${port}`));