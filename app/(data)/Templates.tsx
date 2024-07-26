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
    },
    {
        name:'Add Emojis to Text',
        desc:'An AI tool that serves as your personal blog post title and description given.',
        category:'blog',
        icon:'https://cdn-icons-png.flaticon.com/128/1231/1231448.png',
        slug:'add-emoji-to-text',
        aiPrompt:'Add Emoji to outline text depends on outline and reaction.',
        form:[
            {
                label:'Enter your text to add emojis',
                field:'textarea',
                name:'outline',
                required:true
            }
        ]
    },
    {
        name:'Text Improver',
        desc:'This handy tool refines your writing, eliminating error in grammar.',
        category:'Writing Assistant',
        icon:'https://cdn-icons-png.flaticon.com/128/3815/3815460.png',
        slug:'text-improver',
        aiPrompt:'Given textToImprove, Rewrite text without any grammar mistake.',
        form:[
            {
                label:'Enter text that you want to re-write or improve',
                field:'textarea',
                name:'textToImprove',
                required:true
            }
        ]
    },
    {
        name:'Youtube Tags',
        desc:'An AI tool that service as your personal blog post title and description given.',
        category:'Youtube Tool',
        icon:'https://cdn-icons-png.flaticon.com/128/16973/16973282.png',
        slug:'youtube-tag',
        aiPrompt:'Generate 10 Youtube tags in bullet point based on the given description.',
        form:[
            {
                label:'Enter your blog title',
                field:'input',
                name:'title',
                required:true
            },
            {
                label:'Enter youtube Outline here (Optional)',
                field:'textarea',
                name:'outline'
            }
        ]
    },
    {
        name:'Rewrite Article (plagrism Free)',
        desc:'Use this to rewrite existing Article or Blog Post.',
        category:'Rewriting Tool',
        icon:'https://cdn-icons-png.flaticon.com/128/4998/4998181.png',
        slug:'rewrite-article',
        aiPrompt:'Rewrite give article without any plagiarism in rich text editor format',
        form:[
            {
                label:'Provide your Article/Blogpost or any other content',
                field:'textarea',
                name:'article',
                required:true
            }
        ]
    },
    {
        name:'Instagram Post Generator',
        desc:'An AI tool that service as your personal blog post title and description given.',
        category:'blog',
        icon:'https://cdn-icons-png.flaticon.com/128/2111/2111463.png',
        slug:'instagram-post-generator',
        aiPrompt:'Generate 3 Instagram post depends on a given keywords.',
        form:[
            {
                label:'Enter Keywords for your post',
                field:'input',
                name:'keywords',
                required:true
            }
        ]
    },
    {
        name:'Code Generator',
        desc:'Use this to Generate programme as your given desc',
        category:'programming',
        icon:'https://cdn-icons-png.flaticon.com/128/17030/17030855.png',
        slug:'programme-generator',
        aiPrompt:'Generate programme depends on given keywords',
        form:[
            {
                label:'Enter keywords for your code',
                field:'input',
                name:'keywords',
                required:true
            }
        ]
    },
    {
        name:'Code Explainer',
        desc:'Use this to Explain programme as your given desc',
        category:'programming',
        icon:'https://cdn-icons-png.flaticon.com/128/10061/10061911.png',
        slug:'programme-Explainer',
        aiPrompt:'Generate Explanation of given programme',
        form:[
            {
                label:'Enter your code',
                field:'textarea',
                name:'programming',
                required:true
            }
        ]
    }
    
]