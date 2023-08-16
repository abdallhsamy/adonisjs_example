// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Article from 'App/Models/Article'
import CreateArticleValidator from 'App/Validators/CreateArticleValidator'
import UpdateArticleValidator from 'App/Validators/UpdateArticleValidator'

export default class ArticlesController {
  public async index({ response }) {
    const articles = await Article.all()

    return response.ok(articles)
  }

  public async store({ request, response }) {
    const payload: any = await request.validate(CreateArticleValidator)

    const article = Article.create(payload)

    return response.ok(article)
  }

  public async show({ params, response }) {
    const { id }: { id: Number } = params

    const article: any = await Article.find(id)
    if (!article) {
      return response.notFound({ message: 'Article not found' })
    }

    return response.ok(article)
  }

  public async update({ request, params, response }) {
    const payload: any = await request.validate(UpdateArticleValidator)

    const { id }: { id: Number } = params

    const article: any = await Article.find(id)
    if (!article) {
      return response.notFound({ message: 'Article not found' })
    }

    article.title = payload.title
    article.content = payload.content

    await article.save()

    return response.ok(article)
  }

  public async destroy({ params, response }) {
    const { id }: { id: Number } = params

    const article: any = await Article.find(id)
    if (!article) {
      return response.notFound({ message: 'Article not found' })
    }

    await article.delete()

    return response.ok({ message: 'Article deleted successfully.' })
  }
}
