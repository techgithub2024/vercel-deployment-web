const React = require("react");

/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */
exports.onRenderBody = ({ setHtmlAttributes, setHeadComponents }) => {
  setHtmlAttributes({ lang: `en` });

  setHeadComponents([
    // SMTP.js CDN
    <script src="https://smtpjs.com/v3/smtp.js">
</script>
  ]);
};