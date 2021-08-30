import faker from 'faker'

export const tweets = Array.from(faker.lorem.word()).map((_) => ({
  name: faker.name.firstName(),
  username: faker.name.lastName(),
  text: faker.lorem.paragraph(),
  created: faker.date.past().getHours(),
  avatar: faker.image.avatar(),
}))
