var obj = [{
    "link":
        "https://ful.io",
    "Social links": ["https://www.facebook.com/fulioTech/",
        "https://www.linkedin.com/company/ful-io/"],
    "e-mail": "support@ful.io",
    "contact": "+1 343 303 6668"
}, {
    "link":
        "https://abc.com",
    "Social links": ["https://www.facebook.com/abc/",
        "https://www.linkedin.com/company/abc/"],
    "e-mail": "support@abc.com",
    "contact": "+1 454 101 4466"
}];

function func(input) {
    for (let i = 0; i <= obj.length; i++) {
        input = obj[i].link;
        let a = "Social Links - " + "\n" + obj[i]["Social links"][0] + "\n" + obj[i]["Social links"][1] + "\n";
        let b = "Email(s): " + obj[i]["e-mail"] + "\n";
        let c = "Contact: " + obj[i].contact + "\n";
        return a + b + c;
    }
}

console.log(func("https://ful.io"));
console.log(func("https://abc.com"));