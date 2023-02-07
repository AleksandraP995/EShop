import { NEXT_PUBLIC_DELIVERY_TOKEN, NEXT_PUBLIC_ENVIRONMENT, NEXT_PUBLIC_PREVIEW_TOKEN, NEXT_PUBLIC_SPACE_ID } from "./env";
import * as contentful from "contentful";

const space_id = NEXT_PUBLIC_SPACE_ID; 
const access_token = NEXT_PUBLIC_DELIVERY_TOKEN;
const preview_token = NEXT_PUBLIC_PREVIEW_TOKEN;
const environment = NEXT_PUBLIC_ENVIRONMENT;

export const connectToContentful = () => {
    const client = contentful.createClient({
        space: NEXT_PUBLIC_SPACE_ID, //"1bf096ggcc0p",
        environment: NEXT_PUBLIC_ENVIRONMENT, //'Orijentiring',
        accessToken: NEXT_PUBLIC_DELIVERY_TOKEN //"4HFZKeK2Vegtd6mFum7amML8bGsV8yudvfT1GOJZG4w"
    })
    return client;
}