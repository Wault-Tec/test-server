import Post from "./models.js";
import fileService from "./fileService.js";

class PostService {
    async create(post, picture) {
        const fileName = fileService.saveFiles(picture);
        console.log('fileName', fileName)
        const createdPost = await Post.query().insert({...post, picture: fileName});
        return createdPost
    }

    async getAll() {
        const posts = await Post.query()
        return posts
    }

    async getOne(id) {
        if(!id) {
            throw new Error("Id не указан")
        }

        const post = await Post.query().findById(id)

        if(!post) {
            throw new Error( `Пост с id ${id} не найден`)
        }

        return post
    }

    async update(post) {
            if(!post.id) {
                throw new Error("Id не указан")
            }

            const updatedPost = await Post.query().patchAndFetchById(post.id, post)
           
            return updatedPost
    }

    async delete(id) {
            if(!id) {
                throw new Error("Id не указан")
            }

            const numDeleted = await Post.query().deleteById(id);

            return `Удалено записей: ${numDeleted}`
    }
}

export default new PostService()