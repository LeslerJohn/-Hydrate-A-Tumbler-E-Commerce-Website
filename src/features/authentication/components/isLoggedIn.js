document.getElementById("sign-in-btn").addEventListener("click", function() {
    localStorage.setItem("signedIn", "true");
});

function removeVerifyScript() {
    // Find the verify.js script tag and remove it from the document
    const scriptTag = document.querySelector('script[src="../../features/authentication/components/verify.js"]');
    if (scriptTag) {
        scriptTag.remove();
    }
}

const signedIn = localStorage.getItem("signedIn");
if (signedIn === "true") {
    // Do something
    removeVerifyScript();
}