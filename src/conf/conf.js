const conf = {
    appwriteUrl: import.meta.env.VITE_APPWRITE_URL,
    appwritedatabaseid: import.meta.env.VITE_APPWRITE_DATABASE_ID,
    appwriteprojectid: import.meta.env.VITE_APPWRITE_PROJECT_ID,
    appwritecollectionid: import.meta.env.VITE_APPWRITE_COLLECTION_ID,
    appwritebucketid: import.meta.env.VITE_APPWRITE_BUCKET_ID,
};
console.log('conf object:', conf);
const { VITE_APPWRITE_URL, VITE_APPWRITE_DATABASE_ID, VITE_APPWRITE_PROJECT_ID, VITE_APPWRITE_COLLECTION_ID, VITE_APPWRITE_BUCKET_ID } = import.meta.env;

if (!VITE_APPWRITE_URL || !VITE_APPWRITE_DATABASE_ID || !VITE_APPWRITE_PROJECT_ID || !VITE_APPWRITE_COLLECTION_ID || !VITE_APPWRITE_BUCKET_ID) {
    throw new Error('Missing required environment variables in conf.js');
}

export default conf;