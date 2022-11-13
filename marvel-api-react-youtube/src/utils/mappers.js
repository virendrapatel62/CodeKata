export const characterResponseMapper = (characters = []) => {
  return characters.map((hero) => {
    const {
      thumbnail: { path, extension },
      name,
      description,
      id,
    } = hero;
    return {
      thumbnailUrl: `${path}.${extension}`,
      name,
      id,
      description,
    };
  });
};
