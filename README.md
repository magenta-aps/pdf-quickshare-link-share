PDF QuickShare Link Share module
================================

This project provides an Alfresco Share AMP module which alters the function of the Alfresco QuickShare functionality (described in http://docs.alfresco.com/community/tasks/library-item-share.html).
Instead of coming to a preview page similar to the document details page, the user is sent directly to a PDF download of the document.
If the document is a PDF, they get the original document. If it is not a PDF, then the PDF rendition (thumbnail) is returned as a download.

To build, run `mvn package` and copy the AMP file in the target directory to your `amps_share` directory and apply the AMP file.

License: Apache License Version 2.0 see `COPYING.txt`.
