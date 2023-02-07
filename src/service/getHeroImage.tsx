import { connectToContentful } from "../migrations/contentfulConnection";
import { HeroImageModel } from "../models/HeroImageModel";
import { findObject } from "./findObject";

const client = connectToContentful();

export const getHeroImage = () => {

    const getHeroImageContent = async (slug: string): Promise<HeroImageModel | undefined> => { 
        try {
            const heroImageObject = await client.getEntries()
            .then((response : any) => {
                const foundObject = findObject(response.items, slug);
                //console.log(foundObject);

                const slugStr = foundObject['fields']['slug'];
                const heroImageStr = foundObject['fields']['heroImage']['fields']['file']['url'];
                const title = foundObject['fields']['title'];

                const heroImageObject : HeroImageModel = {
                    title: title,
                    slug: slugStr,
                    heroImage: heroImageStr
                }
              return  heroImageObject;

            })
            .catch(console.error);
            return heroImageObject!;

        } catch(err){
            console.log(`There was an error: ${err}`);
            
        }
    } 
    return { getHeroImageContent }
}

export default getHeroImage;