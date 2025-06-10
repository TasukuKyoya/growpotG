import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Post from 'App/Models/Post'

export default class PostsController {
    public async index() {
      return [
        { id: 1, title: 'AdonisJS 入門', content: 'これは最初の投稿です。' },
        { id: 2, title: 'API を作ってみる', content: 'ルーティングとコントローラーを使ってみよう。' },
    ]}

    public async store({ request, response }: HttpContextContract) {
    // 1. リクエストから必要なデータだけ取得
    const data = request.only(['title', 'content'])

    // 2. データベースに新しいPostを作成
    const post = await Post.create(data)

    // 3. 成功レスポンスを返す（201 Created）
    return response.created(post)
  }
}
  