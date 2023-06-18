import { TLanguageItem } from "./menu-content/Languages"

export type CareerItem = {
    title: string
    subTitle: string
    order: number
    languages?: TLanguageItem[]
    projects: string[]
    withContactButton?: boolean
}
export const careerItems: CareerItem[] = [
    {
        "title": "Frits",
        "subTitle": "2017-2021",
        "order": 1,
        "languages": ["vue", "nuxt", "terraform", "kubernetes", "digitalocean"] as unknown as TLanguageItem[],
        "projects": [
            "Migration to NuxtJS",
            "SEO performance improvements",
            "Calender Backend & UI",
        ]
    },
    {
        "title": "Biller",
        "subTitle": "2021-now",
        "order": 2,
        "languages": ["react", "python", "terraform", "aws"] as unknown as TLanguageItem[],
        "projects": [
            "Telemetry pipeline",
            "Infrastructure as code with Terraform ",
            "Deploy pipeline & deploy tool for devs",
            "Moved wordpress/php content app from agency to self-hosted",
        ]
    },
    {
        "title": "VonWood",
        "subTitle": "2023-now",
        "order": 3,
        "languages": ["react", "next", "python", "aws"] as unknown as TLanguageItem[],
        "projects": [
            "Product catalog V2 with Algolia",
            "Migration from 'create react app' to NextJS",
        ]
    },
    {
        "title": "Next",
        "subTitle": "future",
        "order": 4,
        "projects": [
            "You tell me what's next",
        ],
        "withContactButton": true
    },
]

export const navItems = [
    {
        "title": "career",
        "desktopMenuFoldoutWidth": 600,
        "order": 1,
        "subItems": careerItems
    },
    {
        "title": "about",
        "desktopMenuFoldoutWidth": 450,
        "order": 2
    },
    {
        "title": "languages",
        "desktopMenuFoldoutWidth": 400,
        "order": 3
    },
]