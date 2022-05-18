import { Genre } from './genre.entity';

describe('Category Unit Tests', () => {
  it('should thow an error when name is not provided', () => {
    expect(() => {
      new Genre({
        name: '',
      });
    }).toThrowError('Name is required');
  });

  it('should create a genre', () => {
    const genre = new Genre({
      name: 'Genre 1',
    });

    expect(genre.id).toBeDefined();
    expect(genre.name).toBe('Genre 1');
  });
});
