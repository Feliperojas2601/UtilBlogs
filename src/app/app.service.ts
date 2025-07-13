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

    private realWorldSystemsSignal: Signal<{ company: string; resources: { title: string; url: string }[] }[]> = signal([
        {
            company: 'Facebook',
            resources: [
                { title: 'Facebook Timeline: Brought To You By The Power Of Denormalization', url: 'https://goo.gl/FCNrbm' },
                { title: 'Scale at Facebook', url: 'https://goo.gl/NGTdCs' },
                { title: 'Building Timeline: Scaling up to hold your life story', url: 'https://goo.gl/8p5wDV' },
                { title: 'Erlang at Facebook (Facebook chat)', url: 'https://goo.gl/zSLHrj' },
                { title: 'Facebook Chat', url: 'https://goo.gl/qzSiWC' },
                { title: 'Finding a needle in Haystack: Facebook\'s photo storage', url: 'https://goo.gl/edj4FL' },
                { title: 'Serving Facebook Multifeed: Efficiency, performance gains through redesign', url: 'https://goo.gl/adFVMQ' },
                { title: 'Scaling Memcache at Facebook', url: 'https://goo.gl/rZiAhX' },
                { title: 'TAO: Facebook\'s Distributed Data Store for the Social Graph', url: 'https://goo.gl/Tk1DyH' }
            ]
        },
        {
            company: 'Amazon',
            resources: [
                { title: 'Amazon Architecture', url: 'https://goo.gl/k4feoW' },
                { title: 'Dynamo: Amazon\'s Highly Available Key-value Store', url: 'https://goo.gl/C7zxDL' }
            ]
        },
        {
            company: 'Netflix',
            resources: [
                { title: 'A 360 Degree View Of The Entire Netflix Stack', url: 'https://goo.gl/rYSDTz' },
                { title: 'It\'s All A/Bout Testing: The Netflix Experimentation Platform', url: 'https://goo.gl/agbA4K' },
                { title: 'Netflix Recommendations: Beyond the 5 stars (Part 1)', url: 'https://goo.gl/A4FkYi' },
                { title: 'Netflix Recommendations: Beyond the 5 stars (Part 2)', url: 'https://goo.gl/XNPMXm' }
            ]
        },
        {
            company: 'Google',
            resources: [
                { title: 'Google Architecture', url: 'https://goo.gl/dvkDiY' },
                { title: 'The Google File System (Google Docs)', url: 'https://goo.gl/xj5n9R' },
                { title: 'Differential Synchronization (Google Docs)', url: 'https://goo.gl/9zqG7x' },
                { title: 'YouTube Architecture', url: 'https://goo.gl/mCPRUF' },
                { title: 'Seattle Conference on Scalability: YouTube Scalability', url: 'https://goo.gl/dH3zYq' },
                { title: 'Bigtable: A Distributed Storage System for Structured Data', url: 'https://goo.gl/6NaZca' }
            ]
        },
        {
            company: 'Instagram',
            resources: [
                { title: 'Instagram Architecture: 14 Million Users, Terabytes Of Photos, 100s Of Instances, Dozens Of Technologies', url: 'https://goo.gl/s1VcW5' }
            ]
        },
        {
            company: 'Twitter',
            resources: [
                { title: 'The Architecture Twitter Uses To Deal With 150M Active Users', url: 'https://goo.gl/EwvfRd' },
                { title: 'Scaling Twitter: Making Twitter 10000 Percent Faster', url: 'https://goo.gl/nYGC1k' },
                { title: 'Announcing Snowflake (Snowflake is a network service for generating unique ID numbers at high scale with some simple guarantees)', url: 'https://goo.gl/GzVWYm' },
                { title: 'Timelines at Scale', url: 'https://goo.gl/8KbqTy' }
            ]
        },
        {
            company: 'Uber',
            resources: [
                { title: 'How Uber Scales Their Real-Time Market Platform', url: 'https://goo.gl/kGZuVy' }
            ]
        },
        {
            company: 'Pinterest',
            resources: [
                { title: 'Scaling Pinterest', url: 'https://goo.gl/KtmjW3' },
                { title: 'Pinterest Architecture Update', url: 'https://goo.gl/w6rRsf' }
            ]
        },
        {
            company: 'LinkedIn',
            resources: [
                { title: 'A Brief History of Scaling LinkedIn', url: 'https://goo.gl/8A1Pi8' }
            ]
        },
        {
            company: 'Flickr',
            resources: [
                { title: 'Flickr Architecture', url: 'https://goo.gl/dWtgYa' }
            ]
        },
        {
            company: 'Dropbox',
            resources: [
                { title: 'How We\'ve Scaled Dropbox', url: 'https://goo.gl/NjBDtC' }
            ]
        },
        {
            company: 'WhatsApp',
            resources: [
                { title: 'The WhatsApp Architecture Facebook Bought For $19 Billion', url: 'https://bit.ly/2AHJnFn' }
            ]
        }
    ]);

    getBlogs() {
        return this.blogsSignal();
    }

    getRealWorldSystems() {
        return this.realWorldSystemsSignal();
    }
}
