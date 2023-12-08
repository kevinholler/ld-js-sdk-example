# LaunchDarkly Javascript SDK Example with Release Flag

This is a basic example of how to set up the Launchdarkly Javascript SDK, using a feature flag. In this example we will:

- Create a basic client-side login page with HTML, CSS and Javascript
- Use a Launchdarkly release flag, to toggle on/off a feature in realtime via the LaunchDarkly dashboard
- Use Segments to target specific users by country (Germany, Ireland)
- Use Targets to target a specifc user 

### Supporting Docs
- Javascript SDK reference: https://docs.launchdarkly.com/sdk/client-side/javascript
- Creating new flags: https://docs.launchdarkly.com/home/creating-flags/feature-flags
- Flag types: https://docs.launchdarkly.com/home/flag-types
- Segments: https://docs.launchdarkly.com/home/segments
- Contexts: https://docs.launchdarkly.com/home/contexts

### Launchdarkly Setup
- Create a Segment "Users in Germany or Ireland", which expects the 'country' field to include 'Germany' or 'Ireland'
- Create a new 'Release' feature flag named 'login, with Client-side SDK ID enabled
- Add a rule and select the Segment created above

### Local Setup
- Download the 3 files (index.html, styles.css, script.js)
- Replace the SDK key in script.js (see comments), required to initialize/authenticate the connection
- Set the feature flag key in script.js (e.g. 'login'). If you named the flag something else you will need to put this here.
- Open index.html 

### Additional notes
- This example uses the Javascript SDK version 3.x 
- This example makes the SDK available via script tag (unpkg.com hosted). If you're managing JS deps as part of the application build, you can also [import the SDK](https://docs.launchdarkly.com/sdk/client-side/javascript#making-the-sdk-available-with-a-package-manager)
- Make sure no ad blockers are running when testing locally
- The SDK is optimised to periodically flush events + wait until enough events have been collected before flushing events to LaunchDarkly. This example uses client.flush(); to flush after each page load.
