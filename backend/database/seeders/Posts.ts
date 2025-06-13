import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Posts from 'App/Models/Post'

export default class PostSeeder extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
await Posts.createMany([
      {
        userName: 'ボドカ',
        content: 'BO3しか勝たん',
      },
      {
        userName: 'ねこかん',
        content: 'よくわからない持ち',
      }
    ])
  }
}
