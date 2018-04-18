class VoyagerController < ApplicationController
  def index
    render html: voyager_html.html_safe
  end

  private

  def voyager_html
    <<-EOT
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body {
              height: 100%;
              margin: 0;
              width: 100%;
              overflow: hidden;
            }
            #voyager {
              height: 100vh;
            }
          </style>
          <script src="//cdn.jsdelivr.net/es6-promise/4.0.5/es6-promise.auto.min.js"></script>
          <script src="//cdn.jsdelivr.net/fetch/0.9.0/fetch.min.js"></script>
          <script src="//cdn.jsdelivr.net/react/15.4.2/react.min.js"></script>
          <script src="//cdn.jsdelivr.net/react/15.4.2/react-dom.min.js"></script>
          <link rel="stylesheet" href="assets/voyager.css" />
          <script src="assets/voyager.js"></script>
        </head>
        <body>
          <div id="voyager">Loading...</div>
          <script>
            function introspectionProvider(introspectionQuery) {
              return fetch('/graphql', {
                method: 'post',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({query: introspectionQuery}),
                credentials: 'include',
              }).then(function (response) {
                return response.text();
              }).then(function (responseBody) {
                try {
                  return JSON.parse(responseBody);
                } catch (error) {
                  return responseBody;
                }
              });
            }
            GraphQLVoyager.init(document.getElementById('voyager'), {
              introspection: introspectionProvider
            });
          </script>
        </body>
      </html>
    EOT
  end
end
