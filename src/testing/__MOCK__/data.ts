import faker from 'faker'

export const getTweets = () =>
   Array.from(faker.lorem.word()).map((_) => ({
      name: faker.name.firstName(),
      username: faker.name.lastName(),
      text: faker.lorem.paragraph(),
      created: faker.date.past().getHours(),
      avatar: faker.image.avatar(),
   }))

export const getUsers = () =>
   Array.from(faker.lorem.word()).map((_) => ({
      name: faker.name.firstName(),
      username: faker.name.lastName(),
      avatar: faker.image.avatar(),
   }))

export const getAvatar = faker.image.avatar
