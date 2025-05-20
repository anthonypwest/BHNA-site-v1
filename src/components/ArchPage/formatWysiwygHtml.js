const cheerio = require("cheerio");

const formatWysiwygHtml = htmlString => {
  const $ = cheerio.load(htmlString);

  // 1. Increase font size for bold text
  $("strong, b").each(function () {
    $(this).css("font-size", "1.2em");
  });

  // 2. Add EM spaces before lines starting with bullets
  const bulletRegex = /^[•–\-*]/;
  $("body *").each(function () {
    $(this)
      .contents()
      .filter((i, el) => el.type === "text")
      .each((i, el) => {
        const text = $(el).text();
        const lines = text.split("\n").map(line =>
          bulletRegex.test(line.trim())
            ? "\u2003\u2003" + line
            : line
        );
        $(el).replaceWith(lines.join("\n"));
      });
  });

  return $("body").html();
};

module.exports = formatWysiwygHtml;
