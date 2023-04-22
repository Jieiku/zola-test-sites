# zola-test-sites

This is to test the file templates feature I am trying to implement.

It would allow you to create a template of a javacript file.

https://github.com/getzola/zola/issues/2167

This would have benefits when loading resources from a javascript file:

- correct base_url
- cachebusting
- language versions of files
- subresource Integrity checks

(basically everything you can currently do in md/html with zola's excellent functions)

```bash
mkdir ~/zdev

cd ~/zdev
git clone --branch next https://github.com/Jieiku/zola
cd zola
cargo build
cd ~/zdev
git clone https://github.com/Jieiku/zola-test-sites
```


The below works, the search.js file is created properly. At first glance it appears I am close.
```bash
cd ~/zdev/zola-test-sites/works
~/zdev/zola/target/debug/zola build
```


The problem comes when you try to reference the search.js file.
I can no longer use `get_url` on search.js if it is created from the file_templates directory.
```bash
cd ~/zdev/zola-test-sites/fails
~/zdev/zola/target/debug/zola build
```

```
Error: Failed to build the site
Error: Failed to render section '/home/jieiku/zdev/zola-test-sites/fails/content/_index.md'
Error: Reason: Failed to render 'index.html' (error happened in 'base.html').
Error: Reason: Function call 'get_url' failed
Error: Reason: `get_url`: Could not find or open file search.js
```
