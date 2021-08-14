# Vision API Demo

Vision API Demo is a Node.js script to detect text in a image using [Cloud Vision API](https://cloud.google.com/vision).

## How to use

### node

```bash
$ GOOGLE_APPLICATION_CREDENTIALS=./serviceAccount.json node index.js -f './image.jpg'
```

### ts-node

```bash
$ GOOGLE_APPLICATION_CREDENTIALS=./serviceAccount.json ts-node index.ts -f './image.jpg'
```

`./serviceAccount.json` is a path to a JSON file that contains your GCP service account key. `-f` is a required option and points to a path to an image file.

## Article (Japanese)

https://mokajima.com/vision-api/
