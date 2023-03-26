export default {
    name: 'tweets',
    title: 'Tweets',
    type: 'document',
    fields: [
        {
            name: 'tweet',
            type: 'string',
            title: 'Tweet',
        },

        {
            name: 'timestamp',
            type: 'datetime',
            title: 'Timestamp',
        },

        {
            name: 'author',
            title: 'Author',
            type: 'reference',
            to: [{type: 'users'}],
        },
    ],
}