module.exports = function(migration) {
    const productModel = migration
        .createContentType("productContentContainer")
        .name("Product")
        .description("Product object")
        .displayField("title")

    const id = productModel
        .createField("id")
        .name("Id")
        .type("Symbol")
        .required(true);

    const title = productModel
        .createField("title")
        .name("Title")
        .type("Symbol")
        .required(true);
    
    const productImage = productModel
        .createField("productImage")
        .name("Product Image")
        .type("Link")
        .linkType("Asset")
        .required(true);

    const price = productModel
        .createField("price")
        .name("Price")
        .type("Number")
        .required(true);
    
    const rating = productModel
        .createField("rating")
        .name("Rating")
        .type("Number")
        .required(true);
}