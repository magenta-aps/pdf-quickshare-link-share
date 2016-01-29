<@standalone>
   <@markup id="css" >
      <#-- CSS Dependencies -->
      <@link rel="stylesheet" type="text/css" href="${url.context}/res/components/quickshare/node-header.css" />
   </@>

   <@markup id="js"/>

   <@markup id="widgets"/>

   <@markup id="html">
      <script>
        // Strip "/alfresco/" off the end of PROXY_URI
        var PROXY_NO_AUTH_URI = Alfresco.constants.PROXY_URI.substring(0, Alfresco.constants.PROXY_URI.length - "/alfresco/".length);
        location.href = PROXY_NO_AUTH_URI + "${pdfUrl}";
      </script>
   </@>
</@>