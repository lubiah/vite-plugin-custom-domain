# vite-plugin-custom-domain
![Demo example](/img/a.jpg)

Have you ever wanted to use a custom domain name either than `localhost` when developing locally?  
This plugin allows you to do just that and you don't need to set up anything in order to make it work.  

Just specify the domain name and you are good to go.

## Installation
You can install using any of your package manangers  
* pnpm  
  `pnpm add -D vite-plugin-custom-domain`

* npm  
 `npm install --save-dev vite-plugin-custom-domain`

* yarn  
 `yarn add -D vite-plugin-custom-domain`

## Usage

Using it is very simple, just see.  
Inside your `vite.config.ts` or `vite.config.js` file, import the module.

```javascript
// vite.config.js
import { defineConfig } from "vite";
import customDomain from "vite-plugin-custom-domain";

export default defaultConfig({
    plugins: [
        customDomain({
            // You can specify any number of domain names
            "127.0.0.1":  ["website.demo.test","admin.demo.test"],
        })
    ],
    //Then you specify the domain name which should be used primarily
    host: "website.demo.test"
})
```
If you are using localhost, you need to use `127.0.0.1` then you add any number of domain names you want.
You can also specify more ip addresses if you want.

```javascript
// vite.config.js
import { defineConfig } from "vite";

export default defaultConfig({
    plugins: [
        customDomain({
            // You can specify any number of domain names
            "127.0.0.1":  ["website.demo.test","admin.demo.test"],
            "198.183.23.1": ["facebook.test","google.test","whatsapp.test"]
        })
    ],
    //Then you specify the domain name which should be used primarily
    host: "website.demo.test"
})
```

and that's all, your vite server will open on the name which you provided in the `host` option.

## How does it work?
It works by adding the domain name which you specify to your `/etc/hosts` file.  

I know you can manually add the domain name which you want to use to your `/etc/hosts` file but the advantage
of this plugin is that, it doesn't clutter the file. The domain names are only added when you call `vite` and they are removed immediately you close the dev server.

It tries to remove the domain name even if you forcefully close the server.
Give it a star on github if you found it useful