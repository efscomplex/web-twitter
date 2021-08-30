import faker from 'faker'

export const tweets = Array(10).map((_) => ({
  name: faker.name.firstName(),
  username: faker.name.middleName(),
  avatar: faker.image.avatar(),
  text: faker.lorem.paragraph(),
  created: faker.date.past(),
}))
