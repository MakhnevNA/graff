import { Router } from 'express';

const sliderRoutes = Router();

// Возращает изображения для слайдера
sliderRoutes.get('/slider/images', (req, res) => {
    res.send('Получили изображения для слайдера');
});

export default sliderRoutes;
