// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Article from 'App/Models/Article'
import CreateArticleValidator from 'App/Validators/CreateArticleValidator'
import UpdateArticleValidator from 'App/Validators/UpdateArticleValidator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { bind } from '@adonisjs/route-model-binding'

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

  @bind()
  public async show({ response }: HttpContextContract, article: Article) {
    return response.ok(article)
  }

  @bind()
  public async update({ request, response }: HttpContextContract, article: Article) {
    const payload: any = await request.validate(UpdateArticleValidator)

    article.title = payload.title
    article.content = payload.content

    await article.save()

    return response.ok(article)
  }

  @bind()
  public async destroy({ response }: HttpContextContract, article: Article) {
    await article.delete()

    return response.ok({ message: 'Article deleted successfully.' })
  }
}
