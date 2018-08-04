module.exports = {
    book: {
        assets: "./assets",
        js: [
            "zouhuigang_gitbook.js"
        ]
    },
    hooks:{
        //page before指的是markdown中的内容
        "page:before": function(page) {
            page.content = "aaa# Title\n" +page.content;
            return page;
        },
        //替换html中的内容
        "page": function(page) {
            return page;
        }
    }
};
