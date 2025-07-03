import path from 'path';
import fs from 'fs';
import express, { Request, Response } from 'express';
import cors from 'cors';

import { TLoginData, TRegisterData, TUserCard, TUserData } from './types';

const app = express();

const PORT = 3000;

const staticPath = path.join(__dirname, '../public/db');

app.use(express.static(staticPath));
app.use(express.json());
app.use(cors());

const error = {
  error: 'Что-то пошло не так'
};

app.post(
  '/userCards',
  (req: Request<{}, {}, { page: number; limit: number }>, res) => {
    const { page, limit } = req.body;
    const userCardsCount = page * limit;

    fs.readFile(`${staticPath}/userCards.json`, 'utf8', (err, fileData) => {
      if (err) return res.status(500).json(error);

      try {
        const jsonData: { success: boolean; data: TUserCard[] } =
          JSON.parse(fileData);

        const visibleUserCards = jsonData.data.slice(0, userCardsCount);

        return res.json({
          ...jsonData,
          data: visibleUserCards,
          hasMore:
            visibleUserCards.length !== jsonData.data.length ? true : false
        });
      } catch (err) {
        return res.status(500).json(error);
      }
    });
  }
);

app.get('/skills', (req, res) => {
  fs.readFile(`${staticPath}/skills.json`, 'utf8', (err, data) => {
    if (err) return res.status(500).json({ error: 'Failed to read JSON file' });
    return res.send(data);
  });
});

app.post('/register', (req: Request<{}, {}, TRegisterData>, res) => {
  const userData = req.body;

  fs.readFile(`${staticPath}/users.json`, 'utf-8', (err, fileData) => {
    if (err) return res.status(500).json(error);

    try {
      const jsonData: { data: TRegisterData[] } = JSON.parse(fileData);

      const isEmailExist = jsonData.data.find(
        (user) => user.email === userData.email
      );
      if (isEmailExist) throw new Error('');

      jsonData.data.push(userData);

      fs.writeFile(
        `${staticPath}/users.json`,
        JSON.stringify(jsonData, null, 2),
        (writeError) => {
          if (writeError) return res.status(500).json(error);

          return res.json({
            success: true,
            data: {
              user: {
                name: userData.name,
                about: userData.about,
                birthDay: userData.birthDay,
                city: userData.city,
                gender: userData.gender,
                image: userData.image
              }
            }
          });
        }
      );
    } catch (err) {
      return /Error/.test(String(err))
        ? res.status(401).json({
            error: 'Пользователь c такой почтой уже существует '
          })
        : res.status(500).json(error);
    }
  });
});

app.post('/login', (req: Request<{}, {}, TLoginData>, res) => {
  const userData = req.body;
  fs.readFile(`${staticPath}/users.json`, 'utf-8', (err, fileData) => {
    if (err) return res.status(500).json(err);

    try {
      const jsonData = JSON.parse(fileData);
      const user: TRegisterData | undefined = jsonData.data.find(
        (user: TRegisterData) =>
          user.email === userData.email && user.password === userData.password
      );

      if (!user) throw new Error();

      return res.json({
        success: true,
        data: {
          user: {
            name: user.name,
            about: user.about,
            birthDay: user.birthDay,
            city: user.city,
            gender: user.gender,
            image: user.image
          }
        }
      });
    } catch (err) {
      return /Error/.test(String(err))
        ? res.status(401).json({
            error: 'Неправильный email или пароль'
          })
        : res.status(500).json(error);
    }
  });
});

app.get('/logout', (req, res) =>
  res.json({
    success: true
  })
);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
