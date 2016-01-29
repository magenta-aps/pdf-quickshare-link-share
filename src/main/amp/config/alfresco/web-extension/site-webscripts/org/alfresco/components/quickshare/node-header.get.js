function main()
{
   var shareId = args.shareId,
      result = remote.connect("alfresco-noauth").get("/api/internal/shared/node/" + encodeURIComponent(shareId) + "/metadata");

   if (result.status == 200)
   {
      var nodeMetadata = JSON.parse(result);

      var prefix = '/alfresco-noauth/api/internal/shared/node/';
      var noCache = (new Date()).getTime();

      if (nodeMetadata.mimetype == 'application/pdf') {
         model.pdfUrl = prefix + encodeURIComponent(shareId) + "/content/" + nodeMetadata.name + "?c=force&noCache=" + noCache + "&a=true";
      } else {
         // Handle thumbnails

         // Grab PDF thumbnail lastModified date
         var thumbnailData = nodeMetadata.lastThumbnailModificationData;
         var pdfLastModified = null;
         for (var i = 0; i < thumbnailData.length; i++) {
            if (thumbnailData[i].indexOf("pdf:") === 0) {
               pdfLastModified = thumbnailData[i];
               break;
            }
         }

         model.pdfUrl = prefix + encodeURIComponent(shareId) + "/content/thumbnails/pdf?c=force&a=true";
         // Append last modified if available
         if (pdfLastModified !== null) {
            model.pdfUrl += "&lastModified=" + encodeURIComponent(pdfLastModified);
         }
      }
   }

}

main();
