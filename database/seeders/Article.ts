import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { ArticleFactory } from 'Database/factories'

export default class extends BaseSeeder {
  public async run() {
    await ArticleFactory.createMany(100)
  }
}
