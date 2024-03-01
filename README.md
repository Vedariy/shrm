# Getting Started with SHRM demo
### 1. Clone repository into your website directory (certain path depends on certain server)
 `git clone git@github.com:Vedariy/shrm.git`

### 2. Do `npm install` 


### 3. Open `/src/App.jsx` file 

### 4. Go to Line 18. 
It should contain `export const $API_BASE_URL = 'http://3.83.124.41:8000'` . If not - find this content around.

### 5. Replace http://3.83.124.41:8000 with your Shrm server API URL  

### 6. Run `npm run build` to generate minified static content

### 7. Website index file will appear as ./build/index.html

### 8. Other actions depends on your server features


### ... General notes for common CRA apps deployment:

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

