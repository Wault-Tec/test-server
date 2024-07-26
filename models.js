import { Model } from 'objection';

export default class Post extends Model {
    static get tableName() {
        return 'posts'
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['author', 'title', 'content'],
            properties: {
                id: {type: 'integer'},
                author: {type: 'string'}, 
                title: {type: 'string'},
                content: {type: 'string'},
                picture: {type: ['string', 'null']}
            }
        }
    }
}