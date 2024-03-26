import { GameSavingLoader } from '../app';

test('GameSavingLoader', async () => {
  const saving = await GameSavingLoader.load(true);
  expect(saving).toBe(
    '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}',
  );
});

test('GameSavingLoader Error', async () => {
  const result = await GameSavingLoader.load(false);
  expect(result).toBe('Failed');
});
