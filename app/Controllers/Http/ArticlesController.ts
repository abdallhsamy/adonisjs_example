// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Article from 'App/Models/Article'
import CreateArticleValidator from 'App/Validators/CreateArticleValidator'
import UpdateArticleValidator from 'App/Validators/UpdateArticleValidator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ArticlesController {
  public async index({ request, response }: HttpContextContract) {

    const page = request.input('page', 1)
    const perPage = request.input('per_page', 10)
    const articles = await Article.query()
      .where('is_published', true)
      .select('id', 'title')
      .paginate(page, perPage)

    return response.ok(articles)
  }

  public async store({ request, response }: HttpContextContract) {
    const payload: any = await request.validate(CreateArticleValidator)

    const article = Article.create(payload)

    return response.ok(article)
  }

  public async show({ params, response }: HttpContextContract) {
    const article: any = await Article.find(params.id)
    if (!article) {
      return response.notFound({ message: 'Article not found' })
    }

    return response.ok(article)
  }

  public async update({ request, params, response }: HttpContextContract) {
    const payload: any = await request.validate(UpdateArticleValidator)

    const article: any = await Article.find(params.id)
    if (!article) {
      return response.notFound({ message: 'Article not found' })
    }

    article.title = payload.title
    article.content = payload.content

    await article.save()

    return response.ok(article)
  }

  public async destroy({ params, response }: HttpContextContract) {
    const article: any = await Article.find(params.id)
    if (!article) {
      return response.notFound({ message: 'Article not found' })
    }

    await article.delete()

    return response.ok({ message: 'Article deleted successfully.' })
  }
}
