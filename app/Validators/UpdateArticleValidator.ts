import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UpdateArticleValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    title: schema.string.optional({ trim: true }, [rules.maxLength(255)]),
    content: schema.string.optional({ escape: true }, [rules.maxLength(1000)]),
  })

  public messages: CustomMessages = {}
}
