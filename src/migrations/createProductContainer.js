module.exports = function(migration) {
    const productContainer = migration
        .createContentType("productContainer")
        .name("Product Container")
        .description("productContainer")
        .displayField("title");

    const title = productContainer
        .createField("title")
        .name("Title")
        .type("Symbol")
        .required(true);

    const products = productContainer
        .createField("products")
        .name("Products")
        .type("Array")
        .items({
            type: "Link",
            linkType: "Entry",
            validations: [{linkContentType: ["productContentContainer"]}]
        }) 
}