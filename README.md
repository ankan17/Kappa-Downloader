This app helps you in downloading photos and videos from Instagram and videos from Youtube with only one click on the extension button. But for
downloading the youtube videos you need a desktop client which will be provided along with the extension.
 

Following steps will help you in installing the extension :
1. Download the zip file from this gthub page and extract it.
2. Open up chrom and type in this URL : chrome://extensions
3. Check in the Developer mode box which is on the top of the page to the right
4. Click on load Unpacked extensions and select the extracted folder. Click on open
5. The extension is good to go.
6. Whenever you are on a page just click on the green frog icon at the top right corner.

Following steps will help you in installing the Desktop client(only required for Youtube):
1. (Yet to be created)

NOTE : This extension is still in construction. The Instagram features works only partially and the YouTube feature doesn't work at all.	
       The Youtube feature might require a Desktop app to help in the download process. Because youtube downloader modules like youtube-dl
       can only work on the back-end side and this extension works on the front-end. So i am thinking about building an electron app which
       listens for message from this extension and downloads videos accordingly. The electron app which will run on the desktop will hold
       the main downloader module which in this case will be youtube-dl. Now in order to listen for the messages from the extension the desktop
       app must be running. I can enable runnig of the app on startup of the OS for a Windows platform but one has to manually run the app on an
       Linux OS.
