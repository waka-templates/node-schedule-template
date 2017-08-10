module.exports = {
    prompts: {
        name: {
            type: 'string',
            required: true,
            message: 'project name'
        },
        description: {
            type: 'string',
            message: 'description',
            default: 'a node schedule work'
        },
        author: {
            type: 'string',
            message: 'author',
            required: true
        },
        email: {
            type: 'confirm',
            message: 'need send email?'
        }
    },
    filters: {
        'mail/*':'email'
    },
    completeMessage: "init project successfully. \n read more in README.md"
};