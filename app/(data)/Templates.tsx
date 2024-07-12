export default [
    {
        name: 'Blog Title',
        desc: 'An AI tool that generate blog title depends on your blog information.',
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/4186/4186534.png',
        aiPrompt: 'Give me 5 blog topic idea in bullet wise only based on given niche & outline and give me result in Rich text editor format',
        slug: 'generate-blog-title',
        form: [
            {
                label: 'Enter your blog niche',
                field: 'input',
                name: 'niche',
                required: true
            },
            {
                label: 'Enter blog outline',
                field: 'textarea',
                name: 'outline',
            }
        ]
    },
    {
        name:'Blog Content',
        desc:'An AI tool that serves as your personal blog post title.',
        category: 'blog',
        icon:'https://cdn-icons-png.flaticon.com/128/2593/2593549.png',
        slug:'blog-content-generation',
        aiPrompt:'Generate Blog Content based on topic and outline in Rich text editor format',
        form:[
            {
                label:'Enter your blog topic',
                field:'input',
                name:'topic',
                required:true
            },
            {
                label:'Enter blog Outline here',
                field:'textarea',
                name:'outline'
            }
        ]
    },
    {
        name:'Blog Topic Ideas',
        desc:'An AI tool that sevices as your personal blog post title and description.',
        category:'Blog',
        icon:'https://cdn-icons-png.flaticon.com/128/11552/11552083.png',
        slug:'blog-topic-idea',
        aiPrompt:'Generate top 5 Blog Topic Ideas in bullet pointonly based on given niche topic and give me result in Rich text editor format',
        form:[
            {
                label:'Enter your Niche',
                field:'input',
                name:'niche',
                required:true
            },
        ]
    },
    {
        name:'Youtube SEO Title',
        desc:'An AI tool that service as your personal blog post title and description given.',
        category:'Youtube Tools',
        icon:'https://cdn-icons-png.flaticon.com/128/3670/3670209.png',
        slug:'youtube-seo-title',
        aiPrompt:'Give me Best SEO optimized high ranked 5 title idea based on given niche topic and give me result in Rich text editor format',
        form:[
            {
                label:'Enter your youtube video topic keywords',
                field:'input',
                name:'keywords',
                required:true
            },
            {
                label:'Enter youtube description Outline here',
                field:'textarea',
                name:'outline'
            }
        ]
    },
    {
        name:'Youtube Description',
        desc:'An AI tool that service as your personal blog post title and description given.',
        category:'Youtube Tool',
        icon:'https://cdn-icons-png.flaticon.com/128/2522/2522649.png',
        slug:'youtube-description',
        aiPrompt:'Generate Youtube Description with emoji under 4-5 line',
        form:[
            {
                label:'Enter your blog topic/title',
                field:'input',
                name:'topic',
                required:true
            },
            {
                label:'Enter youtube Outline here',
                field:'textarea',
                name:'outline'
            }
        ]
    }
]