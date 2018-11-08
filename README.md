Running a local server:

1. Open the 'terminal' application on your mac
2. Type 'cd /Path/to/parent/folder' and hit enter to navigate to your app folder (you can also drag a folder into the command prompt to have it auto-fill the path)
3. Type 'python -m SimpleHTTPServer 8000' in the terminal to start the local server
Go to localhost:8000 in your browser to load your web app! (If this doesn't work, try 'python -m http.server 8000' instead)
4. It should load changes to your files automatically, but if you need to restart the sever: press 'ctrl+C' in the terminal to stop the server. Run 'python -m SimpleHTTPServer 8000' again to restart it with your changes.
