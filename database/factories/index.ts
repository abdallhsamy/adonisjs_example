import Factory from '@ioc:Adonis/Lucid/Factory'
import Article from 'App/Models/Article'
export const ArticleFactory = Factory
    .define(Article, ({ faker }) => {
        return {
            title: faker.lorem.words(6),
            content: faker.lorem.lines(6),
            is_published: faker.datatype.boolean()
        }
    })
    .build()