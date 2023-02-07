module.exports = function(migration) {
    const heroImageContent = migration
        .createContentType("heroImage")
        .name("Hero Image")
        .description("Entry Image")
        .displayField("title")

    const title = heroImageContent
        .createField("title")
        .name("Title")
        .type("Symbol")
        .required(true);
    
    const heroImage = heroImageContent
        .createField("heroImage")
        .name("Hero Image")
        .type("Link")
        .linkType("Asset")
        .required(true);
    
    const slug = heroImageContent
        .createField("slug")
        .name("Slug")
        .type("Symbol")
        .required(true);  

}