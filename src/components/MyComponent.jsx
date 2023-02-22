import useScript from './UseScript';

export const MyComponent = (props) => {
  useScript(
    'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Aa7944b9d3b406def39826c5efff269686b6e7de8962d9841f055e1b6940d9f7d&amp;width=1280&amp;height=300&amp;lang=ru_RU&amp;scroll=true',
  );
};
