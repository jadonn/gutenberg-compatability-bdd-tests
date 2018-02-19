const assert = require('assert');
const localConf = require('../../../local.conf');

describe('Test Gutenberg page and post editors', function(){
    
    before(function() {
        browser.url(localConf.websiteSubfolder + '/wp-admin');
        browser.setValue('#user_login', localConf.user);
        browser.setValue('#user_pass', localConf.password);
        browser.click('#wp-submit');
        browser.click('#menu-pages');
        browser.click('=Add New');
    });
    it('loads Gutenberg', async function(){
        const gutenbergLoads = browser.isExisting('.gutenberg')
        assert(gutenbergLoads, 'No .gutenberg class found.');
    });
    it('publishes a new page', async function(){
        browser.click('[aria-label="Add block"]');
        browser.click('button=Paragraph');
        browser.setValue('[placeholder="Add title"]', 'This is an automated title.');
        browser.setValue('[aria-label="Add text or type / to add content"]', 'This is automated content.');
        await browser.click('button=Publish...');
        await browser.click('button=Publish');
        const postPublished = browser.isExisting('span=Post published!');
        assert(postPublished, 'No post published success message.');
    });
    it('deletes the new page', async function(){
        browser.click('[aria-label="Close Publish Panel"]');
        await browser.click('button.button-link-delete');
        const movedToTrashMessageExists = browser.isExisting('p=1 page moved to the Trash.');
        assert(movedToTrashMessageExists, 'No page moved to trash message.');
    });
    it('publishes a new post', async function(){
        browser.click('#menu-posts');
        browser.click('=Add New');
        browser.click('[aria-label="Add block"]');
        browser.click('button=Paragraph');
        browser.setValue('[placeholder="Add title"]', 'This is an automated post title.');
        browser.setValue('[aria-label="Add text or type / to add content"]', 'This is automated post content.');
        await browser.click('button=Publish...');
        await browser.click('button=Publish');
        const postPublished = browser.isExisting('span=Post published!');
        assert(postPublished, 'No post published success message.');
    });
    it('deletes the new post', async function(){
        browser.click('[aria-label="Close Publish Panel"]');
        await browser.click('button.button-link-delete');
        const movedToTrashMessageExists = browser.isExisting('p=1 post moved to the Trash.');
        assert(movedToTrashMessageExists, 'No post moved to trash message.');
    });
});