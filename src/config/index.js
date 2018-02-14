export const COMMENT_SPACE = 20;
export const REDDIT_URL = 'https://www.reddit.com';
const JSON_PATTERN = '/.json';
export const URL_LIST = [
    {
        key: 'main',
        title: 'Home',
        items: [
            {
                key: 'acc',
                title: 'Home',
                url: REDDIT_URL + JSON_PATTERN
            },
            {
                key: 'rising',
                title: 'Rising',
                url: REDDIT_URL + '/rising' + JSON_PATTERN
            },
            {
                key: 'controversial',
                title: 'Controversial',
                url: REDDIT_URL + '/controversial' + JSON_PATTERN
            },
            {
                key: 'top',
                title: 'Top',
                url: REDDIT_URL + '/top' + JSON_PATTERN
            }
        ]
    },
    {
        key: 'funny',
        title: 'Funny',
        items: [
            {
                key: 'wtf',
                title: 'WTF',
                url: REDDIT_URL + '/r/wtf' + JSON_PATTERN
            },
            {
                key: 'aww',
                title: 'Aww',
                url: REDDIT_URL + '/r/aww' + JSON_PATTERN
            },
            {
                key: 'pics',
                title: 'Pics',
                url: REDDIT_URL + '/r/pics' + JSON_PATTERN
            },
            {
                key: 'videos',
                title: 'Videos',
                url: REDDIT_URL + '/r/videos' + JSON_PATTERN
            },
            {
                key: 'gifs',
                title: 'Gifs',
                url: REDDIT_URL + '/r/gifs' + JSON_PATTERN
            },
            {
                key: 'funny',
                title: 'Funny',
                url: REDDIT_URL + '/r/funny' + JSON_PATTERN
            },
            {
                key: 'AdviceAnimals',
                title: 'Advice animals',
                url: REDDIT_URL + '/r/AdviceAnimals' + JSON_PATTERN
            }
        ]
    },
    {
        key: 'gaming',
        title: 'Gaming',
        items: [
            {
                key: 'leagueoflegends',
                title: 'Lol',
                url: REDDIT_URL + '/r/leagueoflegends' + JSON_PATTERN
            },
            {
                key: 'gaming',
                title: 'Gaming',
                url: REDDIT_URL + '/r/gaming' + JSON_PATTERN
            }
        ]
    },
    {
        key: 'news',
        title: 'News',
        items: [
            {
                key: 'politics',
                title: 'Politics',
                url: REDDIT_URL + '/r/politics' + JSON_PATTERN
            },
            {
                key: 'worldnews',
                title: 'World news',
                url: REDDIT_URL + '/r/worldnews' + JSON_PATTERN
            },   
            {
                key: 'science',
                title: 'Science',
                url: REDDIT_URL + '/r/science' + JSON_PATTERN
            }
        ]
    },
    {
        key: 'technology',
        title: 'Technology',
        items: [
            {
                key: 'technology',
                title: 'Technology',
                url: REDDIT_URL + '/r/technology' + JSON_PATTERN
            },
            {
                key: 'programming',
                title: 'Programming',
                url: REDDIT_URL + '/r/programming' + JSON_PATTERN
            },
            {
                key: 'Bitcoin',
                title: 'Btc',
                url: REDDIT_URL + '/r/Bitcoin' + JSON_PATTERN
            }
        ]
    },   
    {
        key: 'stories',
        title: 'Stories',
        items: [
            {
                key: 'AskReddit',
                title: 'Ask reddit',
                url: REDDIT_URL + '/r/AskReddit' + JSON_PATTERN
            },
            {
                key: 'IAmA',
                title: 'I am a',
                url: REDDIT_URL + '/r/IAmA' + JSON_PATTERN
            },
            {
                key: 'bestof',
                title: 'Best of',
                url: REDDIT_URL + '/r/bestof' + JSON_PATTERN
            }
        ]
    }
];