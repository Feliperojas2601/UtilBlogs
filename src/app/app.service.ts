import { Injectable, Signal, signal } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class BlogService {
    private blogsSignal: Signal<{ name: string; url: string }[]> = signal([
        { name: 'Airbnb', url: 'https://medium.com/airbnb-engineering' },
        { name: 'Amazon', url: 'https://developer.amazon.com/blogs' },
        { name: 'Asana', url: 'https://blog.asana.com/category/eng' },
        { name: 'Atlassian', url: 'https://developer.atlassian.com/blog' },
        { name: 'Bittorrent', url: 'http://engineering.bittorrent.com' },
        { name: 'Cloudera', url: 'https://blog.cloudera.com' },
        { name: 'Docker', url: 'https://blog.docker.com' },
        { name: 'Dropbox', url: 'https://blogs.dropbox.com/tech' },
        { name: 'eBay', url: 'http://www.ebaytechblog.com' },
        { name: 'Facebook', url: 'https://code.facebook.com/posts' },
        { name: 'GitHub', url: 'https://githubengineering.com' },
        { name: 'Google', url: 'https://developers.googleblog.com' },
        { name: 'Groupon', url: 'https://engineering.groupon.com' },
        { name: 'Highscalability', url: 'http://highscalability.com' },
        { name: 'Instacart', url: 'https://tech.instacart.com' },
        { name: 'Instagram', url: 'https://engineering.instagram.com' },
        { name: 'Linkedin', url: 'https://engineering.linkedin.com/blog' },
        { name: 'Mixpanel', url: 'https://mixpanel.com/blog' },
        { name: 'Netflix', url: 'https://medium.com/netflix-techblog' },
        { name: 'Nextdoor', url: 'https://engblog.nextdoor.com' },
        { name: 'PayPal', url: 'https://www.paypal-engineering.com' },
        { name: 'Pinterest', url: 'https://engineering.pinterest.com' },
        { name: 'Quora', url: 'https://engineering.quora.com' },
        { name: 'Reddit', url: 'https://redditblog.com' },
        { name: 'Salesforce', url: 'https://developer.salesforce.com/blogs/engineering' },
        { name: 'Shopify', url: 'https://engineering.shopify.com' },
        { name: 'Slack', url: 'https://slack.engineering' },
        { name: 'Soundcloud', url: 'https://developers.soundcloud.com/blog' },
        { name: 'Spotify', url: 'https://labs.spotify.com' },
        { name: 'Stripe', url: 'https://stripe.com/blog/engineering' },
        { name: 'System design primer', url: 'https://github.com/donnemartin/system-design-primer' },
        { name: 'Twitter', url: 'https://blog.twitter.com/engineering/en_us.html' },
        { name: 'Thumbtack', url: 'https://www.thumbtack.com/engineering' },
        { name: 'Uber', url: 'http://eng.uber.com' },
        { name: 'Yahoo', url: 'https://yahooeng.tumblr.com' },
        { name: 'Yelp', url: 'https://engineeringblog.yelp.com' },
        { name: 'Zoom', url: 'https://medium.com/zoom-developer-blog' },
    ]);

    getBlogs() {
        return this.blogsSignal;
    }
}
